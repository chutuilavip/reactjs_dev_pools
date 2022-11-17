import styled from 'styled-components';

const WrapMenuUser = styled.div`
  &&& {
    .ant-avatar {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 4rem;
    }
  }
  bottom: -1px;
  transform: translateY(100%);
  transition: all 0.25s ease-in-out;
  right: ${({ show }) => (show ? '0px' : '200px')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  pointer-events: ${({ show }) => !show && 'none'};
  background: #212121;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  z-index: 9999;
  position: absolute;
  width: fit-content;
  padding: 20px;
  color: white;
  .avt {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .img_avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .profile {
    .title {
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.0025em;
      color: #ffffff;
      text-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    }
  }
  .logout_regis {
    border-top: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    margin-top: 20px;
    padding-top: 20px;
    cursor: pointer;
    .logout {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
    }
  }
`;

const ContentMenu = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    color: #ffffff;
    margin-top: 2rem;
  }
`;

export { WrapMenuUser, ContentMenu };
