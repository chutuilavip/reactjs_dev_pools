import React from 'react';
import { Select } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Hero, Container, SlideCategrogy, SlideImg } from './styled';

import img1 from '../../../assets/Store/img1.png';
import img2 from '../../../assets/Store/img2.png';
import img3 from '../../../assets/Store/img3.png';
import img4 from '../../../assets/Store/img4.png';
import img5 from '../../../assets/Store/img5.png';
import imgdow from '../../../assets/Store/imgdow.png';
import imgstart from '../../../assets/Store/imgstart.png';

import GameItem from './ListGame/GameItem';

const DataListGame = [
  {
    imgGame: img1,
    nameGame: 'Pirate Kings',
    priceGame: '$124',
    description: 'Hi-Rez Studios / First Watch',
    imgStar: imgstart,
    down: 5.531,
    imgDown: imgdow,
  },
  {
    imgGame: img2,
    nameGame: 'Pirate Kings',
    priceGame: '$124',
    description: 'Hi-Rez Studios / First Watch',
    imgStar: imgstart,
    down: 5.531,
    imgDown: imgdow,
  },
  {
    imgGame: img3,
    nameGame: 'Pirate Kings',
    priceGame: '$124',
    description: 'Hi-Rez Studios / First Watch',
    imgStar: imgstart,
    down: 5.531,
    imgDown: imgdow,
  },
  {
    imgGame: img4,
    nameGame: 'Pirate Kings',
    priceGame: '$124',
    description: 'Hi-Rez Studios / First Watch',
    imgStar: imgstart,
    down: 5.531,
    imgDown: imgdow,
  },
  {
    imgGame: img5,
    nameGame: 'Pirate Kings',
    priceGame: '$124',
    description: 'Hi-Rez Studios / First Watch',
    imgStar: imgstart,
    down: 5.531,
    imgDown: imgdow,
  },
  {
    imgGame: img5,
    nameGame: 'Pirate Kings',
    priceGame: '$124',
    description: 'Hi-Rez Studios / First Watch',
    imgStar: imgstart,
    down: 5.531,
    imgDown: imgdow,
  },
  {
    imgGame: img5,
    nameGame: 'Pirate Kings',
    priceGame: '$124',
    description: 'Hi-Rez Studios / First Watch',
    imgStar: imgstart,
    down: 5.531,
    imgDown: imgdow,
  },
  {
    imgGame: img5,
    nameGame: 'Pirate Kings',
    priceGame: '$124',
    description: 'Hi-Rez Studios / First Watch',
    imgStar: imgstart,
    down: 5.531,
    imgDown: imgdow,
  },
];

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Categrogy = () => {
  return (
    <Hero>
      <Container>
        <SlideCategrogy>
          <div className="title">Category</div>
          <Select className="item_select" defaultValue="Top Paid" onChange={handleChange}>
            <Option className="colo_background" value="Top Paid">
              Top Paid
            </Option>
            <Option value="lucy">Khanh Duy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          <Select className="item_select" defaultValue="News" onChange={handleChange}>
            <Option value="News">News</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          <Select className="item_select" defaultValue="Style Game" onChange={handleChange}>
            <Option value="Style Game">Style Game</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          <Select className="item_select" defaultValue="Alphabetical A-Z" onChange={handleChange}>
            <Option value="Alphabetical A-Z">Alphabetical A-Z</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          <Select className="item_select" defaultValue="Price" onChange={handleChange}>
            <Option value="Price">Price</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </SlideCategrogy>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={6}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SlideImg>
            {DataListGame?.map((item, index) => (
              <SwiperSlide>
                <GameItem key={index} data={item} />
              </SwiperSlide>
            ))}
          </SlideImg>
        </Swiper>
      </Container>
    </Hero>
  );
};

export default Categrogy;
