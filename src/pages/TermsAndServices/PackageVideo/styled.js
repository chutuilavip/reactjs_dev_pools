import styled from "styled-components";

export const PackageVideoWrapper = styled.div`
  &&& {
    .ant-upload-list-picture {
      display: none;
    }
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  form {
    width: 100%;
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
    }
  }
  .thumbnail {
    img {
      width: 100%;
      border-radius: 5px;
      aspect-ratio: 16/9;
    }
  }
`;
