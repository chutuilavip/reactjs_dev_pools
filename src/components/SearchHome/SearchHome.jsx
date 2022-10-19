import { useEffect, useRef, useState } from "react";
import { FiClock } from "react-icons/fi";
import search from "../../assets/home/search.png";
import { IoMdClose } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useDebounce from "../../hooks/useDebounde";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useDispatch, useSelector } from "react-redux";
import { getResultSearch } from "../../redux/slice/search.slice";
import { createSearchParams, useNavigate } from "react-router-dom";
import { HistorySearch, KeySearch, WrapSearch } from "./styled";
import { getBalance } from "../../redux/slice/web3.slice";

function SearchHome() {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [showSuggestSearch, setShowSuggestSearch] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  const dataSearch = useSelector(
    (state) => state.resultSearch.resultSearch?.res
  );

  useClickOutSide(ref, () => setShowSuggestSearch(false));

  const dispatch = useDispatch();

  const debounced = useDebounce(word, 500);

  const goToSearch = () =>
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({ key: `${word}` })}`,
    });

  const handleChooseKeySearch = (slug) => {
    navigate(`/detail/${slug}`);
  };

  // Get result search
  useEffect(() => {
    const key = `?key=${debounced}`;
    dispatch(getResultSearch(key));
  }, [debounced]);

  const onChangeWord = (e) => {
    setWord(e.target.value.toLowerCase());
  };

  const onClickSearch = () => {
    setShowSuggestSearch(true);
    const dataSearch = JSON.parse(localStorage.getItem("data"));
    const _data = dataSearch.filter(
      (item, index) => dataSearch.indexOf(item) === index
    );
    if (_data) {
      setData(_data);
    }
  };

  const onKeyPressData = (e) => {
    if (word !== "") {
      if (e.key === "Enter") {
        goToSearch();

        const dataSearch = JSON.parse(localStorage.getItem("data")) || [];
        dataSearch.unshift(word);
        localStorage.setItem("data", JSON.stringify(dataSearch));
        setWord("");
        // const dataSearch = JSON.parse(localStorage.getItem("data"));
        const _data = dataSearch.filter(
          (item, index) => dataSearch.indexOf(item) === index
        );
        if (_data) {
          setData(_data);
        }
      }
    }
  };

  const onRemove = (index) => {
    const _data = data?.filter((item) => data.indexOf(item) !== index);
    if (_data.length !== 0) {
      data.pop();
      setData([]);
    } else {
      setData(_data);
    }
    localStorage.setItem("data", JSON.stringify(_data));
  };
  useEffect(() => {
    const test = async () => {
      try {
        const balance = await getBalance();
        console.log("balance", balance);
      } catch (err) {
        console.log(err);
      }
    };
    test();
  }, []);
  return (
    <WrapSearch word={word}>
      <div className="search_item">
        <LazyLoadImage
          className="icon__search"
          onClick={() => goToSearch()}
          src={search}
          alt="search"
        />
        <input
          type="search"
          placeholder="TYPE YOUR SEARCH HERE"
          onChange={onChangeWord}
          onKeyPress={onKeyPressData}
          value={word}
          onClick={onClickSearch}
        />
      </div>
      {showSuggestSearch && word && (
        <HistorySearch ref={ref}>
          {dataSearch?.data
            // .filter((his) => his.includes(word))
            ?.slice(0, 5)
            .map((item, index) => {
              return (
                <KeySearch key={index} id={index}>
                  <div
                    className="keyRes"
                    onClick={() => {
                      handleChooseKeySearch(item.slug);
                    }}
                  >
                    <FiClock className="icon_oclock" />
                    <span className="icon_oclock">{item.title}</span>
                  </div>
                  <IoMdClose
                    className="icon_close"
                    onClick={() => onRemove(index)}
                  />
                </KeySearch>
              );
            })}
        </HistorySearch>
      )}
    </WrapSearch>
  );
}

export default SearchHome;
