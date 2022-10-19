import styled from "styled-components";

const WrapBanner = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const TextContent = styled.div`
  position: absolute;
  left: 122px;
  bottom: 0;
  z-index: 999999999999999999;

  height: 300px;
  display: flex;
  align-items: center;
  padding: 0 100px;
  background: linear-gradient(
    90deg,
    #000000 0%,
    rgba(0, 0, 0, 0.8) 18.54%,
    rgba(0, 0, 0, 0.6) 35.73%,
    rgba(217, 217, 217, 0) 100%
  );
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #ffffff;
    width: 40%;
  }
`;

export { WrapBanner, TextContent };
