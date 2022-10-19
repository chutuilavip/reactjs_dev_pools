import { notify } from "../../../helpers/motion";
import React, { useRef, useState } from "react";
import { RatingUser, WrapReview } from "./styled";
import { Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { reviewApp } from "../../../redux/slice/user.slice";

const WriteReview = () => {
  const addressWallet = useSelector((state) => state.web3.account);
  const { slug } = useParams();
  const [review, setReview] = useState({
    comment: "",
    rating: "",
    creator_address: addressWallet,
    slug,
  });
  const errors = useSelector((state) => state.user.statusReview);
  const ref = useRef();

  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("tokens"));

  const handleReview = () => {
    if (token) {
      if (review.comment.length > 0 && review.rating) {
        dispatch(reviewApp(review));
      } else {
        notify(ref, "Please enter comment and rate!");
      }
    } else {
      notify(ref, "Please log in !");
    }
  };
  return (
    <>
      <WrapReview>
        <div className="write_comment">
          <p className="title">Write your review</p>
          <textarea
            maxLength={255}
            onChange={(e) => {
              setReview({
                ...review,
                comment: e.target.value,
              });
            }}
            cols="30"
            rows="10"
            placeholder="Type any complaint here..."
          ></textarea>
          <p style={{ color: "#ffffff" }}>{review.comment.length}/255</p>
        </div>
        <RatingUser>
          <p>Rating for us</p>
          <div className="list_star">
            <Rate
              onChange={(star) => {
                setReview({
                  ...review,
                  rating: star,
                });
              }}
            />
          </div>
          <div
            onClick={() => {
              handleReview();
            }}
            className="btn_rate_now"
          >
            Rate Now
          </div>
        </RatingUser>
      </WrapReview>
    </>
  );
};

export default WriteReview;
