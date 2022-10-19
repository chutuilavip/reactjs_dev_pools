import styled from "styled-components";
const WrapGameItem = styled.div`
  width: 178px;
  height: 220px;
  box-shadow: -16px 16px 16px 0px rgba(59, 114, 254, 0.25);
  margin-left: 30px;
  position: relative;
`;

const InfoGame = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  height: 55px;
  color: white;
  .title {
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    color: #ffffff;
  }
  .dev_name {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 11px;
    color: #ffffff;
  }
`;

const RateDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;

  svg {
    font-size: 10px;
  }
  .count_download {
    display: flex;
    align-items: center;
    gap: 2px;
    span {
      font-size: 8px;
    }
  }
`;

export { WrapGameItem, InfoGame, RateDown };
