import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PackageCardWrapper } from "../../../pages/TermsAndServices/styled";
import { Button, Modal, Select, Upload } from "antd";
import SelectController from "../Upload/SelctController/SelectController";
import { useForm } from "react-hook-form";
import { buyService, listAppNotService } from "../../../redux/slice/game.slice";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function PackageCard({
  times,
  prices,
  discount,
  views,
  id,
  setSelectedCard,
  selectedCard,
}) {
  const { control, handleSubmit, register, setValue, reset, getValues } =
    useForm();
  const [idBuy, setIdBuy] = useState();
  const [selectedCardContent, setSelectedCardContent] = useState();
  const arrService = useSelector((state) => state.listGame.listService);
  const acc = useSelector((state) => state.web3.account);
  const listAppService = useSelector(
    (state) => state.listGame.dataListAppNotService
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleShowListApp = (id) => {
    setSelectedCard(id);

    const itemService = arrService.res.data.filter((item) => item.id === id)[0];
    setSelectedCardContent(itemService);
    console.log(itemService);
    dispatch(listAppNotService(itemService.type));
    showModal();
  };

  const [img, setImg] = useState([]);

  const handleChangeAvatar = ({ fileList: newFileList }) => {
    setValue("image_banner", newFileList);
    setImg(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const onSubmit = (data) => {
    console.log("getValue", getValues());

    let finalData = { ...Object.assign(data, selectedCardContent) };
    finalData = { ...finalData, creator_address: acc };
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
    console.log("data", finalData);
    dispatch(buyService(fd));
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", gap: "40px" }}
          action=""
        >
          <SelectController
            ArrOption={listAppService?.res?.data?.my_apps || []}
            name="select"
            control={control}
            title="Game *"
          />
          {/* <Select
            {...register("abd")}
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            {listAppService?.res?.data?.my_apps?.map((item, index) => {
              return (
                <Option value={item.id} key={index}>
                  {item.title}
                </Option>
              );
            })}
          </Select> */}

          <Upload
            {...register("image_banner")}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={img}
            onChange={handleChangeAvatar}
          >
            {img.length > 0 ? null : uploadButton}
          </Upload>
          <Button htmlType="submit">SUBMIT</Button>
        </form>
      </Modal>
      <PackageCardWrapper
        status={selectedCard === id}
        onClick={() => {
          handleShowListApp(id);
        }}
      >
        <h1>
          <span className="times">{times} Days</span> -{" "}
          <span className="prices">{prices}$</span>
        </h1>
        <p className="content">
          - Reach to {views} user views - Suggest ranking keywords (upto 5
          keywords per country - 2 countries) - Increase average organic install
          about {discount}% - Export CSV 1 time/day
        </p>
      </PackageCardWrapper>
    </>
  );
}
