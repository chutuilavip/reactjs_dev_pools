import styled from "styled-components";

const WrapGameType = styled.div`
  width: 33%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    p {
      font-weight: 700;
      font-size: 32px;
      letter-spacing: 0.0025em;
      color: #ffffff;
    }
    .see_more {
      width: 81px;
      height: 28px;
      font-weight: 400;
      font-size: 11px;
      letter-spacing: 0.0025em;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      border: 1px solid #ffffff;
    }
  }
  .listgame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
  }
`;
export { WrapGameType };
