import styled from 'styled-components';

const WrapAppDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &&& {
    .btn_submit {
      width: 90%;
    }
    .ant-select-selector {
      min-height: 60px !important;
      display: flex;
      align-items: center;
      flex: 1;
    }
    .ant-select-multiple .ant-select-selection-item {
      border: 1px solid white;
    }
    .ant-select-multiple .ant-select-selection-item-content {
      color: white;
    }
  }

  .title {
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    letter-spacing: 0.0025em;
    text-transform: uppercase;
    color: #ffffff;
  }
  .col_input_one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7rem;
    flex-wrap: wrap;
  }
  .row {
    display: flex;
    width: 100%;
    gap: 7rem;
  }
  .description_group {
    display: flex;
    justify-content: space-between;
    margin-top: 7rem;
    gap: 7rem;
  }
  .description {
    width: 90%;
    margin: 0 auto;
    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: 0.0025em;
      color: #ffffff;
      margin-bottom: 2rem;
      text-align: left;
    }
    .textarea {
      width: 100%;
      display: flex;
      flex-direction: column;
      textarea {
        width: 100%;
        padding: 10px;
        color: #616161;
        background: #212121;
        border: none;
        min-height: 120px;
        color: #ffffff;

        ::placeholder {
          font-weight: 400;
          font-size: 20px;
          color: #616161;
        }
      }
      .bottom_des {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p,
        span {
          font-style: italic;
          font-weight: 400;
          font-size: 12px;
          line-height: 130%;
          letter-spacing: 0.0025em;
          color: #ffffff;
        }
      }
    }
    &:nth-child(2) {
    }
  }
  .field_item {
    display: flex;
    flex-direction: column;
    width: 100%;
    p {
      font-weight: 700;
      font-size: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.0025em;
      color: #ffffff;
      width: 45%;
    }
    .free_item {
      display: flex;
      width: 100%;
      gap: 2rem;
      .ant-select {
        flex: 1 !important;
      }
    }
  }
  .fieldItem {
    width: 100%;

    .field {
      width: 100%;
      display: flex;
      gap: 2rem;
    }
    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: 0.0025em;
      color: #ffffff;
      margin-bottom: 2rem;
      width: 45%;
      text-align: left;
    }
  }
`;

const GroupInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-direction: column;
`;

export { WrapAppDetail, GroupInput };
