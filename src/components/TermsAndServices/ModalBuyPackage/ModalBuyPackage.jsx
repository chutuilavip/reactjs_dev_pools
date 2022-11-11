import { Button, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { buyService, listAppNotService } from "../../../redux/slice/game.slice";
import SelectController from "../Upload/SelctController/SelectController";
import { PlusOutlined } from "@ant-design/icons";
import { ModalBuyPackageWrapper } from "./styled";
import { getBase64 } from "../../../utils";
import SelectControllerForBanner from "../Upload/SelectControllerForBanner/SelectControllerForBanner";
import { toast } from "react-toastify";
import Loading from "../../../layout/components/Loading/Loading";
const { Option } = Select;

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
  const { createdApps, isLoadingCreatedApps } = useSelector(
    (state) => state.detailApp
  );
  const { isLoadingModalBuyBanner } = useSelector((state) => state.listGame);

  const handleChangeAvatar = async ({ fileList: newFileList }) => {
    if (newFileList[0]) {
      setPreviewImage(await getBase64(newFileList[0].originFileObj));
    }
    setValue("image_banner", newFileList);
    setImg(newFileList);
  };

  const onSubmit = (data) => {
    if (
      !data.image_banner &&
      selectedCardContent?.type !== "top_game" &&
      selectedCardContent?.type !== "hot_game"
    ) {
      toast.error("Please choose your image banner");
      return;
    } else if (!data.select) {
      toast.error("Please choose your game");
      return;
    }

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
  useEffect(() => {
    dispatch(listAppNotService(selectedCardContent?.type));
  }, []);
  console.log("selectedCardContent", listAppService);

  return (
    <ModalBuyPackageWrapper>
      {isLoadingModalBuyBanner ? (
        <div
          className="loading_wrapper"
          style={{ width: "30rem", height: "30rem" }}
        >
          <Loading />
        </div>
      ) : (
        <form
          className="buy_banner"
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", gap: "40px" }}
          action=""
        >
          {/* <SelectControllerForBanner
          ArrOption={listAppService?.res?.data?.my_apps || []}
          name="select"
          control={control}
          title="Select your game"
        /> */}
          <Controller
            name="select"
            control={control}
            render={({ field }) => (
              <Select
                {...register}
                {...field}
                className="item_select"
                defaultValue={null}
              >
                <Option value={null}>Select your game</Option>
                {listAppService?.res?.data?.my_apps?.map((item, index) => {
                  return (
                    <Option key={index} value={item.code ? item.code : item.id}>
                      {item.title || item.language}
                    </Option>
                  );
                })}
              </Select>
            )}
          />
          {selectedCardContent.type !== "hot_game" &&
            selectedCardContent.type !== "top_game" && (
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
            )}

          {previewImage && <img src={previewImage} alt="banner" />}
          <Button htmlType="submit">SUBMIT</Button>
        </form>
      )}
    </ModalBuyPackageWrapper>
  );
}
