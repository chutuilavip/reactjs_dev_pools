import React from "react";
import Comment from "../Comment/Comment";
import { WrapReview } from "./styled";

const Review = ({ infoApp }) => {
  const { cmt, user } = infoApp;

  return (
    <WrapReview>
      <p className="title">Review</p>
      <div className="block_review">
        {cmt.map((item, index) => {
          return <Comment avt={user?.avatar} data={item} key={index} />;
        })}
      </div>
    </WrapReview>
  );
};

export default Review;
