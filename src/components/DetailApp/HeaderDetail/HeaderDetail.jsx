import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import avtGame from "../../../assets/Detail/avtGame.png";
import rateStar from "../../../assets/Detail/rateStar.png";
import disk from "../../../assets/Detail/disk.png";
import rateDow from "../../../assets/Detail/rateDow.png";
import user from "../../../assets/Detail/user.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  HeaderBottom,
  HeaderTop,
  InfoGame,
  RateGame,
  WrapHeader,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../../constants/constants";
import { useSelector } from "react-redux";
const HeaderDetail = ({ infoApp }) => {
  const { title, cover, developer, score, age_limit, installs } = infoApp.app;

  const navigate = useNavigate();

  return (
    <>
      <WrapHeader>
        <HeaderTop>
          <FaChevronLeft
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(-1);
            }}
          />
          <div className="line"></div>
          <div className="avt_game">
            <LazyLoadImage src={`${URL_API}/${cover}`} alt="avt" />
          </div>
          <InfoGame>
            <p className="title">{title}</p>
            <p className="type">{developer}</p>
            <p className="available">Available in app</p>
          </InfoGame>
        </HeaderTop>

        <HeaderBottom>
          <RateGame>
            <div className="img_rate">
              <img src={rateStar} alt="icon" />
            </div>
            <div className="view_game">
              <div className="rate">
                <span>{score}</span>
                <AiFillStar />
              </div>
              <p>{infoApp.cmt.length} reviews</p>
            </div>
          </RateGame>

          <div className="line"></div>

          <RateGame>
            <div className="img_rate">
              <img src={rateDow} alt="icon" />
            </div>
            <div className="view_game">
              <div className="rate">
                <span>{installs}</span>
              </div>
              <p>Installed</p>
            </div>
          </RateGame>

          <div className="line"></div>

          <RateGame>
            <div className="img_rate">
              <img src={user} alt="icon" />
            </div>
            <div className="view_game">
              <div className="rate">
                <span>{age_limit}+</span>
              </div>
              <p>Year old</p>
            </div>
          </RateGame>

          <div className="line"></div>

          <RateGame>
            <div className="img_rate">
              <img src={disk} alt="icon" />
            </div>
            <div className="view_game">
              <div className="rate">
                <span>1.2</span>
              </div>
              <p>Size GB</p>
            </div>
          </RateGame>
        </HeaderBottom>
      </WrapHeader>
    </>
  );
};

export default HeaderDetail;
