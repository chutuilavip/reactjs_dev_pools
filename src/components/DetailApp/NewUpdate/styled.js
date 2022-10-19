import styled from "styled-components";

const WrapNewUpdate = styled.div`
  margin-top: 60px;
  .title {
    font-weight: 700;
    font-size: 34px;
    color: #ffffff;
    padding-bottom: 30px;
  }
`;

const ItemSlide = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #ffffff;
    max-width: 447px;
  }
`;
export { ItemSlide, WrapNewUpdate };
