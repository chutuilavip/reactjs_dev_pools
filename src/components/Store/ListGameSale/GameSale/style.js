import styled from "styled-components";

export const HeroListGameSale = styled.div`
  width: 255px;
  .img_game_sale_list {
    overflow: hidden;
    max-width: 100%;
    width: 100%;
    .img_game_sale_list_item {
      max-width: 100%;
    }
  }
  .img_game_sale_list_item:hover {
    scale: 1.1;
    transition: 2s;
  }
  .name_game {
    font-weight: 700;
    font-size: 16px;
    color: white;
    line-height: 20.8px;
    margin-top: 5px;
  }
  .description_gamesale {
    font-weight: 400;
    font-weight: 400;
    font-size: 10px;
    line-height: 14.3px;
    color: #ffffff;
  }
`;

export const ListPrice = styled.div`
  display: flex;
  max-width: 100%;
  width: 90%;
  color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-top: 0.2%;
  align-items: center;
  .price_sale {
    width: 32%;
    height: 35px;
    text-align: center;
    align-items: center;
    background-color: #e50000;
    display: flex;
    justify-content: center;
  }

  .price_old_price {
    font-weight: 700;
    font-size: 20px;
    line-height: 31.2px;
    text-decoration-line: line-through;
    color: #757575;
  }

  .price_new_price {
    font-weight: 700;
    font-size: 20px;
    line-height: 31.2px;
    color: #3b72fe;
  }
`;
