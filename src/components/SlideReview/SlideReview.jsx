import React from "react";
import { TitleSlide, TrendingSlide, ShowViewMore, ListItems } from "./styled";
import Item from "./Item";
import "swiper/css";
import { CgArrowLongRight } from "react-icons/cg";
import { getDetailApp } from "../../redux/slice/detailApp.slice";

const SlideReview = ({ data, title }) => {
  return (
    <TrendingSlide>
      <ShowViewMore>
        <div>{title}</div>
        <div>See More</div>
      </ShowViewMore>
      <ListItems>
        {data?.map((item, index) => {
          return <Item key={index} data={item} />;
        })}
      </ListItems>
    </TrendingSlide>
  );
};

export default SlideReview;
