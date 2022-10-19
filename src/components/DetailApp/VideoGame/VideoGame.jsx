import React, { useState } from "react";
import { VideoSlide, WrapVideo } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { URL_API } from "../../../constants/constants";

const VideoGame = ({ infoApp }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { app } = infoApp;

  // Decode arr image
  let decoded = decodeURI(encodeURI(app.screenshots));
  var arrScreenshots = JSON.parse("[" + decoded + "]");

  return (
    <WrapVideo>
      <VideoSlide>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {arrScreenshots[0].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  style={{ width: "100%" }}
                  src={`${URL_API}/${item}`}
                  alt={`slide_one ${index}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={30}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {arrScreenshots[0].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  style={{ width: "314px", height: "176px" }}
                  src={`${URL_API}/${item}`}
                  alt={`slide_one ${index}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </VideoSlide>
    </WrapVideo>
  );
};

export default VideoGame;
