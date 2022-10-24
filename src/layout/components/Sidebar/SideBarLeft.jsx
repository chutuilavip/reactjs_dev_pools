import React from "react";
import { icon_left } from "../../IconLayout";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { ItemMenu, SideLeft } from "./styled";
import { publisherOptions } from "./SideBarUtils";
import { useSelector } from "react-redux";
import { tabContent } from "../../../pages/TermsAndServices/TermsAndServices";

const SideBarLeft = (customLayout) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { option } = params;
  const { handleNextTabStore, handlePrevTabStore, selectedTabStore } =
    useSelector((state) => state.detailApp);
  const getCurrentOption = () => {
    return publisherOptions.find((el) => el.url === option);
  };
  const handlePrev = () => {
    const pathName = location.pathname;
    if (pathName === "/terms-and-services") {
      handlePrevTabStore();
      return;
    }
    const currentOption = getCurrentOption();
    if (currentOption.index === 1) {
      return;
    } else {
      const prevOption = publisherOptions.find(
        (el) => el.index === currentOption.index - 1
      );
      navigate(`/for-publishers/${prevOption.url}`);
    }
  };
  const handleNext = () => {
    const pathName = location.pathname;
    if (pathName === "/terms-and-services") {
      handleNextTabStore();
      return;
    }
    const currentOption = getCurrentOption();
    console.log(currentOption);
    if (currentOption.index === publisherOptions.length) {
      return;
    } else {
      const nextOption = publisherOptions.find(
        (el) => el.index === currentOption.index + 1
      );
      navigate(`/for-publishers/${nextOption.url}`);
    }
  };
  return (
    <SideLeft status={customLayout.data}>
      <div className="wrap_sidebar">
        {/* {icon_left.map((item, index) => {
          return (
            <></>
            // <ItemMenu key={index}>
            //    <NavLink to={item.path}>
            //       <span className="name_menu_item">{item.name}</span>
            //       <LazyLoadImage
            //          className="icon"
            //          src={item.icon}
            //          alt={item.alt}
            //       />
            //    </NavLink>
            // </ItemMenu>
          );
        })} */}
        <div className="navigate_group">
          <button
            onClick={handlePrev}
            className={`${
              getCurrentOption()?.index === 1 ? "disabled_btn" : ""
            } ${
              location.pathname === "/terms-and-services" &&
              selectedTabStore === 1
                ? "disabled_btn"
                : ""
            }`}
          >
            <UpOutlined />
          </button>
          <p>
            {location.pathname === "/terms-and-services" ? "Click" : "Scroll"}
          </p>
          <button
            onClick={handleNext}
            className={`${
              getCurrentOption()?.index === publisherOptions.length
                ? "disabled_btn"
                : ""
            } ${
              location.pathname === "/terms-and-services" &&
              selectedTabStore === tabContent.length
                ? "disabled_btn"
                : ""
            }`}
          >
            <DownOutlined />
          </button>
        </div>
      </div>
    </SideLeft>
  );
};

export default SideBarLeft;
