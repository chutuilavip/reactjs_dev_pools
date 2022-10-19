import styled from "styled-components";

const WrapSliderGameLike = styled.div`
  margin-top: 60px;
  .title_more_game {
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    letter-spacing: 0.0025em;
    color: #ffffff;
    padding-bottom: 30px;
  }
  .swiper {
    padding-bottom: 40px;
    .swiper-button-next:after {
      content: ">";
      color: #ffffff;
      font-size: 25px;
      font-weight: bold;
    }
    .swiper-button-prev::after {
      font-weight: bold;
      content: "<";
      color: #ffffff;
      font-size: 25px;
    }
    .swiper-button-next {
      right: 43%;
    }
    .swiper-button-prev {
      left: 43%;
    }
    .swiper-button-next,
    .swiper-button-prev {
      top: unset;
      bottom: 0;
      z-index: 999;
    }
    .swiper-pagination-bullet {
      background: #ede5e5ed;
    }
    .swiper-pagination-bullet-active {
      background: #ffffff;
      width: 20px;
      border-radius: 10px;
    }
  }
`;
export { WrapSliderGameLike };
