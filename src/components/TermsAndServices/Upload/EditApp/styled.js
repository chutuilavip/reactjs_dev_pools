import styled from "styled-components";

export const EditAppWrapper = styled.div`
  padding: 1rem;
  &&& {
    .ant-form-item-label {
      width: 20%;
      text-align: left;
    }

    .ant-select {
      width: 100%;
    }
  }
  form {
    width: 80%;
    margin: auto;
    .error_message {
      color: red;
    }
    .locale {
      margin-bottom: 2.4rem;
      display: flex;
      p {
        width: 25%;
      }
    }
  }
  .step_group {
    margin: auto;
    display: flex;
    justify-content: space-between;
    .btn-group {
      display: flex;
    }
    .btn {
      width: 30rem;
    }
  }
  .cover-wrapper {
    margin-top: 2rem;
    text-transform: uppercase;
  }
  .cover {
    width: 50%;
    border-radius: 5px;
    margin-top: 1rem;
  }
  .screenshots-wrapper {
    margin-top: 1rem;
    .screenshots {
      display: flex;
      gap: 5rem;
      flex-wrap: wrap;
      flex-direction: column;
      .image {
        width: 100%;
        display: flex;
        padding: 1rem;
        border-radius: 5px;
        box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
      }
      .screenshot {
        width: 20%;
        aspect-ratio: 2/1;

        img {
          height: 100%;
        }
      }
    }
  }
`;
