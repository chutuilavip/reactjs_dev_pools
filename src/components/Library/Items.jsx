import React from "react";
import { ShowItem } from "./styled";
import ImgItem from "../../assets/Store/img5.png";
const Items = ({ data }) => {
  return (
    <ShowItem>
      <img src={ImgItem} alt="image" />
      <div className="footer">
        <div className="title_foo">
          <div className="_name">Horizon</div>
          <div className="__ri">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="4"
              viewBox="0 0 18 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="white" />
              <circle cx="9" cy="2" r="2" fill="white" />
              <circle cx="16" cy="2" r="2" fill="white" />
            </svg>
          </div>
        </div>

        <div className="text_fo">5/34 Achievement</div>
        <div className="_lauch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M6 4L1.50571e-07 7.4641L4.53412e-07 0.535898L6 4Z"
              fill="#D9D9D9"
            />
          </svg>
          <p>Launch</p>
        </div>
      </div>
    </ShowItem>
  );
};

export default Items;
