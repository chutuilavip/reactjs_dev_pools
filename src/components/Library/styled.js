import styled from "styled-components";

export const WrapSlideLibrary = styled.div``;

export const TitleLibrary = styled.div`
  padding-top: 60px;
  padding-bottom: 30px;
  width: 96%;
  margin: auto;
  ._title {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  ._select {
    margin-top: 24px;
    display: flex;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.0025em;
      color: #ffffff;
      margin-right: 15px;
    }
    .ant-select-selector {
      background-color: transparent !important;
      color: #ffffff;
    }
  }
`;

export const ListItems = styled.div`
  max-width: 100%;
  width: 98%;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const MoreItem = styled.div`
  width: 267px;
  cursor: pointer;
  background: #1d212f;
  border-radius: 5px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 17px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  :hover p,
  svg {
    scale: 1.05;
    transition: 2s;
  }
`;

export const ShowItem = styled.div`
  border-radius: 5px;
  width: 255px;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 400px;
  }
  .footer {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 100%;
    height: 80px;
    background: #161616;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
    padding: 5px 10px;
    .title_foo {
      display: flex;
      justify-content: space-between;
      ._name {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.0025em;
        color: #ffffff;
      }
      .__ri {
      }
    }
    .text_fo {
      margin-top: 6px;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
      color: #ffffff;
    }
    ._lauch {
      margin-top: 6px;
      display: flex;
      align-items: center;
      p {
        margin-left: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        color: #ffffff;
      }
    }
  }
`;
