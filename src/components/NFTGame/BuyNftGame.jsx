import React from "react";
import ItemNft from "./ItemNft";
import Iron from "../../assets/nftgame/Iron.png";
import { BuyNftSlide, ListItem, TitleSlide } from "./styled";

const BuyNftGame = () => {
  return (
    <BuyNftSlide>
      {/* <TitleSlide>NFT Games</TitleSlide> */}
      <ListItem>
        <img src={Iron} alt="ironman" className="ironman" />
        <ItemNft />
        <ItemNft />
      </ListItem>
    </BuyNftSlide>
  );
};

export default BuyNftGame;
