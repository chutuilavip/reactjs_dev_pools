import { Button, Upload } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { buyService } from "../../../redux/slice/game.slice";
import SelectController from "../Upload/SelctController/SelectController";
import { PlusOutlined } from "@ant-design/icons";
import { ModalBuyPackageWrapper } from "./styled";
import { getBase64 } from "../../../utils";
import SelectControllerForBanner from "../Upload/SelectControllerForBanner/SelectControllerForBanner";

export default function ModalBuyPackage({ selectedCardContent }) {
  const dispatch = useDispatch();
  const [img, setImg] = useState([]);
  const [previewImage, setPreviewImage] = useState();
  const { control, handleSubmit, register, setValue, reset, getValues } =
    useForm();

  const acc = useSelector((state) => state.web3.account);
  const listAppService = useSelector(
    (state) => state.listGame.dataListAppNotService
  );

  const handleChangeAvatar = async ({ fileList: newFileList }) => {
    if (newFileList[0]) {
      setPreviewImage(await getBase64(newFileList[0].originFileObj));
    }
    setValue("image_banner", newFileList);
    setImg(newFileList);
  };

  const onSubmit = (data) => {
    let finalData = { ...Object.assign(data, selectedCardContent) };
    finalData = {
      ...finalData,
      creator_address: acc,
      id: data.select,
      id_service: selectedCardContent.id,
    };
    const keys = Object.keys(finalData);
    const fd = new FormData();
    for (let v of keys) {
      if (v === "image_banner") {
        let file = finalData[v][0]?.originFileObj;
        fd.append(v, file);
      } else {
        fd.append(v, finalData[v]);
      }
    }
    dispatch(buyService(fd));
    console.log("=======================================");
    console.log("data", data);
    console.log("SelectCardContent: ", selectedCardContent);
    console.log("final", finalData);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload your banner
      </div>
    </div>
  );
  return (
    <ModalBuyPackageWrapper>
      <form
        className="buy_banner"
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", gap: "40px" }}
        action=""
      >
        <SelectControllerForBanner
          ArrOption={listAppService?.res?.data?.my_apps || []}
          name="select"
          control={control}
          title="Select your game"
        />
        <Upload
          {...register("image_banner")}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          fileList={img}
          maxCount={1}
          onChange={handleChangeAvatar}
          accept="image/jpeg , image/png"
        >
          {img.length > 0 ? null : uploadButton}
        </Upload>
        {previewImage && <img src={previewImage} alt="banner" />}
        <Button htmlType="submit">SUBMIT</Button>
      </form>
    </ModalBuyPackageWrapper>
  );
}
