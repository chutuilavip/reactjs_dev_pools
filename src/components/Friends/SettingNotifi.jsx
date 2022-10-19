import React from "react";
import {
   WrapSetting,
   SettingNotifications,
   Notifications,
   Category,
} from "./styled";
import { Tabs } from "antd";
import SettingNotification from "./SettingNotification";
import styled from "styled-components";
import ImgAvt from "../../assets/inf.png";
import { BsCheckLg } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const SettingNotifi = () => {
   const items = [
      {
         label: "General",
         key: "item-1",
         children: (
            <Category>
               <div className="_title_category">All Notifications</div>
               <ListItem>
                  <ItemDetail>
                     <img src={ImgAvt} alt="avatar" />
                     <div className="_text">
                        <div>Your friend has invited you to a game.</div>
                        <p>April 24, 2022</p>
                     </div>
                  </ItemDetail>
               </ListItem>
            </Category>
         ),
      },
      {
         label: "Friend Requests",
         key: "item-2",
         children: (
            <Category>
               <div className="_title_category">History Friend Requests</div>
               <ListItem>
                  <ItemDetail>
                     <img src={ImgAvt} alt="avatar" />
                     <div className="_text_fr">
                        <div>
                           <div className="_name">CorgiHihi, 23</div>
                           <p className="_time">1 week ago</p>
                        </div>
                        <div className="_option">
                           <BsCheckLg style={{ color: "#06C270" }} />
                           <MdOutlineCancel style={{ color: "red" }} />
                        </div>
                     </div>
                  </ItemDetail>
               </ListItem>
            </Category>
         ),
      },
      {
         label: "Purchased",
         key: "item-3",
         children: (
            <Category>
               <div className="_title_category">History Payment</div>
               <ListItem>
                  <ItemDetail>
                     <img src={ImgAvt} alt="avatar" />
                     <div className="_text">
                        <div>Your friend has invited you to a game.</div>
                        <p>April 24, 2022</p>
                     </div>
                  </ItemDetail>
               </ListItem>
            </Category>
         ),
      },
   ];

   return (
      <WrapSetting>
         <SettingNotification />
         <Notifications>
            <div className="_small_title">Notifications</div>
            <Tabs items={items} />
         </Notifications>
      </WrapSetting>
   );
};

export default SettingNotifi;

const ListItem = styled.div`
   height: 740px;
   display: flex;
   flex-direction: column;
   padding: 26px;
   gap: 45px;
   overflow-y: scroll;
`;

const ItemDetail = styled.div`
   height: 80px;
   display: flex;
   gap: 24px;
   img {
      width: 80px;
      height: 80px;
   }
   ._text {
      div {
         font-style: normal;
         font-weight: 700;
         font-size: 20px;
         letter-spacing: 0.0025em;
         color: #ffffff;
      }
      p {
         font-style: normal;
         font-weight: 400;
         font-size: 11px;
         letter-spacing: 0.0025em;
         color: #9e9e9e;
         margin-top: 14px;
      }
   }
   ._text_fr {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      div {
         font-style: normal;
         font-weight: 700;
         font-size: 24px;
         letter-spacing: 0.0025em;
         color: #ffffff;
         ._time {
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            letter-spacing: 0.0025em;
            color: #9e9e9e;
         }
      }
      ._option {
         display: flex;
         gap: 50px;
      }
   }
`;
