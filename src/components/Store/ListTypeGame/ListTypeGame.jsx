import React from "react";
import ItemGameType from "./ItemGameType";
import { WrapGameType } from "./styled";

const ListTypeGame = () => {
  return (
    <WrapGameType>
      <div className="header">
        <p>Best Seller</p>
        <div className="see_more">See More</div>
      </div>
      <div className="listgame">
        {[...Array(4)].map((item, index) => {
          return <ItemGameType key={index} />;
        })}
      </div>
    </WrapGameType>
  );
};

export default ListTypeGame;
