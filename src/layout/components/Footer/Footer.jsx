import Logo from "../../../assets/logoFt.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { setLanguage } from "../../../redux/slice/user.slice";
import { useDispatch } from "react-redux";
import england from "../../../assets/flag/england.png";
import korea from "../../../assets/flag/south-korea.png";
import vietnam from "../../../assets/flag/vietnam.png";
import { ListLanguage, WrapFooter } from "./styled";
import { AiOutlineUp } from "react-icons/ai";
import { useRef, useState } from "react";
import useClickOutSide from "../../../hooks/useClickOutSide";

const languageData = [
  { img: england, name: "English", lang: "en" },
  { img: korea, name: "Korea", lang: "kr" },
  { img: vietnam, name: "Vietnamese", lang: "vi" },
];

function Footer() {
  const dispatch = useDispatch();
  const [lang, setLang] = useState({
    img: england,
    name: "English",
    lang: "en",
  });
  const [showLang, setShowLang] = useState(false);

  const ref = useRef();

  useClickOutSide(ref, () => {
    setShowLang(false);
  });

  const handleProvinceChange = (value) => {
    dispatch(setLanguage(value));
  };

  return (
    <WrapFooter>
      <div className="footer_top">
        <div className="logo">
          <LazyLoadImage src={Logo} alt="logo" />
        </div>

        <ListLanguage status={showLang}>
          <div className="list_lang" ref={ref}>
            {languageData.map((item, index) => {
              return (
                <div
                  style={{
                    background: item.lang === lang.lang ? "#0c6dec83" : "unset",
                  }}
                  className="item_flag"
                  key={index}
                  onClick={() => {
                    setLang(item);
                    handleProvinceChange(item.lang);
                  }}
                >
                  <img src={item.img} alt={item.lang} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>

          <div className="value_lang">
            <div className="flag_name">
              <img src={lang.img} alt="lang" />
              <p>{lang.name}</p>
            </div>
            <AiOutlineUp onClick={() => setShowLang(!showLang)} />
          </div>
        </ListLanguage>

        <div className="content_one">
          Pools! which is the First-Generation NFTs market. With Pools, you can
          search and party with us!
        </div>

        <div className="content_right">
          <ul>
            <li>Access and Download NFT</li>
            <li>Metaverse Applications</li>
            <li>Games</li>
          </ul>
        </div>
      </div>

      <div className="footer_bot">
        <ul>
          <li>About US</li>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact us</li>
        </ul>
      </div>
    </WrapFooter>
  );
}

export default Footer;
