import styled from "styled-components";

export const BgContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #131313;
  .login_form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 55px;
    .btn_form {
      border: none;
      background-color: #3b72fe;
      height: 54px;
      width: 100%;
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.0025em;
      color: #ffffff;
      cursor: pointer;
      :hover {
        border-color: #40a9ff;
        background: #40a9ff;
        transition: all 0.3s;
      }
    }
    .social_login {
      display: flex;
      flex-direction: column;
      gap: 14px;
      justify-content: center;
      align-items: center;
      p,
      span {
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 0.0025em;
        color: #ffffff;
      }
      .social {
        color: white;
        display: flex;
        gap: 7px;
        cursor: pointer;
      }
      .register_link {
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0.0025em;
        span {
          color: #ffffff;
        }
      }
    }
  }
`;

export const TitleForm = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.0025em;
  color: #ffffff;
`;

export const ListInput = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  font-weight: 400;
  font-size: 16px;
  .input_form {
    background-color: #212121;
    padding: 17px 50px;
    width: 100%;
    color: #ffffff;
  }
  .option_form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    label {
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0.0025em;
      color: #ffffff;
      margin-left: 5px;
    }
    .forgot_pass {
      font-weight: 400;
      font-size: 12px;
      letter-spacing: 0.0025em;
      color: #3b72fe;
    }
  }
`;
