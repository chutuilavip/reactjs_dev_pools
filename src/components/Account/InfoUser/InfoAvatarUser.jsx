import { UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, message, Modal, Upload } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { URL_API } from '../../../constants/constants.js';
import { getDefaultAvatarName } from '../../../helpers';
import Loading from '../../../layout/components/Loading/Loading';
import { getEditAvatar } from '../../../redux/slice/account.slice';
import { getBase64 } from '../../../utils.js';
import { AvatarUser, HeaderInfo, MainAvatar, Onchange, TextInfoUser } from './styled';

const InfoUser = ({ res }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [file, setFile] = useState();
  const [previewAvatar, setPreviewAvatar] = useState({});
  let formData = new FormData();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      return false;
    }
    console.log(isJpgOrPng, file);
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
    if (!file) {
      setIsModalOpen(false);
      return;
    }
    formData.append('avatar', file);
    dispatch(getEditAvatar(formData));
    setIsModalOpen(false);
    console.log(file);
  };
  const handleChange = (info) => {
    info.file.status = 'done';
    setFile(info?.fileList[0]?.originFileObj);
  };

  return (
    <MainAvatar>
      {res?.data ? (
        <HeaderInfo>
          <AvatarUser>
            {!!res?.data.dev?.avatar ? (
              <img src={`${URL_API}/${res?.data.dev?.avatar}`} alt="avatar user" />
            ) : (
              <Avatar
                style={{
                  verticalAlign: 'middle',
                }}
              >
                {getDefaultAvatarName(res?.data?.dev?.first_name, res?.data?.dev?.last_name)}
              </Avatar>
            )}
          </AvatarUser>

          <TextInfoUser>
            <div className="title">
              {res?.data?.dev?.first_name} {res?.data?.dev?.last_name}
            </div>
            <div className="id"># {res?.data?.dev?.id}</div>
            <Onchange>
              <Button type="primary" className="button_onchange" onClick={() => showModal(true)}>
                {t('account.change_avatar')}
              </Button>
              {/* <img src={Pen} alt="pen " /> */}
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
