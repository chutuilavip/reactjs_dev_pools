import React from "react";
import { HeroRecommend } from "./styled";

const GameRecommend = (props) => {
  const { imgGame, nameGame } = props;
  return (
    <HeroRecommend>
      <img className="img_game" src={imgGame} />
      <span className="name_game">{nameGame}</span>
    </HeroRecommend>
  );
};

export default GameRecommend;
