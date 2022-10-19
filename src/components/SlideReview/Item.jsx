import React from "react";
import { ItemShow } from "./styled";
import { useNavigate } from "react-router-dom";
import { CgSoftwareDownload } from "react-icons/cg";
import Rating from "../Rating/Rating";
import { URL_API } from "../../constants/constants";

const Item = ({ data }) => {
  const { cover, developer, id, slug, title, score, installs } = data;
  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`/detail/${slug}`);
  };

  return (
    <ItemShow onClick={handleShowDetail}>
      <img src={`${URL_API}/${cover}`} alt="image" />
      <div className="detail_item">
        <div className="text_i">
          <div className="_tit">{title}</div>
          <div className="_tex">{developer}</div>
        </div>
        <div className="rate_i">
          <div className="star">
            <Rating color="yellow" rating={score} font={12} />
          </div>
          <div className="download">
            {installs} <CgSoftwareDownload className="_icon" />
          </div>
        </div>
      </div>
    </ItemShow>
  );
};

export default Item;
