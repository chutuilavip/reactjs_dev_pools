import styled from "styled-components";

export const WrapRacing = styled.div`
  margin-top: 100px;
  position: relative;
  width: 100%;
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
  justify-content: space-between;
  padding: 0 140px;
  /* gap: 20px; */
  margin-top: 24px;
  width: 100%;
  .mySwiper {
    width: 82%;
  }
`;

export const ItemShow = styled.div`
  cursor: pointer;
  position: relative;
  width: 390px;
  overflow: hidden;
  .img_bg {
    width: 100%;
  }

  :hover .img_bg {
    scale: 1.1;
    transition: 2s;
  }

  .button_play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .detail_item {
    position: absolute;
    bottom: 0;
    margin-left: 22px;
    margin-bottom: 10px;
    .text_i {
      ._tit {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
      }
      ._tex {
        font-style: italic;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #ffffff;
      }
    }
  }
`;
