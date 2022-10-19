import React from "react";
import { BlockSpecifi, DeviceBlock, WrapSpecification } from "./styled";
import window from "../../../assets/windown.png";
import DeviceItem from "./DeviceItem";
// image
import os from "../../../assets/Detail/Devices/os.png";
import login from "../../../assets/Detail/Devices/login.png";
import wifi from "../../../assets/Detail/Devices/wifi.png";
import processor from "../../../assets/Detail/Devices/processor.png";
import storage from "../../../assets/Detail/Devices/storage.png";
import graphics from "../../../assets/Detail/Devices/graphics.png";
import memory from "../../../assets/Detail/Devices/memory.png";
import global from "../../../assets/Detail/Devices/global.png";

// img flag
import china from "../../../assets/Detail/flag/china.png";
import england from "../../../assets/Detail/flag/england.png";
import germany from "../../../assets/Detail/flag/germany.png";
import usa from "../../../assets/Detail/flag/usa.png";
import vn from "../../../assets/Detail/flag/vn.png";

const arrDetailMinimum = [
  { img: os, title: "OS", description: "Window 10 64 bit" },
  {
    img: processor,
    title: "Processor",
    description: "Intel Core i5 or AMD equivalent",
  },
  { img: memory, title: "Memory", description: "8 GB RAM" },
  { img: storage, title: "Storage", description: "2 GB available space" },
  {
    img: graphics,
    title: "Graphics",
    description: "NVIDIA GTX 660 or AMD Radeon HD 7950",
  },
  { img: wifi, title: "Other", description: "Broadband Internet connection" },
  { img: login, title: "Login", description: "Requires Epic Games account" },
];

const arrRecommended = [
  { img: os, title: "OS", description: "Window 10 64 bit" },
  {
    img: processor,
    title: "Processor",
    description: "Intel Core i5 or AMD equivalent",
  },
  { img: memory, title: "Memory", description: "8 GB RAM" },
  { img: storage, title: "Storage", description: "2 GB available space" },
  {
    img: graphics,
    title: "Graphics",
    description: "NVIDIA GTX 660 or AMD Radeon HD 7950",
  },
];

const flagImg = [china, england, germany, usa, vn];
const Specifications = () => {
  return (
    <WrapSpecification>
      <p className="title">Specifications</p>
      <BlockSpecifi>
        <div className="header_block">
          <img src={window} alt="window" />
        </div>

        <div className="middle_block">
          <DeviceBlock>
            <p className="title_block">Minimum</p>
            <div className="item_device">
              {arrDetailMinimum.map((item, index) => {
                return <DeviceItem data={item} key={index} />;
              })}
            </div>
          </DeviceBlock>

          <DeviceBlock>
            <p className="title_block">Recommended</p>
            <div className="item_device">
              {arrRecommended.map((item, index) => {
                return <DeviceItem data={item} key={index} />;
              })}
            </div>
          </DeviceBlock>
        </div>

        <div className="footer_block">
          <div className="block_flag">
            <div className="img_global">
              <img src={global} alt="global" />
            </div>
            <div className="language">
              <p>Languages Supported</p>
              <div className="flag">
                <span>Text:</span>
                <div className="list_flag">
                  {flagImg.map((item, index) => {
                    return <img src={item} key={index} alt="flag" />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlockSpecifi>
    </WrapSpecification>
  );
};

export default Specifications;
