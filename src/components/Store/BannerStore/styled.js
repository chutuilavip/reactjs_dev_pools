import styled from "styled-components";

export const ContainerStore = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;

  height: calc(100vh - 92px);
  flex-direction: column;
  margin: auto;
  position: relative;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: auto;
  width: 95%;

  .title_header {
    color: white;
    font-weight: 700;
    font-size: 48px;
    position: relative;
  }

  .banner {
    display: flex;
    align-items: center;
    .img_banner {
      max-width: 100%;
      width: 70%;
      img {
        width: 100%;
      }
    }
    .game_recommend {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
