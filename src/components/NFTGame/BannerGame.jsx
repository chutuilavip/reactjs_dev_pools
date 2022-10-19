import React from "react";
import { BannerNftGame, ImageBanner, InfoBanner, ButtonCustom } from "./styled";
import Banner from "../../assets/nftgame/banner.png";
import { AiOutlineStar } from "react-icons/ai";

const BannerGame = () => {
  return (
    <BannerNftGame>
      <ImageBanner src={Banner} alt="banner game" />
      <InfoBanner>
        <div className="title_banner">FORTNITE</div>
        <div className="type_info_banner">Hi-Rez Studios / First Watch</div>
        <div className="star_info_banner">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <ButtonCustom>
          <p>Play Now</p>
        </ButtonCustom>
      </InfoBanner>
    </BannerNftGame>
  );
};

export default BannerGame;
