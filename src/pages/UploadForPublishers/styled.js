import styled from "styled-components";

export const WrapTermsAndServices = styled.div`
   background-color: #131313;
`;

export const HeroPublishers = styled.div`
   max-width: 100%;
   width: 100%;
   background-color: #131313;
   height: fit-content;
`;

export const ContainerPublishers = styled.div`
   max-width: 100%;
   width: 100%;
   margin: auto;
   .title {
      color: #ffffff;
      max-width: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      font-size: 48px;
      font-weight: 700;
      line-height: 62.4px;
      margin-top: 4%;
      margin-bottom: 4%;
   }

   .button_slide {
      max-width: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .ant-tabs {
         display: flex;
         flex-direction: column;
         max-width: 100%;
         width: 100%;
         margin: auto;
         justify-content: center;
         align-items: center;
         .ant-tabs-nav {
            position: relative;
            display: flex;
            flex: none;
            align-items: center;
            max-width: 100%;
            -webkit-box-pack: center;
            justify-content: center;
            width: 100%;
            margin: auto;
            .ant-tabs-nav-list {
               margin: auto;
               .ant-tabs-tab {
                  background-color: #212121;
                  max-width: 100%;
                  width: 85%;
                  font-size: 20px;
                  margin: 0;
                  display: flex;
                  justify-content: center;
                  padding: 0;
               }

               .ant-tabs-tab .ant-tabs-tab-btn {
                  padding: 15px 70px;
                  color: #757575;
               }
               .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
                  background-color: #3b72fe;
                  color: #ffffff;
               }
            }
         }
         .ant-tabs-nav::before {
            border: none;
         }

         .ant-tabs-content-holder {
            flex: auto;
            min-width: 0;
            min-height: 0;
            max-width: 100%;
            left: 0px;
            width: 90%;
            padding-top: 4%;
            font-size: 20px;
            color: #ffffff;
         }
      }
   }
`;
