import styled from 'styled-components';

const WrapVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  gap: 30px;
`;

const VideoSlide = styled.div`
  max-width: 100%;
  .mySwiper {
    .swiper-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  }
`;

export { WrapVideo, VideoSlide };
