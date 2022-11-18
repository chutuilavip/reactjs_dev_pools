import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { WrapAchiev, WrapAchievTop, WrapSocial } from './styled';
import { Link } from 'react-router-dom';
import face from '../../../assets/IconSocial/face.png';
import insta from '../../../assets/IconSocial/insta.png';
import sky from '../../../assets/IconSocial/sky.png';
import tittok from '../../../assets/IconSocial/tittok.png';
import twitter from '../../../assets/IconSocial/twitter.png';

import chiev_one from '../../../assets/Chievs/chiev_one.png';
import chiev_two from '../../../assets/Chievs/chiev_two.png';
import chiev_three from '../../../assets/Chievs/chiev_three.png';
import chiev_four from '../../../assets/Chievs/chiev_four.png';
import chiev_five from '../../../assets/Chievs/chiev_five.png';
import ChievItem from '../ChievItem/ChievItem';

const listSocial = [
  { img: face, name: 'FaceBook' },
  { img: insta, name: 'Instagram' },
  { img: sky, name: 'Skype' },
  { img: tittok, name: 'Tiktok' },
  { img: twitter, name: 'Twitter' },
];

const listChiev = [
  { img: chiev_one, name: 'Bargain Bucket', xp: '15' },
  { img: chiev_two, name: 'Low Baller', xp: '15' },
  { img: chiev_three, name: 'Big Tease', xp: '15' },
  { img: chiev_four, name: 'Big Air', xp: '15' },
  { img: chiev_five, name: 'Big Air', xp: '15' },
];

const Achievement = () => {
  return (
    <WrapAchiev>
      <WrapAchievTop>
        <p className="title">Available Achievements</p>
        <div className="list_achiev">
          {listChiev?.map((item, idx) => {
            return <ChievItem chiev={item} key={idx} />;
          })}
        </div>
        {/* <div className='see_all'>
                <AiOutlineDown/>
                <p>See All 34 Achievements</p>
            </div> */}
      </WrapAchievTop>

      <WrapSocial>
        <p>Follow Us</p>
        <div className="list_social">
          {listSocial?.map((item, idx) => {
            return (
              <Link to="/" key={idx}>
                <img src={item.img} alt={item.name} />
              </Link>
            );
          })}
        </div>
      </WrapSocial>
    </WrapAchiev>
  );
};

export default Achievement;
