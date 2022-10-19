import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ListMenu, WrapHeader, HeaderMiddle, StyleSearch } from "./styled";
import logo from "../../../assets/Header/logoHeader.png";
import iconSearch from "../../../assets/Header/search.png";
import iconMenu from "../../../assets/Header/icon_menu.png";
import {
  createSearchParams,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { icon_header } from "../../IconLayout";
import MenuUser from "../../../components/MenuUser/MenuUser";
import useClickOutside from "../../../hooks/useClickOutSide";

const Header = (customLayout) => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const goToSearch = () =>
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({ key: `${word}` })}`,
    });

  const handleSearch = () => {
    setShowSearch(!showSearch);
    if (word.length) {
      goToSearch();
    }
  };

  return (
    <WrapHeader status={customLayout.data} show={show}>
      <div className="logo">
        <Link to="/">
          <LazyLoadImage src={logo} alt="logo" />
        </Link>
      </div>
      <HeaderMiddle>
        <div></div>
        <ListMenu>
          {icon_header.map((item, index) => {
            return (
              <NavLink key={index} to={item.path} target={item.target}>
                <LazyLoadImage src={item.icon} alt={item.alt} />
                <p>{item.text}</p>
              </NavLink>
            );
          })}
        </ListMenu>

        <StyleSearch showSearch={showSearch}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setWord(e.target.value)}
          />
        </StyleSearch>
        <div className="icon_search" onClick={() => handleSearch()}>
          <LazyLoadImage src={iconSearch} alt="search" />
        </div>
      </HeaderMiddle>
      <div className="menu" onClick={() => setShow(!show)}>
        <LazyLoadImage src={iconMenu} alt="icon menu" />
      </div>
      <MenuUser show={show} setShow={setShow} />
    </WrapHeader>
  );
};

export default Header;
