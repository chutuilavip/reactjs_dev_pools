import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { goToTop } from '../../../utils';
import { publisherOptions } from './SideBarUtils';
import { SideLeft } from './styled';

const SideBarLeft = (customLayout) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { option } = params;
  const { handleNextTabStore, handlePrevTabStore, selectedTabStore } = useSelector(
    (state) => state.detailApp
  );
  const getCurrentOption = () => {
    return publisherOptions.find((el) => el.url === option);
  };
  const handlePrev = () => {
    goToTop();
    const pathName = location.pathname;
    if (pathName.startsWith('/terms-and-services')) {
      handlePrevTabStore();
      return;
    }
    const currentOption = getCurrentOption();
    if (currentOption.index === 1) {
      return;
    } else {
      const prevOption = publisherOptions.find((el) => el.index === currentOption.index - 1);
      navigate(`/for-publishers/${prevOption.url}`);
    }
  };
  const handleNext = () => {
    goToTop();
    const pathName = location.pathname;
    if (pathName.startsWith('/terms-and-services')) {
      handleNextTabStore();
      return;
    }
    const currentOption = getCurrentOption();
    console.log(currentOption);
    if (currentOption.index === publisherOptions.length) {
      return;
    } else {
      const nextOption = publisherOptions.find((el) => el.index === currentOption.index + 1);
      navigate(`/for-publishers/${nextOption.url}`);
    }
  };
  const checkRoute = () => {
    if (
      location.pathname.startsWith('/for-publishers') ||
      location.pathname.startsWith('/terms-and-services')
    ) {
      return true;
    }
    return false;
  };
  return <SideLeft status={customLayout.data}></SideLeft>;
};

export default SideBarLeft;
