import { WrapPopup, PopUpShow } from "./styled";
import React, { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutSide";
import { setShowPopup } from "../../redux/slice/customLayout.slice";
import { useDispatch } from "react-redux";
import { Tabs } from "antd";
import Interface from "./Interface";
import Volume from "./Volume";
import InController from "./InController";
import Broadcasting from "./Broadcasting";
import InGame from "./InGame";
import Downloads from "./Downloads";

const PopupSetting = (popupSetting) => {
  const pop = useRef();
  const dispatch = useDispatch();

  useClickOutside(pop, () => {
    dispatch(setShowPopup(false));
  });

  const items = [
    { label: "Interface", key: "item-1", children: <Interface /> }, // remember to pass the key prop
    { label: "Volume", key: "item-2", children: <Volume /> },
    { label: "Controller", key: "item-3", children: <InController /> },
    { label: "Broadcasting", key: "item-4", children: <Broadcasting /> },
    { label: "In Game", key: "item-5", children: <InGame /> },
    { label: "Downloads", key: "item-6", children: <Downloads /> },
  ];

  return (
    <PopUpShow status={popupSetting.data}>
      <WrapPopup ref={pop}>
        <Tabs items={items} />
      </WrapPopup>
    </PopUpShow>
  );
};

export default PopupSetting;
