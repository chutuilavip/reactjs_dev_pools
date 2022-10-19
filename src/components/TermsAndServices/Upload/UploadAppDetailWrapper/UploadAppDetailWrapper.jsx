import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadContent } from "../../../../redux/slice/detailApp.slice";
import PackageButton from "../../Button/PackageButton";
import PackageTabs from "../../PackageTabs/PackageTabs";
import UploadApk from "../UploadApk/UploadApk";
import UploadAppDetail from "../UploadAppDetail/UploadAppDetail";
import UploadInformation from "../UploadInformation/UploadInformation";
import UploadResource from "../UploadResource";
import { WrapperAppDetail } from "./styled";

export default function UploadAppDetailWrapper() {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(1);
  const [finalData, setFinalData] = useState({});
  const tabContent = [
    {
      index: 1,
      content: "1 App.Game info",
    },
    {
      index: 2,
      content: "2 Graphic",
    },
    {
      index: 3,
      content: "3 Information",
    },
    {
      index: 4,
      content: "4 Upload APK file",
    },
  ];
  const renderStepForUpload = () => {
    switch (selectedTab) {
      case 1:
        return (
          <UploadAppDetail setFinalData={setFinalData} finalData={finalData} />
        );
      case 2:
        return (
          <UploadResource setFinalData={setFinalData} finalData={finalData} />
        );
      case 3:
        return (
          <UploadInformation
            setFinalData={setFinalData}
            finalData={finalData}
          />
        );
      case 4:
        return <UploadApk setFinalData={setFinalData} finalData={finalData} />;
      default:
        return;
    }
  };
  useEffect(() => {
    if (selectedTab === 5) {
      console.log("Final data", finalData);
    }
  }, [setSelectedTab]);

  const handleNextTab = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (selectedTab <= tabContent.length - 1) {
      setSelectedTab((selectedTab) => {
        if (selectedTab < tabContent.length - 1) {
          return selectedTab + 1;
        }
        return tabContent[tabContent.length - 1].index;
      });
    } else {
      const formdata = new FormData();
      const keys = Object.keys(finalData);
      for (let v of keys) {
        console.log("keyyyyyyyyy", v);
        if (v === "uploadavatar") {
          formdata.append(v, finalData[v][0]);
        } else {
          formdata.append(v, finalData[v]);
        }
      }
      dispatch(uploadContent(formdata));
    }
  };
  const handlePrevTab = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (selectedTab > 0) {
      setSelectedTab((selectedTab) => {
        return selectedTab - 1;
      });
    } else {
      console.log("SUbmit");
    }
  };
  console.log("Final data", finalData);

  return (
    <WrapperAppDetail>
      {renderStepForUpload()}
      <div className="step_group">
        <PackageTabs
          tabContent={tabContent}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          activeContent={tabContent[selectedTab - 1]?.content}
        />
        <div className="btn-group">
          <PackageButton
            disabled={selectedTab === 1 ? true : false}
            className="btn"
            onClick={handlePrevTab}
          >
            Previous
          </PackageButton>
          <PackageButton className="btn" onClick={handleNextTab}>
            {selectedTab === 4 ? "Submit" : "Next"}
          </PackageButton>
        </div>
      </div>
    </WrapperAppDetail>
  );
}
