import styled from "styled-components";

export const EditAppWrapper = styled.div`
  padding: 1rem;
  min-height: 100vh;
  &&& {
    .ant-form-item-label > label {
      text-transform: uppercase;
      margin: 2rem 0;
      display: inline-block;
      background: red;
      padding: 5px 1rem;
      border-radius: 5px;
      box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
      color: white;
      background-color: #0093e9;
      background-image: linear-gradient(18deg, #0093e9 0%, #80d0c7 100%);
    }
    .ant-form-item-label {
      width: 20%;
      text-align: left;
    }

    .ant-select {
      width: 100%;
    }
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      height: 4rem;
      display: flex;
      align-items: center;
      border-radius: 4px;
    }

    input.ant-input {
      border: none;
      border-bottom: 1px solid black;
    }
  }
  form {
    width: 80%;
    margin: auto;
    .error_message {
      color: red;
      margin-top: 1rem;
    }
    .locale {
      margin-bottom: 2.4rem;
      display: flex;
      p {
        width: 25%;
      }
    }
  }
  .row {
    display: flex;
    gap: 6rem;
  }
  .field-item {
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    border-radius: 5px;
    input {
      &:active,
      &:focus {
        outline: none;
      }
    }
    .fieldLabel {
      text-transform: uppercase;
      margin: 2rem 0;
      display: inline-block;
      background: red;
      padding: 5px 1rem;
      border-radius: 5px;
      box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
      color: white;
      background-color: #0093e9;
      background-image: linear-gradient(18deg, #0093e9 0%, #80d0c7 100%);
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
