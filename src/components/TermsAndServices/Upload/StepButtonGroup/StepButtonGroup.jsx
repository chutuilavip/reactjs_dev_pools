import { Button } from "antd";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import PackageButton from "../../Button/PackageButton";
import PackageTabs from "../../PackageTabs/PackageTabs";
import { UploadContextWrapper } from "../UploadAppDetailWrapper/UploadAppDetailWrapper";
import { ButtonGroupWrapper } from "./styled";
export const tabContent = [
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
export default function StepButtonGroup() {
  const DetailContext = useContext(UploadContextWrapper);
  const { isLoadingSubmit } = useSelector((state) => state.detailApp);
  const { submitForm, selectedTab, setSelectedTab, disabledSubmit } =
    DetailContext;
  const { handlePrevTab, handleNextTab, isDisabledPrev } = DetailContext;
  return (
    <ButtonGroupWrapper>
      <div className="step_group">
        <PackageTabs
          tabContent={tabContent}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          activeContent={tabContent[selectedTab - 1]?.content}
        />
        <div className="btn-group">
          <PackageButton
            disabled={selectedTab === 1 ? true : false || isDisabledPrev}
            className={`btn ${
              selectedTab === 1 || isDisabledPrev ? "disabled" : ""
            }`}
            onClick={handlePrevTab}
            type="button"
          >
            Previous
          </PackageButton>
          {selectedTab !== 4 ? (
            <PackageButton
              disabled={disabledSubmit}
              type="submit"
              className="btn btn-submit"
            >
              {selectedTab === 4 ? "Submit" : "Next"}
            </PackageButton>
          ) : (
            <Button
              htmlType="submit"
              className="btn btn-submit btn-antd"
              loading={isLoadingSubmit}
              disabled={disabledSubmit}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </ButtonGroupWrapper>
  );
}
