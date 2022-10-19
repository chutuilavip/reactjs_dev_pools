import styled from "styled-components";

export const WrapSlideFriend = styled.div`
   /* width: 100%; */
   padding-top: 60px;
   background-color: #151515;
   .ant-tabs-nav-wrap {
      justify-content: center;
   }
   .ant-tabs-top > .ant-tabs-nav::before {
      border-bottom: none;
   }
   .ant-tabs-nav-list {
      width: 583px;
      height: 85px;
      background: #212121;
      align-items: center;
   }
   .ant-tabs-tab {
      justify-content: center;
      position: relative;
      width: 181px;
      height: 65px;
      display: inline-flex;
      align-items: center;
      padding: 12px 0;
      font-size: 14px;
      background: transparent;
      border: 0;
      outline: none;
      cursor: pointer;
   }
`;
