import React from 'react';
import styled from 'styled-components';
import imgSale1 from '../../../assets/Store/imgSale1.png';
import imgSale2 from '../../../assets/Store/imgSale2.png';
import imgSale3 from '../../../assets/Store/imgSale3.png';
import imgSale4 from '../../../assets/Store/imgSale4.png';
import imgSale5 from '../../../assets/Store/imgSale5.png';
import right from '../../../assets/Store/right.png';

import GameSale from './GameSale/GameSale';

const DataListGameSale = [
  {
    imgGameSale: imgSale1,
    nameGameSale: 'Hirilun',
    descriptionSale: 'Hi-Rez Studios / First Watch',
    priceSale: '-60%',
    oldPrice: '$124',
    newPrice: '$74.4',
  },

  {
    imgGameSale: imgSale2,
    nameGameSale: 'Hirilun',
    descriptionSale: 'Hi-Rez Studios / First Watch',
    priceSale: '-60%',
    oldPrice: '$124',
    newPrice: '$74.4',
  },

  {
    imgGameSale: imgSale3,
    nameGameSale: 'Hirilun',
    descriptionSale: 'Hi-Rez Studios / First Watch',
    priceSale: '-60%',
    oldPrice: '$124',
    newPrice: '$74.4',
  },

  {
    imgGameSale: imgSale4,
    nameGameSale: 'Hirilun',
    descriptionSale: 'Hi-Rez Studios / First Watch',
    priceSale: '-60%',
    oldPrice: '$124',
    newPrice: '$74.4',
  },

  {
    imgGameSale: imgSale5,
    nameGameSale: 'Hirilun',
    descriptionSale: 'Hi-Rez Studios / First Watch',
    priceSale: '-60%',
    oldPrice: '$124',
    newPrice: '$74.4',
  },

  {
    imgGameSale: imgSale5,
    nameGameSale: 'Hirilun',
    descriptionSale: 'Hi-Rez Studios / First Watch',
    priceSale: '-60%',
    oldPrice: '$124',
    newPrice: '$74.4',
  },
];
const ListGameSale = () => {
  return (
    <WrapGameSale>
      <div className="title_game_sale">
        <span>Game On Sale</span>
        <div className="title_game_sale_item">
          <span>See more</span>
          <img src={right} />
        </div>
      </div>

      <div className="slide_game_sale_map">
        {DataListGameSale?.map((item, index) => (
          <GameSale key={index} data={item} />
        ))}
      </div>
    </WrapGameSale>
  );
};

export default ListGameSale;

export const WrapGameSale = styled.div`
  max-width: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  .title_game_sale {
    max-width: 100%;
    width: 96%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    flex-direction: row;
    padding-bottom: 2%;
    span {
      color: #ffffff;
      font-weight: 700;
      font-size: 32px;
      text-align: center;
      line-height: 41.6px;
      align-items: center;
    }
    .title_game_sale_item {
      display: flex;
      gap: 10px;
      justify-content: space-between;
      align-items: center;
      span {
        color: #ffffff;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
      }
    }
  }

  .slide_game_sale_map {
    max-width: 100%;
    width: 98%;
    display: flex;
    gap: 20px;
    margin: 0 auto;
  }
`;
