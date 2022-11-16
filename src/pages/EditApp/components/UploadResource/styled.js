import styled from 'styled-components';

export const UploadResourceWrapper = styled.div`
  &&& {
    .ant-form-item-label {
      width: 10%;
      text-align: left;
    }
  }
  border: 1px dashed black;
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 10px;
  .upload_resource__item {
    margin-bottom: 2rem;
  }
  .initial_content {
    width: 90%;
    margin-left: auto;
    .video {
      &__item {
        margin-bottom: 2rem;
        border: 1px dashed black;
        border-radius: 5px;
        padding: 1rem;
        p {
          text-transform: uppercase;
          margin-bottom: 1rem;
          background: #dddddd;
          padding: 1rem;
          border-radius: 7px;
          width: fit-content;
        }
      }
      display: flex;
      flex-direction: column;
    }
    video {
      width: 45rem;
      aspect-ratio: 16/9;
      border-radius: 10px;
    }
    .cover {
      width: 255px;
      height: 390px;
    }
    .image_action {
      justify-content: space-between;
      height: 25rem;
      display: flex;
      padding: 2rem;
      border: 1px dashed;
      margin-bottom: 5rem;
      border-radius: 15px;
      box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
      button {
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 7px;
      }
    }
  }
  .image {
    height: 100%;
    aspect-ratio: 16/9;
    margin-top: 0;
  }
`;
