import styled from "styled-components";

export const TrendingSlide = styled.div`
  margin-top: 100px;
  position: relative;
  width: 100%;
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
export const ShowViewMore = styled.div`
  display: flex;
  padding: 0 140px;
  justify-content: space-between;
  div {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
  }
`;
export const ListItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
  width: 100%;
  .mySwiper {
    width: 82%;
  }
`;

export const ItemShow = styled.div`
  cursor: pointer;
  position: relative;
  width: 255px;
  height: 390px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  img:hover {
    scale: 1.1;
    transition: 2s;
  }
  .detail_item {
    bottom: 0;
    position: absolute;
    height: 88px;
    width: 100%;
    padding: 5px 25px;
    backdrop-filter: blur(10px);
    background: rgba(59, 114, 254, 0.1);
    .rate_i {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
      .star {
        .star_light {
          margin-right: 4px;
          color: white;
          font-size: 10px;
        }
      }
      .download {
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        color: #ffffff;
        ._icon {
          font-size: 12px;
        }
      }
    }
    .text_i {
      ._tit {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        color: #ffffff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      ._tex {
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        color: #ffffff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
