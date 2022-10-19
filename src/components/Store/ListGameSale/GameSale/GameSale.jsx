import React from "react";
import { HeroListGameSale, ListPrice } from "./style";

const GameSale = ({ data }) => {
  const {
    imgGameSale,
    nameGameSale,
    descriptionSale,
    priceSale,
    oldPrice,
    newPrice,
  } = data;

  return (
    <HeroListGameSale>
      <div className="img_game_sale_list">
        <img className="img_game_sale_list_item" src={imgGameSale} alt="game" />
      </div>
      <h2 className="name_game">{nameGameSale}</h2>
      <span className="description_gamesale">{descriptionSale}</span>
      <ListPrice>
        <span className="price_sale">{priceSale}</span>
        <span className="price_old_price">{oldPrice}</span>
        <span className="price_new_price">{newPrice}</span>
      </ListPrice>
    </HeroListGameSale>
  );
};

export default GameSale;
