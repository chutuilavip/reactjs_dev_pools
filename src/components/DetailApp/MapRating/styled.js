import styled from "styled-components";

const WrapRating = styled.div`
  margin-top: 30px;
  border-bottom: 3px solid #484848;
  padding-bottom: 60px;
  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 95px;
  }
  .title_rate {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .line {
    width: 4px;
    height: 200px;
    background-color: #484848;
  }
`;
const RenderStar = styled.div`
  width: 50%;
`;
const WrapCircle = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export { WrapRating, WrapCircle, RenderStar };
