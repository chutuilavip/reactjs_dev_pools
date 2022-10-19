import React from "react";
import { HeroGame } from "./styled";

const GameItem = ({ data }) => {
  const { imgGame, nameGame, priceGame, description, imgStar, down, imgDown } =
    data;

  return (
    <HeroGame>
      <div className="block_img">
        <img className="img_game" src={imgGame} />
      </div>
      <div className="name_price">
        <span className="title">{nameGame}</span>
        <span className="price_item">{priceGame}</span>
      </div>
      <span className="description">{description}</span>
      <div className="start_down">
        <img src={imgStar} />

        <div>
          <span>{down}</span>
          <img src={imgDown} />
        </div>
      </div>
    </HeroGame>
  );
};

export default GameItem;
