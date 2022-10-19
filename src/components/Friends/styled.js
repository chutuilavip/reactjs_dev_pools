import styled from "styled-components";

export const WrapFriend = styled.div`
  padding: 45px 150px;
`;
export const TitleFriend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ._title {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
`;

export const StyleSearch = styled.div`
  position: absolute;
  right: ${({ showSearch }) => (showSearch ? "90px" : "150px")};
  opacity: ${({ showSearch }) => (showSearch ? "1" : "0")};
  pointer-events: ${({ showSearch }) => !showSearch && "none"};
  transition: all 0.25s ease-in-out;

  input {
    background-color: white;
    padding: 10px;
    border-radius: 7px;
    width: 280px;
  }
`;

export const ListItems = styled.div`
  margin: 0 auto;
  ._list_slide {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ItemFr = styled.div`
  width: 240px;
  margin-top: 20px;
  margin-right: 35px;
  margin-bottom: 39px;
  border-radius: 5px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 16px;
  background: #212121;
  ._avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  ._name {
    margin-top: 24px;
    display: flex;
    align-items: center;
    ._name_fr {
      margin-left: 3px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.0025em;
      color: #ffffff;
    }
  }
  .__text {
    margin-top: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.0025em;
    color: #9e9e9e;
  }
  ._action {
    display: flex;
    gap: 50px;
    margin-top: 24px;
  }
`;

export const WrapSetting = styled.div`
  padding: 45px 150px;
  display: flex;
  gap: 35px;
`;

export const SettingNotifications = styled.div`
  width: 813px;
  height: 1045px;
  background: #1d212f;
  ._big_title {
    padding: 64px 24px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
`;

export const Notifications = styled.div`
  width: 586px;
  height: 1045px;
  background: #1d212f;
  backdrop-filter: blur(10px);
  ._small_title {
    padding: 24px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 0.0025em;
    color: #ffffff;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  .ant-tabs-nav-list {
    background: #1e212f;
    .ant-tabs-tab {
      color: white;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 0.0025em;
      color: #ffffff;
    }
  }
`;

export const Category = styled.div`
  ._title_category {
    padding: 15px 24px;
    background-color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.0025em;
    color: #424242;
  }
  ._choose {
    padding: 50px 25px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    ._option_choose {
      display: flex;
      justify-content: space-between;
      .text_option {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 0.0025em;
        color: #fafafa;
      }
    }
  }
`;
