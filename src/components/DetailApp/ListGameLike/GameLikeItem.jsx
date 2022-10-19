import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCaretRight } from "react-icons/ai";
import Rating from "../../Rating/Rating";
import { getDetailApp } from "../../../redux/slice/detailApp.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../../constants/constants";

const GameLikeItem = ({ data }) => {
  const { cover, title, developer, score, slug } = data;
  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/detail/${slug}`);
  };

  return (
    <WrapItem>
      <img
        style={{ width: "793px", height: "434px" }}
        src={`${URL_API}/${cover}`}
        alt={title}
      />
      <div className="info">
        <Rating rating={score} font={20} color="#E6C522" />
        <p className="title_game">{title}</p>
        <p className="type">{developer}</p>
        <div
          className="btn_playnow"
          onClick={() => {
            handleShowDetail();
          }}
        >
          Play Now <AiOutlineCaretRight />
        </div>
      </div>
    </WrapItem>
  );
};

export default GameLikeItem;

const WrapItem = styled.div`
  position: relative;
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 5%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .title_game {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: 0.0025em;
      color: #000000;
    }
    .type {
      font-weight: 700;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.0025em;
      background: linear-gradient(180deg, #181818 0%, #2b2a2a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .btn_playnow {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      display: flex;
      align-items: center;
      letter-spacing: 0.0015em;
      cursor: pointer;

      color: #ffffff;
      padding: 10px 32px;
      background: linear-gradient(
        90deg,
        #3b72fe 0.77%,
        rgba(57, 83, 218, 0.01) 55.86%
      );
    }
  }
`;
