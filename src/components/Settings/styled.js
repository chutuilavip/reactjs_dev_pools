import styled from "styled-components";

const WrapSetting = styled.div`
  height: 85vh;
  position: absolute;
  top: 50%;
  transition: all 0.25s ease-in-out;
  transform: translateY(-50%);
  right: ${({ show }) => (show ? "0px" : "200px")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  pointer-events: ${({ show }) => !show && "none"};
  width: 21%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid #9a9a9a;
`;

const SettingScroll = styled.div`
  height: 42.5%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  scroll-snap-type: both mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
  .setting_item_bg {
    height: 8.55%;
    width: 35%;
    background-color: #3b72fe;
    position: absolute;
    top: 50%;
    right: 47.5%;
    transform: translate(-50%, -50%);
  }
  .setting_item_hidden {
    height: 40%;
  }
  .setting_item {
    height: 20%;
    width: 100%;
    a {
      display: flex;
      align-items: center;
    }
    &:hover {
      background-color: #3b72fe;
      transition: all 0.2s ease-in;
    }
  }
  .setting_item_img {
    width: 35%;
    position: relative;
    margin-right: 10%;
  }
`;

export { WrapSetting, SettingScroll };
