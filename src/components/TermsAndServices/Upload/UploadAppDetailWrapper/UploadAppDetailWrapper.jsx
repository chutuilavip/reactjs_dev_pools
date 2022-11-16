import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAndLanguage, uploadContent } from '../../../../redux/slice/detailApp.slice';
import PackageButton from '../../Button/PackageButton';
import PackageTabs from '../../PackageTabs/PackageTabs';
import StepButtonGroup, { tabContent } from '../StepButtonGroup/StepButtonGroup';
import UploadApk from '../UploadApk/UploadApk';
import UploadAppDetail from '../UploadAppDetail/UploadAppDetail';
import UploadInformation from '../UploadInformation/UploadInformation';
import UploadResource from '../UploadResource';
import { WrapperAppDetail } from './styled';
export const UploadContextWrapper = createContext();
export default function UploadAppDetailWrapper() {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(1);
  const [finalData, setFinalData] = useState({});
  const [isDisabledPrev, setIsDisabledPrev] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(false);

  useEffect(() => {
    dispatch(getCategoriesAndLanguage());
  }, []);
  const renderStepForUpload = () => {
    const props = {
      setFinalData,
      finalData,
    };
    switch (selectedTab) {
      case 1:
        return <UploadAppDetail {...props} />;
      case 2:
        return <UploadResource {...props} />;
      case 3:
        return <UploadInformation {...props} />;
      case 4:
        return <UploadApk {...props} />;
      default:
        return;
    }
  };

  const handleNextTab = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (selectedTab <= tabContent.length - 1) {
      setSelectedTab((selectedTab) => {
        if (selectedTab < tabContent.length - 1) {
          return selectedTab + 1;
        }
        return tabContent[tabContent.length - 1].index;
      });
    } else {
      submitForm();
    }
  };

  const handlePrevTab = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (selectedTab > 0) {
      setSelectedTab((selectedTab) => {
        return selectedTab - 1;
      });
    } else return;
  };

  const submitForm = (formData) => {
    dispatch(uploadContent({ formData, callback: () => 1 }));
  };

  const value = {
    submitForm,
    selectedTab,
    setSelectedTab,
    buttonGroupComponent: <StepButtonGroup />,
    handleNextTab,
    handlePrevTab,
    submitForm,
    setIsDisabledPrev,
    isDisabledPrev,
    disabledSubmit,
    setDisabledSubmit,
  };
  return (
    <UploadContextWrapper.Provider value={value}>
      <WrapperAppDetail>{renderStepForUpload()}</WrapperAppDetail>
    </UploadContextWrapper.Provider>
  );
}
