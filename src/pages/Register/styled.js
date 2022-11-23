import styled from 'styled-components';

const WrapRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background-color: #131313;
  margin-top: 7rem;
  .title_form {
    margin-top: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .validateMessage {
    color: red;
    font-size: 2rem;
  }
  .switch_register_type {
    margin-bottom: 2rem;
    label {
      user-select: none;
      cursor: pointer;
      color: white;
      margin-left: 1rem;
    }
  }
`;

const FormRegis = styled.form`
  width: 100%;
  height: ${(props) => props.height || '43%'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 10rem;
`;

const StepOne = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  opacity: ${({ status }) => (status ? 1 : 0)};
  z-index: ${({ status }) => (status ? 99 : -99)};
  .btn_form {
    background-color: #3b72fe;
    padding: 14px 0;
    width: 100%;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.0025em;
    color: #ffffff;
    cursor: pointer;
    height: 5rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .input_form_last {
    width: 100%;
    background-color: #212121;
    padding: 1.5rem;
    color: #ffffff;
  }
  .field_item {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

const ListInput = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-weight: 400;
  font-size: 16px;
  input {
    background-color: #212121;
    padding: 17px 50px;
    width: 100%;
    color: #ffffff;
  }
`;

// Step two

const StepTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: absolute;
  opacity: ${({ status }) => (!status ? 1 : 0)};
  z-index: ${({ status }) => (!status ? 99 : -99)};
`;

const ListApp = styled.div`
  background-color: #1c212f;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 536px;
  height: auto;
  padding: 20px;
  gap: 20px;
  .list_app_footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-top: 2rem;
    span {
      font-weight: 400;
      font-size: 11px;
      letter-spacing: 0.0025em;
      color: #3b72fe;
    }
    p {
      font-size: 11px;
      color: #ffffff;
    }
  }
  .step_two_header {
    h3 {
      font-weight: 700;
      font-size: 32px;
      letter-spacing: 0.0025em;
      color: #ffffff;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.0025em;
      color: #9e9e9e;
    }
  }
  .apps {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 85%;
    margin: 0 auto;
    .bg_app {
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 90px;
    }
    .list_app_footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      margin-top: 2rem;
      span {
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 0.0025em;
        color: #3b72fe;
      }
      p {
        font-size: 11px;
        color: #ffffff;
      }
    }
  }
`;

const FormMeta = styled.div`
  background-color: #1c212f;
  padding: 20px;
  max-width: 536px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
  h3 {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.0025em;
    color: #9e9e9e;
  }
  .form_connect {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .input_meta {
      background: #212121;
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      letter-spacing: 0.0025em;
      color: #ffffff;
      padding: 15px;
      width: 100%;
    }
    .input_top {
      display: flex;
      width: 85%;
      gap: 20px;
    }
    .btn_QR {
      background: #212121;
      font-weight: 400;
      font-size: 11px;
      line-height: 130%;
      color: #ffffff;
      padding: 12px 0;
      width: 85%;
      cursor: pointer;
    }
  }

  .btn_connectWallet {
    background: #3b72fe;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.0025em;
    color: #ffffff;
    width: 100%;
    padding: 12px 0;
  }
  .or {
    text-align: center;
    font-weight: 400;
    font-size: 11px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
`;

const ListBtnStep = styled.div`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.0025em;
  color: #9e9e9e;
  display: flex;
  .btn_step {
    width: 229px;
    max-height: 57px;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    background-color: #1c212f;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.0025em;
    color: #9e9e9e;
    cursor: pointer;
    span:last-child {
      font-size: 12px;
    }
  }
  .btn_step_active {
    width: 229px;
    max-height: 57px;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    background-color: #181818;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.0025em;
    color: #ffffff;
    border: 2px solid #3b72fe;
    cursor: pointer;
    span:last-child {
      font-size: 12px;
    }
  }
`;
export { WrapRegister, FormRegis, StepOne, ListInput, ListBtnStep, StepTwo, FormMeta, ListApp };
