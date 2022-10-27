import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PackageCardWrapper } from "../../../pages/TermsAndServices/styled";
import { Button, Modal, Select, Upload } from "antd";
import SelectController from "../Upload/SelctController/SelectController";
import { useForm } from "react-hook-form";
import { buyService, listAppNotService } from "../../../redux/slice/game.slice";
import PackageVideo from "../../../pages/TermsAndServices/PackageVideo/PackageVideo";
import ModalBuyPackage from "../ModalBuyPackage/ModalBuyPackage";

const { Option } = Select;

export default function PackageCard({
  times,
  prices,
  discount,
  views,
  id,
  setSelectedCard,
  selectedCard,
  selectedTab,
}) {
  const { control, handleSubmit, register, setValue, reset, getValues } =
    useForm();
  const [idBuy, setIdBuy] = useState();
  const [selectedCardContent, setSelectedCardContent] = useState();
  const arrService = useSelector((state) => state.listGame.listService);
  const listAppService = useSelector(
    (state) => state.listGame.dataListAppNotService
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalVideoOpen, setIsModalVideoOpen] = useState(false);
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

  const handleShowListApp = (id) => {
    if (selectedTab !== 5) {
      showModal();
    } else {
      setIsModalVideoOpen(true);
    }
    const itemService = arrService.res.data.filter((item) => item.id === id)[0];
    dispatch(listAppNotService(itemService.type));
    setSelectedCardContent(itemService);
    setSelectedCard(id);
  };

  const handleCancelVideoModal = () => {
    setIsModalVideoOpen(false);
  };
  console.log(listAppService);
  return (
    <PackageCardWrapper>
      <Modal
        title="Buy banner"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalBuyPackage selectedCardContent={selectedCardContent} />
      </Modal>
      <Modal
        title="Basic Modal"
        open={isModalVideoOpen}
        footer={null}
        onCancel={handleCancelVideoModal}
      >
        <PackageVideo
          listAppService={listAppService}
          selectedCard={selectedCard}
        />
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
        <p className="content">
          - Suggest ranking keywords (upto 5 keywords per country - 2 countries)
        </p>
        <p className="content">
          - Increase average organic install about {discount}% - Export CSV 1
          time/day
        </p>
      </PackageCardWrapper>
    </PackageCardWrapper>
  );
}
