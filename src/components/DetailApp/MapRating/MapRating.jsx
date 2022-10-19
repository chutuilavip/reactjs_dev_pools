import React from "react";
import CirclePersent from "./CirclePersent";
import ProgressBar from "./ProgressBar";
import { RenderStar, WrapCircle, WrapRating } from "./styled";

const dataPersent = [
  { title: "Gameplay", per: 75 },
  { title: "Graphic", per: 85 },
  { title: "Story", per: 50 },
];

const dataProgress = [
  { star: 5, percent: 75 },
  { star: 4, percent: 85 },
  { star: 3, percent: 50 },
  { star: 2, percent: 85 },
  { star: 1, percent: 50 },
];

const MapRating = ({ infoApp }) => {
  const { one, two, three, four, five } = infoApp.app;
  const totalReview = one + two + three + four + five;

  const dataProgress = [
    { star: 5, percent: (five / totalReview) * 100 },
    { star: 4, percent: (four / totalReview) * 100 },
    { star: 3, percent: (three / totalReview) * 100 },
    { star: 2, percent: (two / totalReview) * 100 },
    { star: 1, percent: (one / totalReview) * 100 },
  ];

  return (
    <WrapRating>
      <p className="title_rate">Ratings</p>
      <div className="contents">
        <WrapCircle>
          {dataPersent.map((item, index) => {
            return <CirclePersent data={item} key={index} />;
          })}
        </WrapCircle>

        <div className="line"></div>

        <RenderStar>
          {dataProgress.map((item, index) => {
            return <ProgressBar data={item} key={index} />;
          })}
        </RenderStar>
      </div>
    </WrapRating>
  );
};

export default MapRating;
