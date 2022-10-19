import React, { useState } from "react";
import {
   HeaderInfo,
   MainAvatar,
   AvatarUser,
   TextInfoUser,
   Onchange,
} from "./styled";
import { Button, Modal, Input } from "antd";
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
   return (
      <MainAvatar>
         {data ? (
            <HeaderInfo>
               <AvatarUser>
                  <img
                     src={`${URL_API}/${data.user.avatar}`}
                     alt="avatar user"
                  />
               </AvatarUser>

               <TextInfoUser>
                  <div className="title">
                     {data.user.first_name} {data.user.last_name}
                  </div>
                  <div className="id"># {data.user.id}</div>
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
