import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBarLeft from "./components/Sidebar/SideBarLeft";
import SideBarRight from "./components/Sidebar/SideBarRight";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setLayout, setUrlPage } from "../redux/slice/customLayout.slice";
import PopupSetting from "../components/PopupSetting/PopupSetting";

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [stateUrl, setStateUrl] = useState();

  const checkUrl =
    location.pathname === "/nft-game" ||
    location.pathname === "/metaverse" ||
    location.pathname === "/play-to-earn" ||
    location.pathname === "/service";

  useEffect(() => {
    if (checkUrl) {
      dispatch(setLayout(true));
    } else {
      dispatch(setLayout(false));
    }
    dispatch(setUrlPage(stateUrl));
    setStateUrl(location.pathname);
  }, [location.pathname]);

  const { customLayout, popupSetting } = useSelector(
    (state) => state.customLayout
  );

  return (
    <>
      <WrapLayout>
        <PopupSetting data={popupSetting} />
        <Header data={customLayout} />
        <WrapSideContent>
          <SideBarLeft data={customLayout} />
          <WrapFooterContent status={customLayout}>
            <Outlet />
            <Footer />
          </WrapFooterContent>
          <SideBarRight data={customLayout} />
        </WrapSideContent>
      </WrapLayout>
    </>
  );
};

export default Layout;

const WrapLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const WrapSideContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const WrapFooterContent = styled.div`
  width: calc(100% - 244px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
