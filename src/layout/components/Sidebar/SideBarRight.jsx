import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ListIconPage, SideRight } from "./styled";
import arrowdown from "../../../assets/AroundRight/meta/arrow_down.png";

import {
  icon_right_meta,
  icon_right_nft,
  icon_right_pool,
  icon_right_play,
} from "../../IconLayout";
import { publisherOptions } from "./SideBarUtils";

const SideBarRight = ({ data }) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [listIcon, setListIcon] = useState();
  const [selectedTab, serSelectedTab] = useState(1);

  const location = useLocation();
  const currentUrl = location.pathname;

  const SetListIconLayout = (url) => {
    switch (url) {
      case "/nft-game":
        setListIcon(icon_right_nft);
        break;
      case "/metaverse":
        setListIcon(icon_right_meta);
        break;
      case "/play-to-earn":
        setListIcon(icon_right_play);
        break;
      case "/service":
        setListIcon(icon_right_pool);
        break;
      default:
        setListIcon([]);
        break;
    }
  };

  const checkUrl =
    currentUrl === "/nft-game" ||
    currentUrl === "/metaverse" ||
    currentUrl === "/play-to-earn" ||
    currentUrl === "/service";

  useEffect(() => {
    SetListIconLayout(currentUrl);
    setIsOpenCategory(false);
  }, [currentUrl]);

  return (
    <SideRight status={data} anima={isOpenCategory}>
      {publisherOptions.map((item, index) => {
        if (item.url === "") {
          return (
            <NavLink
              className={`wrap_sidebar`}
              key={index}
              to={`/terms-and-services/${item.url}`}
            >
              <div className="left_bar">
                <span>{item.content}</span>
              </div>
            </NavLink>
          );
        } else {
          return (
            <NavLink
              className={`wrap_sidebar`}
              key={index}
              to={`/for-publishers/${item.url}`}
            >
              <div className="left_bar">
                <span>{item.content}</span>
              </div>
            </NavLink>
          );
        }
      })}

      <ListIconPage status={isOpenCategory}>
        {listIcon?.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="icon_of_page">
              <img src={item.icon} alt={item.alt} />
              <p className="title_icon">{item.name}</p>
            </Link>
          );
        })}
      </ListIconPage>
    </SideRight>
  );
};

export default SideBarRight;
