import React, { useState } from "react";
import {
  HeaderInfo,
  MainAvatar,
  AvatarUser,
  TextInfoUser,
  Onchange,
} from "./styled";
import { Button, Modal, Input, Avatar } from "antd";
import Pen from "../../../assets/Account/buttonchange.png";
import { useDispatch } from "react-redux";
import { getEditAvatar, getAccount } from "../../../redux/slice/account.slice";
import Loading from "../../../layout/components/Loading/Loading";
import { URL_API } from "../../../constants/constants.js";
import { useTranslation } from "react-i18next";

const InfoUser = ({ res }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formData = new FormData();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChangeAvt = () => {
    dispatch(getEditAvatar(formData));
    setIsModalOpen(false);
  };

  const { data } = res;
  const getDefaultAvatarName = () => {
    return data.dev.first_name[0] + data.dev.last_name[0];
  };
  return (
    <MainAvatar>
      {data ? (
        <HeaderInfo>
          <AvatarUser>
            {!!data.dev?.avatar ? (
              <img src={`${URL_API}/${data.dev?.avatar}`} alt="avatar user" />
            ) : (
              <Avatar
                style={{
                  verticalAlign: "middle",
                }}
              >
                {getDefaultAvatarName()}
              </Avatar>
            )}
          </AvatarUser>

          <TextInfoUser>
            <div className="title">
              {data.dev.first_name} {data.dev.last_name}
            </div>
            <div className="id"># {data.dev.id}</div>
            <Onchange>
              <Button
                type="primary"
                className="button_onchange"
                onClick={() => showModal(true)}
              >
                {t("account.change_avatar")}
              </Button>
              <img src={Pen} alt="pen " />
            </Onchange>
          </TextInfoUser>
        </HeaderInfo>
      ) : (
        <Loading />
      )}

      <Modal
        title="Edit avatar account"
        centered
        open={isModalOpen}
        onOk={handleChangeAvt}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Basic usage"
          type="file"
          onChange={(e) => formData.append("avatar", e.target.files[0])}
        />
      </Modal>
    </MainAvatar>
  );
};

export default InfoUser;
