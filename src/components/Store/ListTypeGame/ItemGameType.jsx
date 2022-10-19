import React from "react";
import styled from "styled-components";
import gameType from "../../../assets/gameType.png";

const ItemGameType = () => {
  return (
    <StyleGameType>
      <img src={gameType} alt="avt" />
      <div className="infor">
        <p className="title">Genshin Impact</p>
        <p className="price">$124</p>
      </div>
    </StyleGameType>
  );
};

export default ItemGameType;

const StyleGameType = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .infor {
    display: flex;
    flex-direction: column;
    .title {
      font-weight: 700;
      font-size: 32px;
      line-height: 130%;
      letter-spacing: 0.0025em;
      color: #ffffff;
    }
    .price {
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.0025em;
      color: #3b72fe;
    }
  }
`;
