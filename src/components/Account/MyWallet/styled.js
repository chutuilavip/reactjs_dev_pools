import styled from "styled-components";

export const MyWalletMain = styled.div`
  width: 100%;
  margin-top: 127px;
  .title_wallet {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .your_wallet_text {
    margin-top: 30px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }

  .button_connect {
    margin-top: 23px;
    display: flex;
    gap: 20px;
    Button {
      padding: 0;
      height: 90px;
      width: 330px;
      display: flex;
      align-items: center;
      ._img {
        min-width: 90px;
        min-height: 90px;
        display: flex;
        justify-content: center;
        border-right: 1px solid #141414;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }
      }
      ._money {
        padding: 0 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        p {
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.0025em;
          color: #ffffff;
        }
      }
    }
  }
  .connect_more {
    margin-top: 17px;
    width: 190px;
    height: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.0025em;
    color: #ffffff;
    background-color: #141414;
  }
`;
