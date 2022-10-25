import { Button, Carousel, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import PackageButton from "../../components/TermsAndServices/Button/PackageButton";
import { PackageButtonWrapper } from "../../components/TermsAndServices/Button/styled";
import PackageCard from "../../components/TermsAndServices/PackageCard/PackageCard";
import PackageTabs from "../../components/TermsAndServices/PackageTabs/PackageTabs";
import { getServiceType } from "../../redux/slice/game.slice";
import { WrapTermsAndServices } from "./styled";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {
  setHandleNextTab,
  setHandlePrevTab,
  setSelectedTabStore,
} from "../../redux/slice/detailApp.slice";
export const tabContent = [
  {
    index: 1,
    content: "1 Feature Image Home Package",
  },
  {
    index: 2,
    content: "2 Hot game! home package",
  },
  {
    index: 3,
    content: "3 Banner NFT Game package",
  },
  {
    index: 4,
    content: "4 Top game NFT package",
  },
];

const TermsAndServices = () => {
  const [selectedCard, setSelectedCard] = useState();

  const [selectedTab, setSelectedTab] = useState(1);

  const { listService } = useSelector((state) => state.listGame);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (selectedTab) {
      case 1:
        dispatch(getServiceType("banner_home"));
        break;
      case 2:
        dispatch(getServiceType("hot_game"));
        break;
      case 3:
        dispatch(getServiceType("banner"));
        break;
      default:
        dispatch(getServiceType("top_game"));
        break;
    }
  }, [selectedTab]);
  useEffect(() => {
    dispatch(setHandlePrevTab(handlePrevTab));
    dispatch(setHandleNextTab(handleNextTab));
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
  return (
    <WrapTermsAndServices>
      <h1 className="header_title">
        {tabContent[selectedTab - 1].content.slice(1)}
      </h1>
      {/* call api base on selected tab */}

      <div className="package_cards">
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          pagination={pagination}
          modules={[Pagination]}
        >
          {listService?.res?.data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <PackageCard
                  setSelectedCard={setSelectedCard}
                  selectedCard={selectedCard}
                  key={index}
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
      <div className="footer_btn">
        <PackageTabs
          tabContent={tabContent}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          activeContent={tabContent[selectedTab - 1].content}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <PackageButton className="btn_next" onClick={handleNextTab}>
            Next
          </PackageButton>
        </div>
      </div>
    </WrapTermsAndServices>
  );
};
export default TermsAndServices;
