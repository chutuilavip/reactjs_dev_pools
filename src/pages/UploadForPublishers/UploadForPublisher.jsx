import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import {
  ContainerPublishers,
  HeroPublishers,
  WrapTermsAndServices,
} from "./styled";
import { Tabs } from "antd";
import TermAndService from "../../components/TermsAndServices/TermAndService/TermAndService";
import Upload from "../../components/TermsAndServices/Upload/Upload";
import Advertisement from "../../components/TermsAndServices/Advertisement/Advertisement";
import { useParams } from "react-router-dom";

const UploadForPublishers = () => {
  const { option } = useParams();

  const items = [
    {
      label: "Terms And Services",
      key: "tab1",
      children: <TermAndService />,
    },
    { label: "Upload", key: "tab2", children: <Upload /> },
    { label: "Advertisement", key: "tab3", children: <Advertisement /> },
  ];

  return (
    <WrapTermsAndServices>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <HeroPublishers>
          <ContainerPublishers>
            {/* <div className="title">FOR PUBLISHERS</div> */}
            <div className="button_slide">
              <div className="ant-tabs ant-tabs-top">
                <div className="ant-tabs-content-holder">
                  <div className="ant-tabs-content ant-tabs-content-top">
                    {option === "upload" ? (
                      <Upload />
                    ) : option === "advertisement" ? (
                      <Advertisement />
                    ) : (
                      <TermAndService />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ContainerPublishers>
        </HeroPublishers>
      </motion.main>
    </WrapTermsAndServices>
  );
};

export default UploadForPublishers;
