import styled from 'styled-components';

export const PackageVideoWrapper = styled.div`
  &&& {
    .ant-upload-list-picture {
      display: none;
    }
    .ant-form-item-label {
      width: 30%;
      text-align: left;
    }
  }
  width: 100rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    label {
      color: white;
    }
  }
  .loading_wrapper {
    .loading {
      width: 100%;
      height: 100%;
    }
  }
  .media {
    width: 50%;
    display: flex;
  }
  .flex_item {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    gap: 3rem;
  }
  .video {
    video {
      width: 100%;
      aspect-ratio: 16/9;
      border-radius: 5px;
      margin-top: 2rem;
    }
  }
  .thumbnail {
    img {
      width: 100%;
      border-radius: 5px;
      aspect-ratio: 16/9;
      margin-top: 2rem;
    }
  }
  .media-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    select {
      width: 100%;
    }
  }
`;
