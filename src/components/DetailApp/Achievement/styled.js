import styled from "styled-components";

const WrapAchiev = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  color: white;
  gap: 100px;
  height: 654px;
`;
const WrapAchievTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  .title {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .list_achiev {
    display: flex;
    gap: 70px;
  }
  .see_all {
    display: flex;
    align-items: center;
    p,
    svg {
      font-style: italic;
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 0.0025em;
      color: #bdbdbd;
    }
  }
`;
const WrapSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p {
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .list_social {
    display: flex;
    gap: 70px;
  }
`;

export { WrapAchiev, WrapAchievTop, WrapSocial };
