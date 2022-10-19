import styled from "styled-components";

export const HeroGame = styled.div`
  max-width: 100%;
  width: 100%;
  color: #ffffff;

  .block_img {
    overflow: hidden;
    .img_game {
      width: 255px;
      &:hover {
        scale: 1.1;
        transition: 2s;
      }
    }
  }
  .name_price {
    display: flex;
    max-width: 100%;
    flex-direction: row;
    width: 95%;
    justify-content: space-between;
    align-items: center;

    .title {
      color: #ffffff;
      font-weight: 700;
      font-size: 16px;
      line-height: 20.8px;
    }

    .price_item {
      color: #3b72fe;
      font-weight: 700;
      font-size: 24px;
      line-height: 31.2px;
    }
  }

  .description {
    font-weight: 400;
    font-size: 10px;
    line-height: 14.3px;
  }

  .start_down {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    width: 95%;
    align-items: center;
  }
`;
