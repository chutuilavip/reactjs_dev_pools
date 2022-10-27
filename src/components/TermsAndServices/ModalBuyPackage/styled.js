import styled from "styled-components";

export const ModalBuyPackageWrapper = styled.div`
  &&& {
    .ant-upload.ant-upload-select-picture-card {
      width: 100% !important;
    }
    .ant-upload-list-picture-card-container {
      display: none;
    }
  }
  form {
    width: 50rem;
    img {
      aspect-ratio: 16/9;
      border-radius: 5px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .ant-upload.ant-upload-select {
      width: 100%;
      cursor: pointer;
      .ant-upload {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid black;
        padding: 4rem 0;
        border-radius: 10px;
      }
    }
  }
  .buy_banner {
    display: flex;
    flex-direction: column;
    p {
      color: black;
    }
  }
`;
