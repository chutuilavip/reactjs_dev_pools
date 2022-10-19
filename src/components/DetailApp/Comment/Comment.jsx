import React from "react";
import user from "../../../assets/user.png";
import like from "../../../assets/like.png";
import { GoClock } from "react-icons/go";
import { CommentTop, RenderStar, WrapComment } from "./styled";
import { AiFillStar } from "react-icons/ai";
import Rating from "../../Rating/Rating";
import { URL_API } from "../../../constants/constants";
import { useDispatch } from "react-redux";
import { likeReview, disLikeReview } from "../../../redux/slice/user.slice";
import { useParams } from "react-router-dom";

const Comment = ({ data, avt }) => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const {
    id,
    comment,
    dislike,
    created_at,
    approval,
    name,
    rating,
    updated_at,
  } = data;
  const handleLikeReview = () => {
    dispatch(likeReview({ id, slug }));
  };

  const handleDisLikeReview = () => {
    dispatch(disLikeReview({ id, slug }));
  };

  return (
    <WrapComment>
      <CommentTop>
        <div className="user">
          <img
            style={{ width: "48px", height: "48px", borderRadius: "50%" }}
            src={`${URL_API}/${avt}`}
            alt="user"
          />
          <div className="info">
            <p>{name}</p>
            <div className="time">
              <GoClock />
              <span>{updated_at.slice(0, 10)}</span>
            </div>
          </div>
        </div>
        <button
          className="like"
          style={{ cursor: "pointer" }}
          onClick={handleLikeReview}
        >
          <img src={like} alt="like" />
          <span>{approval}</span>
        </button>

        <div
          className="like"
          style={{ cursor: "pointer" }}
          onClick={handleDisLikeReview}
        >
          <img style={{ transform: "rotate(180deg)" }} src={like} alt="like" />
          <span>{dislike}</span>
        </div>
      </CommentTop>
      <RenderStar>
        <div className="list_star">
          <Rating color="yellow" rating={rating} font={20} />
        </div>
        <div>[{rating}/5 star]</div>
      </RenderStar>
      <div className="line"></div>
      <div className="text_comment">
        <p>{comment}</p>
      </div>
    </WrapComment>
  );
};

export default Comment;
