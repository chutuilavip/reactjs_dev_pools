import styled from 'styled-components';

export const EditAppViewWrapper = styled.div`
  &&& {
    .ant-select:not(.ant-select-customize-input) .ant-select-selector,
    .ant-input {
      min-height: 5rem;
      display: flex;
      align-items: center;
      border-radius: 5px;
      color: black;
      box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
      outline: none;
      border: none;
    }
    .ant-select-multiple .ant-select-selection-item {
      background-color: transparent;
      border: none;
      clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);
      height: 3rem;
      display: flex;
      align-items: center;
      padding: 0 2rem;
      background: 9ADCFF;
      color: black;
      background: white;
    }
    .ant-image {
    }
  }
  padding: 5rem;
  .container {
    background: white;
    padding: 2rem 5rem;
    border-radius: 25px;
    box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;
  }

  .error_message {
    padding: 0 1rem;
    color: red;
  }
  .row {
    display: flex;
    justify-content: space-between;
    gap: 5rem;
  }
  .free-price {
    border-radius: 5px;
    margin-bottom: 2rem;
  }
  .field-item {
    transition: all 0.5s;
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
    border-radius: 10px;
    flex-direction: column;
    .field {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      margin: 2rem 0;
      position: relative;
      border: 1px solid;
      padding: 2rem;
      border-radius: 9px;
      textarea {
        height: auto !important;
      }
      .fieldLabel {
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        width: 90%;
        padding: 1rem 6rem;
        border-radius: 7px;
        border: navajowhite;
        box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
        margin-bottom: 1rem;
      }
      .input,
      .ant-input {
        flex: 1;
        margin: 2rem 0rem 0rem 0rem;
      }
    }
  }
  .btn_submit {
    width: 100%;
    margin: auto;
    margin-bottom: 2rem;
    position: sticky;
    bottom: 10px;
    height: 5rem;
    border-radius: 9px;
    border: none;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
