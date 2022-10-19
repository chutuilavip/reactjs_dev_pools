import React, { useState } from "react";
import { TitleFriend, WrapFriend, StyleSearch, ListItems } from "./styled";
import iconSearch from "../../assets/Header/search.png";
import Friend from "./Friend";

const ListFriend = ({ title }) => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <WrapFriend>
      <TitleFriend>
        <div className="_title">{title}</div>
        <div>
          <StyleSearch showSearch={showSearch}>
            <input type="text" placeholder="Search..." />
          </StyleSearch>
          <div className="icon_search" onClick={() => handleSearch()}>
            <img src={iconSearch} alt="search" />
          </div>
        </div>
      </TitleFriend>

      <ListItems>
        <div className="_list_slide">
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
        </div>
      </ListItems>
    </WrapFriend>
  );
};

export default ListFriend;
