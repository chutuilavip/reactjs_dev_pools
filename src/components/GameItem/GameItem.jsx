import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useNavigate } from "react-router-dom";
import { URL_API } from "../../constants/constants";

import { RiDownload2Fill } from "react-icons/ri";
import { InfoGame, RateDown, WrapGameItem } from "./styled";
import Rating from "../Rating/Rating";

const GameItem = ({ dataGame }) => {
  let navigate = useNavigate();

  const { title, cover, developer, slug, score, installs } = dataGame;

  const handleChooseGame = (slug) => {
    navigate(`/detail/${slug}`);
  };

  return (
    <WrapGameItem
      onClick={() => {
        handleChooseGame(slug);
      }}
    >
      <LazyLoadImage
        src={`${URL_API}/${cover}`}
        alt={slug}
        width="100%"
        height="100%"
      />
      <InfoGame>
        <p className="title">{title}</p>
        <p className="dev_name">{developer}</p>
        <RateDown>
          <div className="list_star">
            <Rating rating={score} font={12} color="yellow" />
          </div>

          <div className="count_download">
            <span>{installs}</span>
            <RiDownload2Fill />
          </div>
        </RateDown>
      </InfoGame>
    </WrapGameItem>
  );
};

export default GameItem;
