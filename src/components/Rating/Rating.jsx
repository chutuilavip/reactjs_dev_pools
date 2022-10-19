import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating, font, color }) => {
  const starArray = [...Array(5).keys()].map((i) => i + 1);

  return (
    <div>
      {starArray.map((item, index) => {
        return (
          <FaStar
            key={index}
            style={{
              color: rating > index ? color : "white",
              fontSize: `${font}px`,
              marginRight: "3px",
            }}
          />
        );
      })}
    </div>
  );
};

export default Rating;
