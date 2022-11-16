import styled from 'styled-components';

const UploadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  &&& {
    .btn_submit {
      width: 90%;
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
  .description_group {
    display: flex;
    justify-content: space-between;
    margin-top: 7rem;
    gap: 7rem;
  }
  .row {
    display: flex;
    width: 100%;
    gap: 7rem;
    .last_child {
      width: calc(50% - 3.5rem) !important;
    }
  }
  .description {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 30px;
    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: 0.0025em;
      color: #ffffff;
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
    width: 100%;
  }
`;

const GroupInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-direction: column;
`;

export { UploadInfoWrapper, GroupInput };
