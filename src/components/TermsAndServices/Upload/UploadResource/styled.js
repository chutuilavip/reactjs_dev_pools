import styled from "styled-components";
export const WrapUploadResource = styled.div`
  &&& {
    .ant-upload.ant-upload-drag {
      padding: 1rem 2rem;
      border-radius: 10px;
      height: auto;
    }
    .ant-upload-list-item-card-actions .anticon {
      color: red;
    }
    .ant-upload-list-picture .ant-upload-list-item-thumbnail .anticon {
      display: none;
    }
    .ant-progress-outer {
      display: none;
    }
    .upload_item.item_1 {
      .ant-upload.ant-upload-drag {
        display: ${(props) => props.imagesDisplay && "inline-block"};
        opacity: ${(props) => props.imagesDisplay && 0};
        height: ${(props) => props.imagesDisplay && 0};
        cursor: ${(props) => props.imagesDisplay && "not-allowed"};
        pointer-events: ${(props) => props.imagesDisplay && "none"};
      }
    }
    .ant-upload-list-picture .ant-upload-list-item-error {
      border-color: white;
    }
    .ant-upload-list-item-error {
      color: red;
    }

    .ant-upload-list-item-thumbnail {
      height: 100%;
      img {
        height: 100%;
        aspect-ratio: 1 / 1;
      }
    }
    .ant-upload-list-item-name {
      color: white !important;
    }
    .ant-upload-list-item-list-type-picture {
      height: 12rem;
    }
  }
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .previewAvatar {
    width: 25.5rem;
    height: 39rem;
  }
  .form_upload {
    display: flex;
    flex-direction: column;
    .upload_item {
      display: flex;
      width: 100%;
      gap: 7rem;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
  }
  .error_message {
    color: red;
  }
  .avatar_uploaded {
    display: flex;
    align-items: flex-start;
    background: white;
    color: black;
    width: 52%;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 1rem;
    img {
      width: 8rem;
      height: 13rem;
    }
    button {
      height: 100%;
      display: flex;
      cursor: pointer;
      &:hover {
        span {
          animation: exit 2s linear 0s infinite;
        }
      }
    }
  }
  @keyframes exit {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
