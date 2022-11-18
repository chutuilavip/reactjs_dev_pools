import React from 'react';
import { Hero, ContainerStore } from './styled';
import BannerStoreImg from '../../../assets/Store/BannerStore.png';
import game1 from '../../../assets/Store/game1.png';
import game2 from '../../../assets/Store/game2.png';
import game3 from '../../../assets/Store/game3.png';
import game4 from '../../../assets/Store/game4.png';
import game5 from '../../../assets/Store/game5.png';
import GameRecommend from '../../../components/Store/BannerStore/GameRecommend/GameRecommend';

const dataGameRecommend = [
  {
    imgGame: game1,
    nameGame: 'Fortnite',
  },

  {
    imgGame: game2,
    nameGame: 'Playerunknow’s Battlegrounds',
  },

  {
    imgGame: game3,
    nameGame: 'Wild Rift',
  },

  {
    imgGame: game4,
    nameGame: 'Fifa Online',
  },

  {
    imgGame: game5,
    nameGame: 'Genshin Impact',
  },
];

const BannerStore = () => {
  return (
    <ContainerStore>
      <Hero>
        <div className="title_header">Store</div>
        <div className="banner">
          <div className="img_banner">
            <img src={BannerStoreImg} alt="banner" />
          </div>

          <div className="game_recommend">
            {dataGameRecommend?.map((item, index) => (
              <GameRecommend key={index} imgGame={item.imgGame} nameGame={item.nameGame} />
            ))}
          </div>
        </div>
      </Hero>
    </ContainerStore>
  );
};

export default BannerStore;
