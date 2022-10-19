import styled from "styled-components";

const WrapHeader = styled.div`
  width: 100%;
  position: relative;
  background-color: #181818;
  color: white;
  .line {
    height: 50px;
    width: 3px;
    background-color: white;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  .avt_game {
    width: 110px;
    height: 110px;
    img {
      width: 110px;
      height: 110px;
    }
  }
`;

const InfoGame = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .type {
    font-weight: 700;
    font-size: 24px;
    color: #e6c522;
  }
  .available {
    font-weight: 700;
    font-size: 16px;
    color: #bdbdbd;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  svg {
    font-size: 20px;
  }
`;

const RateGame = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export { WrapHeader, InfoGame, HeaderBottom, HeaderTop, RateGame };
