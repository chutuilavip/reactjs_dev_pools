import React from "react";
import { Carousel } from "antd";
import slideUpdate from "../../../assets/slideUpdate.png";
import { ItemSlide, WrapNewUpdate } from "./styled";

const NewUpdate = () => {
  return (
    <WrapNewUpdate>
      <p className="title">New Updates</p>
      <Carousel autoplay>
        <ItemSlide>
          <img src={slideUpdate} alt="slideUpdate" />
          <div className="content">
            We’ve got an incredible collection of BRAND NEW Rounds to share with
            you! Our levels team have been working hard to create some of our
            most exciting, fun and challenging levels to date. With new Rounds
            such as Hex-a-Ring, Speed Circuit, Volleyfall and more, you’re
            guaranteed to have a blast in the Blunderdome!
          </div>
        </ItemSlide>
        <ItemSlide>
          <img src={slideUpdate} alt="slideUpdate" />
          <div className="content">
            We’ve got an incredible collection of BRAND NEW Rounds to share with
            you! Our levels team have been working hard to create some of our
            most exciting, fun and challenging levels to date. With new Rounds
            such as Hex-a-Ring, Speed Circuit, Volleyfall and more, you’re
            guaranteed to have a blast in the Blunderdome!
          </div>
        </ItemSlide>
        <ItemSlide>
          <img src={slideUpdate} alt="slideUpdate" />
          <div className="content">
            We’ve got an incredible collection of BRAND NEW Rounds to share with
            you! Our levels team have been working hard to create some of our
            most exciting, fun and challenging levels to date. With new Rounds
            such as Hex-a-Ring, Speed Circuit, Volleyfall and more, you’re
            guaranteed to have a blast in the Blunderdome!
          </div>
        </ItemSlide>
      </Carousel>
    </WrapNewUpdate>
  );
};

export default NewUpdate;
