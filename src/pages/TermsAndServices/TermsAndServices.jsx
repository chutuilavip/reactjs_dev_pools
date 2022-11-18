import { Button, Carousel, Empty, Radio } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import PackageButton from '../../components/TermsAndServices/Button/PackageButton';
import { PackageButtonWrapper } from '../../components/TermsAndServices/Button/styled';
import PackageCard from '../../components/TermsAndServices/PackageCard/PackageCard';
import PackageTabs from '../../components/TermsAndServices/PackageTabs/PackageTabs';
import { getServiceType, listAppNotService } from '../../redux/slice/game.slice';
import { WrapTermsAndServices } from './styled';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  setHandleNextTab,
  setHandlePrevTab,
  setSelectedTabStore,
} from '../../redux/slice/detailApp.slice';
import PackageVideo from './PackageVideo/PackageVideo';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { changeStringToAlias } from '../../utils';
import Loading from '../../layout/components/Loading/Loading';
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

  const [selectedTab, setSelectedTab] = useState();

  const { listService, isLoading } = useSelector((state) => state.listGame);

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHandlePrevTab(handlePrevTab));
    dispatch(setHandleNextTab(handleNextTab));
    dispatch(getServiceType());
  }, []);
  useEffect(() => {
    const item = tabContent.find((el) => changeStringToAlias(el.content.slice(2)) === params.tabs);
    if (!!item) {
      setSelectedTab(item.index);
    }
  }, []);
  useEffect(() => {
    dispatch(setSelectedTabStore(selectedTab));
  }, [selectedTab]);

  const handleNextTab = () => {
    setSelectedTab((selectedTab) => {
      if (selectedTab < tabContent.length - 1) {
        return selectedTab + 1;
      }
      return tabContent[tabContent.length - 1].index;
    });
  };

  const handlePrevTab = () => {
    setSelectedTab((selectedTab) => {
      if (selectedTab > 1) {
        return selectedTab - 1;
      }
      return 1;
    });
  };

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
  const handleSelectTab = (tabId) => {
    const element = document.querySelector(`#${tabId}`);
    setSelectedTab(tabId);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  console.log(selectedCard);
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
                  <li className={`nav__item `}>
                    <Button
                      className={`${selectedTab === item ? 'active' : ''}`}
                      onClick={() => {
                        handleSelectTab(item);
                      }}
                    >
                      {ContentData[item].button_title}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
          {Object.keys(ContentData)?.map((item, index) => {
            const data = listService?.res?.data[item];
            return (
              <div className="type_service_wrapper" id={item}>
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
                          selectedTab={selectedTab}
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
