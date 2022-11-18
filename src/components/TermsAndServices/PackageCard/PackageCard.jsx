import { Modal, Select } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PackageVideo from '../../../pages/TermsAndServices/PackageVideo/PackageVideo';
import { PackageCardWrapper } from '../../../pages/TermsAndServices/styled';
import ModalBuyPackage from '../ModalBuyPackage/ModalBuyPackage';

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
  cardContent,
}) {
  const { control, handleSubmit, register, setValue, reset, getValues } = useForm();
  const [idBuy, setIdBuy] = useState();
  const arrService = useSelector((state) => state.listGame.listService);
  const listAppService = useSelector((state) => state.listGame.dataListAppNotService);
  console.log('cardContentcardContent', cardContent);
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

  const handleCancelVideoModal = () => {
    setIsModalVideoOpen(false);
  };
  console.log(cardContent);
  return (
    <PackageCardWrapper>
      <Modal
        title={`${cardContent?.type.replaceAll('_', ' ').toString().toUpperCase()} SERVICES`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {cardContent.type === 'video' ? (
          <PackageVideo
            selectedCardContent={cardContent}
            listAppService={listAppService}
            selectedCard={selectedCard}
          />
        ) : (
          <ModalBuyPackage selectedCardContent={cardContent} />
        )}
      </Modal>

      <div
        style={{ width: '100%', height: '100%' }}
        status={selectedCard === id}
        onClick={() => {
          // handleShowListApp(id);
          showModal();
          // setSelectedCardContent()
          setSelectedCard(id);
        }}
      >
        <h1>
          <span className="times">{times} Days - </span>
          <span className="prices">{prices}$</span>
        </h1>
        <p className="content">
          - Reach to {views} user views - Suggest ranking keywords (upto 5 keywords per country - 2
          countries) - Increase average organic install about {discount}% - Export CSV 1 time/day
        </p>
        <p className="content">
          - Suggest ranking keywords (upto 5 keywords per country - 2 countries)
        </p>
        <p className="content">
          - Increase average organic install about {discount}% - Export CSV 1 time/day
        </p>
      </div>
    </PackageCardWrapper>
  );
}
