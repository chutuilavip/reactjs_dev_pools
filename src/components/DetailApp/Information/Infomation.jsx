import React from "react";
import { AiOutlineDown, AiFillStar } from "react-icons/ai";
import { StyleRating, WrapInfor } from "./styled";
import Rating from "../../Rating/Rating";
const Infomation = ({ infoApp }) => {
  const { app, cmt } = infoApp;
  return (
    <WrapInfor>
      <div className="des_ifo">
        <p className="title">Infomation</p>
        <p className="description">
          Fall Guys (formerly known as Fall Guys: Ultimate Knockout) is a
          platform battle royale game developed by Mediatonic. The game involves
          up to 60 players who control jellybean-like creatures and compete
          against each other in a series of randomly selected mini-games, such
          as obstacle courses or tag. Players are eliminated as the rounds
          crowned the winner.
        </p>
        {/* <div className="show_more">
          <AiOutlineDown />
          <span>Show More</span>
        </div> */}
      </div>

      <StyleRating>
        <p className="title">Player Rating</p>
        <div className="rate">
          <span>{(Math.round(app.score * 100) / 100).toFixed(2)}</span>
          <div style={{ display: "flex" }}>
            <Rating rating={app.score} color="yellow" font={25} />
          </div>
          <p className="count_view">[{cmt.length} Reviews]</p>
        </div>
      </StyleRating>
    </WrapInfor>
  );
};

export default Infomation;
