import React from "react";
import { ImgItem, InfoItem, ItemBuyGame } from "./styled";
import ImgBanner from "../../assets/nftgame/image.png";
import { Button } from "antd";
const ItemNft = () => {
  return (
    <ItemBuyGame>
      <ImgItem src={ImgBanner} alt="image" />
      <InfoItem>
        <div className="info_item">
          <div className="text_info">
            <div className="title_info">Dota 2</div>
            <div className="title_info_small">
              From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly
              diverse.
            </div>
          </div>
          <div className="price_item">60.000đ</div>
        </div>
        <Button type="primary">BUY NOW</Button>
      </InfoItem>
    </ItemBuyGame>
  );
};

export default ItemNft;
