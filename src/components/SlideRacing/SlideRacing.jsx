import React from "react";
import Items from "./Items";
import { WrapRacing, ShowViewMore, ListItems } from "./styled";

const SlideRacing = ({ title }) => {
  return (
    <WrapRacing>
      <ShowViewMore>
        <div>{title}</div>
        <div>See More</div>
      </ShowViewMore>
      <ListItems>
        {[...Array(4)].map((item, index) => {
          return <Items key={index} />;
        })}
      </ListItems>
    </WrapRacing>
  );
};

export default SlideRacing;
