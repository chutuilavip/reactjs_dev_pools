import React, { useContext } from "react";
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

  const { submitForm, selectedTab, setSelectedTab } =
    DetailContext.buttonGroupProps;
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
          <PackageButton type="submit" className="btn btn-submit">
            {selectedTab === 4 ? "Submit" : "Next"}
          </PackageButton>
        </div>
      </div>
    </ButtonGroupWrapper>
  );
}
