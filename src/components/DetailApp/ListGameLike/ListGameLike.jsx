import React from 'react';
import moregame from '../../../assets/Detail/moregame.png';
import GameLikeItem from './GameLikeItem';
import { WrapSliderGameLike } from './styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const arrListMoreGame = [
  {
    img: moregame,
    title: 'VALORANT',
    star: 2,
    type: 'Competitive, Action',
  },
  {
    img: moregame,
    title: 'VALORANT',
    star: 5,
    type: 'Competitive, Action',
  },
  {
    img: moregame,
    title: 'VALORANT',
    star: 5,
    type: 'Competitive, Action',
  },
  {
    img: moregame,
    title: 'VALORANT',
    star: 4,
    type: 'Competitive, Action',
  },
  {
    img: moregame,
    title: 'VALORANT',
    star: 1,
    type: 'Competitive, Action',
  },
];

const ListGameLike = ({ data }) => {
  return (
    <WrapSliderGameLike>
      <p className="title_more_game">More game like this</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay
        pagination={{ clickable: true }}
        navigation
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <GameLikeItem data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </WrapSliderGameLike>
  );
};

export default ListGameLike;
