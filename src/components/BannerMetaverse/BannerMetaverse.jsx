import React from "react";
import { TextContent, WrapBanner } from "./styled";
import imgMeta from "../../assets/bannerMetaverse.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerMetaverse = () => {
  return (
    <WrapBanner>
      <TextContent>
        <p>
          illuvium is an open world fantasy fighting game built on the basis of
          the Ethereum blockchain. Known and seen as the first AAA game on
          Ethereum, illuvium aims to provide entertainment for both casual
          gamers and die-hard DeFi fans.
        </p>
      </TextContent>
      <div className="slider">
        <LazyLoadImage width="100%"  src={imgMeta} alt="banner" />

        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[...Array(4)].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <LazyLoadImage src={imgMeta} alt="banner" />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </div>
    </WrapBanner>
  );
};

export default BannerMetaverse;
