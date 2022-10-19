import styled from "styled-components";

export const BannerNftGame = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;
export const ImageBanner = styled.img`
  width: 100%;
`;
export const InfoBanner = styled.div`
  position: absolute;
  color: white;
  bottom: 170px;
  margin: 0 120px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 48.99%);
  .title_banner,
  .type_info_banner,
  .star_info_banner {
    width: 100%;
    padding-left: 120px;
  }

  .title_banner {
    margin-top: 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 67px;
    line-height: 96px;
    color: #ffffff;
  }
  .type_info_banner {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    color: #ffffff;
  }
  .star_info_banner {
    svg {
      font-size: 30px;
      margin-top: 22px;
    }
  }
`;

export const ButtonCustom = styled.button`
  cursor: pointer;
  background: linear-gradient(90deg, #3b72fe 0%, rgba(0, 0, 0, 0) 59%);
  backdrop-filter: blur(8px);
  height: 94px;
  width: 500px;
  margin-top: 55px;
  p {
    display: flex;
    margin-left: 120px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 46px;
    color: #ffffff;
  }
`;

export const BuyNftSlide = styled.div`
  position: relative;
  /* width: 100%; */
  /* height: 700px; */
`;

export const TitleSlide = styled.div`
  font-style: normal;
  position: absolute;
  font-weight: 700;
  font-size: 40px;
  top: 50%;
  z-index: 999;
  transform: translateY(-50%);
  color: #ffffff;
  transform: rotate(90deg);
`;

export const ListItem = styled.div`
  display: flex;
  position: relative;
  color: white;
  gap: 50px;
  padding: 170px 0;
  height: 100%;
  align-items: center;
  justify-content: center;
  .ironman {
    position: absolute;
    left: 120px;
    width: 360px;
    z-index: 99;
  }
`;

export const ItemBuyGame = styled.div`
  display: flex;
`;

export const ImgItem = styled.img`
  width: 414px;
  height: 380px;
  overflow: hidden;
`;

export const InfoItem = styled.div`
  width: 290px;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  Button {
    width: 100%;
    border-radius: unset;
  }
  .info_item {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 34px;
    .text_info {
      .title_info {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 45px;
        color: #ffffff;
      }
      .title_info_small {
        margin-top: 12px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        font-feature-settings: "kern" off;
        color: #ffffff;
      }
    }
    .price_item {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      color: #ffffff;
    }
  }
`;
