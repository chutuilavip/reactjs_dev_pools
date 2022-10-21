import { Button } from "antd";
import React from "react";
import PackageButton from "../Button/PackageButton";
import { PackageTabsWrapper } from "./styled";

export default function PackageTabs({
  selectedTab,
  setSelectedTab,
  activeContent,
  tabContent,
}) {
  return (
    <PackageTabsWrapper>
      {tabContent.map((item, index) => {
        return (
          <PackageButton
            key={index}
            className={`${selectedTab === item.index && "active"} `}
            type="button"
            // onClick={() => setSelectedTab(item.index)}
          >
            {selectedTab === item.index ? activeContent : item.index}
          </PackageButton>
        );
      })}
    </PackageTabsWrapper>
  );
}
