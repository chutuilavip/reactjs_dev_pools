import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import PackageCard from '../../components/TermsAndServices/PackageCard/PackageCard';
import Loading from '../../layout/components/Loading/Loading';
import { getServiceType } from '../../redux/slice/game.slice';
import { WrapTermsAndServices } from './styled';
export const tabContent = [
  {
    index: 1,
    content: '1 Feature Image Home Package',
  },
  {
    index: 2,
    content: '2 Hot game! home package',
  },
  {
    index: 3,
    content: '3 Banner NFT Game package',
  },
  {
    index: 4,
    content: '4 Top game NFT package',
  },
  {
    index: 5,
    content: '5 Video Package',
  },
];

const TermsAndServices = () => {
  const [selectedCard, setSelectedCard] = useState();

  const { listService, isLoading } = useSelector((state) => state.listGame);

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServiceType());
  }, []);
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(`${hash}`);
      console.log(element, hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> </span>';
    },
  };
  const ContentData = {
    banner_home: {
      id: 'banner_home',
      title: '1 Feature Image Home Package',
      button_title: 'Home Package',
    },
    hot_game: {
      id: 'hot_game',
      title: '2 Hot game! home package',
      button_title: 'Hot Game',
    },
    banner: {
      id: 'banner',
      title: '3 Banner NFT Game package',
      button_title: 'Banner',
    },
    top_game: {
      id: 'top_game',
      title: '4 Top game NFT package',
      button_title: 'Top Game',
    },
    video: {
      id: 'video',
      title: '5 Video Package',
      button_title: 'Video',
    },
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapTermsAndServices>
          {/* call api base on selected tab */}
          {/* New UI */}
          <div className="nav">
            <ul className="nav__button">
              {Object.keys(ContentData)?.map((item, index) => {
                return (
                  <li className={`nav__item `} key={`nav-item-${index}`}>
                    <Link
                      to={`/terms-and-services/#${item}`}
                      className={`${location.hash?.slice(1) === item ? 'active' : ''}`}
                    >
                      {ContentData[item].button_title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {Object.keys(ContentData)?.map((item, index) => {
            const data = listService?.res?.data[item];
            return (
              <div className="type_service_wrapper" id={item} key={`service-${index}`}>
                <h1> {ContentData[item].title}</h1>
                <Swiper
                  spaceBetween={40}
                  slidesPerView={3}
                  pagination={pagination}
                  modules={[Pagination]}
                >
                  {data?.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <PackageCard
                          setSelectedCard={setSelectedCard}
                          selectedCard={selectedCard}
                          cardContent={item}
                          id={item.id}
                          times={item.date}
                          prices={item.price}
                          views={item.views}
                          discount={item.discount}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            );
          })}
          {/*END New UI */}
        </WrapTermsAndServices>
      )}
    </Fragment>
  );
};
export default TermsAndServices;
