import styled from "styled-components";

const BoxGame = styled.div`
  width: 586px;
  height: 654px;
  background: #212121;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 58px 43px;
  gap: 75px;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .base_game {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name {
        font-weight: 700;
        font-size: 32px;
        letter-spacing: 0.0025em;
        color: #06c270;
      }
      .price {
        font-weight: 700;
        font-size: 32px;
        letter-spacing: 0.0025em;
        color: #ffffff;
      }
    }
    .title_game {
      width: 100%;
      .text_one {
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.0025em;
        color: #ffffff;
      }
      .text_two {
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 0.0025em;
        color: #bdbdbd;
      }
    }
  }

  .btn_purchase {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 500px;
    height: 80px;
    background: #3b72fe;
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
`;
export { BoxGame };
