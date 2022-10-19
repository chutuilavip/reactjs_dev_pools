import styled from "styled-components";

export const PopUpShow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  opacity: ${({ status }) => (status ? "1" : "0")};
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${({ status }) => (status ? "999999" : "-999999")};
  transition: all 0.4s;
`;

export const WrapPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 800px;
  background-color: #212121;

  .ant-tabs {
    flex-direction: row;
  }
  .ant-tabs-nav {
    width: 300px;
  }
  .ant-tabs-nav-list {
    flex-direction: column;
    gap: 20px;
    padding: 33px 0 33px 80px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .ant-tabs-nav::before {
    border: none;
  }
  .ant-tabs-ink-bar-animated {
    display: none;
  }
  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0;
  }
  .ant-tabs-content-holder {
    padding: 33px 30px;
  }
`;

export const WrapContent = styled.div`
  .category_title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.0025em;
    color: #e0e0e0;
    margin-bottom: 16px;
    p {
      margin-left: 20px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.0025em;
      color: #e0e0e0;
    }
  }

  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
  }

  ._button {
    background-color: #3a3a3a;
    height: 70px;
    width: 400px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.0025em;
    color: #e0e0e0;
  }
  ._small_text {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.0025em;
    color: #9e9e9e;
    margin-top: 8px;
    margin-bottom: 32px;
  }
`;
