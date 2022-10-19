import styled from "styled-components";

export const HeroAdvertisement = styled.div`
    
`;

export const ContainerPublishers = styled.div`
  max-width: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  .title_advertisement {
        font-weight: 700;
        font-size: 32px;
        line-height: 41.6px;
        color: #FFFFFF;
        margin-bottom: 2%;
        margin-top: 3%;
    }

    .description_advertisement {
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 20.8px;
    }

    .description_advertisement_item {
        font-weight: 700;
        font-size: 24px;
        line-height: 31.2px;
        color: #FFFFFF;
    }

    .list_advertisement {
        color: #FFFFFF;
        margin-top: 1%;
        .list_advertisement_item{
            font-weight: 400;
            font-size: 16px;
            line-height: 20.8px;
            margin-left: 2%;
        }

    }

    .check_agree {
        color: #FFFFFF;
        .check_agree_item {
            margin-right: 1%;
        }
    }

    .active {
        display: block;
        color: blue;
    }

    .un_active {
        display: none;
        color: red;
    }

    .capcha_block {
      width : 100%;
      height: 85px;
      .capcha_block_itme {
        width: 19%;
        height: 86px;
        overflow: hidden;
        margin-top: 2%;
        background-color: black;
      }
    }
  .button_slide {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 3%;
    .ant-tabs {
      display: flex;
      flex-direction: column-reverse;
      max-width: 100%;
      width: 100%;
      /* margin: auto; */


      .ant-tabs-nav {
        position: relative;
        display: flex;
        flex: none;
        max-width: 100%;
        width: 100%;
        /* z-index: 9999; */
        /* margin: auto; */
        /* margin-top: 4%; */
        .ant-tabs-nav-list {
          margin: 0;
          .ant-tabs-tab {
            background-color: #212121;
            max-width: 100%;
            width: 85%;
            font-size: 20px;
            margin: 0;
            display: flex;
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
        width: 100%;
        padding-top: 0%;
        font-size: 20px;
        color: #ffffff;
      }
    }
  }

  .button_next {
    max-width: 100%; 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transform: translateY(100%);
    .button_next_item {
      max-width: 100%;
      width: 13%;
      height: 60px;
    }
    .activeCapcha {
      background-color: blue;
      cursor: pointer;
    }
    .un_activeCapcha{
      background-color: black;
      cursor: not-allowed;
    }
  }



  .target_customers {
    display: flex;
    flex-direction: column;
    .container_colum {
      display: flex;
      display: flex;
      max-width: 100%;
      width: 100%;
      flex-direction: row;
      .colum_left {
        max-width: 100%;
        width: 100%;
        .colum_left_item {
          display: flex;
          flex-direction: row;
          max-width: 100%;
          width: 90%;
          justify-content: space-between;
          margin-bottom: 5%;
          }
        }
        .title_select {
          font-weight: 700;
          font-size: 32px;
          line-height: 41.6px;
        }

        .container_select {
          width: 40%;
          height: 60px;
          .ant-select {
            width: 100%;
            color: #FFFFFF;
            display: flex;
            .ant-select-selector {
              height: 51px;
              align-items: center;
              font-size: 16px;
              font-weight: 400;
            }
          }
          }
          .item_select {

          }
          .colo_background {
            background-color: #3B72FE;
          }
        }
      }
      .colum_right {
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .colum_right_item {
          display: flex;
          flex-direction: row;
          max-width: 100%;
          width: 90%;
          justify-content: space-between;
          margin-bottom: 5%;
        }
      }
      .title_custom {
        font-weight: 700;
        font-size: 32px;
        line-height: 41.6px;
        color: #FFFFFF;
      }

      .discription_customers {
        font-weight: 400;
        font-size: 16px;
        line-height: 20.8px;
        color: #FFFFFF;
        margin-bottom: 4%;
      }

      .button_confirm {
        max-width: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 2%;
        display: flex;
        margin-bottom: 2%;
        button {
          height: 61px;
          background-color: blue;
          width: 13%;
          cursor: pointer;
        }
      }
    

`;
