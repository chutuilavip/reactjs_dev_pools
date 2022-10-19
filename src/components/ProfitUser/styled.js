import styled from "styled-components";

export const WrapProfitComp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

export const TitleProfit = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 0.0025em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export const GetProfit = styled.div`
  ._text {
    margin-top: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
`;

export const CategoryProfit = styled.div`
  width: 100%;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export const ChoosePlatform = styled.div``;

export const Infomation = styled.div``;

export const WrapRegister = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
`;

export const FormRegis = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  Button {
    width: 286px;
    margin-top: 100px;
    height: 70px;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    letter-spacing: 0.0025em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export const ListInput = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-weight: 400;
  font-size: 16px;
  input {
    background-color: #212121;
    padding: 17px 50px;
    height: 70px;
    width: 50%;
    color: #ffffff;
  }
  #_otp_code {
    width: 100%;
  }
`;

export const ListPlatForm = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;

export const ListApp = styled.div`
  width: 80%;
  display: flex;
  .apps {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    .bg_app {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;
      background-color: white;
      img {
        width: 70px;
      }
    }
  }
`;
