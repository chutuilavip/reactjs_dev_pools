import React, { useState } from "react";
import {
  HeaderInfo,
  MainAvatar,
  AvatarUser,
  TextInfoUser,
  Onchange,
} from "./styled";
import { Button, Modal, Input, Avatar, Upload, message } from "antd";
import Pen from "../../../assets/Account/buttonchange.png";
import { useDispatch } from "react-redux";
import { getEditAvatar, getAccount } from "../../../redux/slice/account.slice";
import Loading from "../../../layout/components/Loading/Loading";
import { URL_API } from "../../../constants/constants.js";
import { useTranslation } from "react-i18next";
import { UploadOutlined } from "@ant-design/icons";
import { getDefaultAvatarName } from "../../../helpers";
import { assignToFormData } from "../../../helpers/formData";

const InfoUser = ({ res }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [file, setFile] = useState({});
  let formData = new FormData();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }

    return isJpgOrPng;
  };
  const handleCancel = () => {
    if (disabledButton) {
      return;
    }
    setIsModalOpen(false);
  };
  const handleChangeAvt = () => {
    if (disabledButton) {
      return;
    }
    if (Object.keys(file).length === 0) {
      return;
    }
    formData.append("avatar", file);
    dispatch(getEditAvatar(formData));
    setIsModalOpen(false);
  };
  const handleChange = (info) => {
    if (info?.file.status === "uploading") {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
      setFile(info.file.originFileObj);
    }
  };
  const { data } = res;
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
                {getDefaultAvatarName(data.dev.first_name, data.dev.last_name)}
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
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          // defaultFileList={[...fileList]}
          maxCount={1}
          beforeUpload={beforeUpload}
          accept="image/png, image/jpeg"
          onChange={handleChange}
        >
          <Button className="upload_avatar_btn" icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
      </Modal>
    </MainAvatar>
  );
};

export default InfoUser;
