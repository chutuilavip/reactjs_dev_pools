import styled, { keyframes } from "styled-components";

const spinner = keyframes`
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(180deg);
    }
  `;

const SideLeft = styled.div`
  z-index: 99;
  background-color: ${({ status }) =>
    status ? "rgba(59,114,254,0.1)" : "#1c212f"};
  backdrop-filter: ${({ status }) => (status ? "blur(10px)" : "unset")};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 122px;
  max-width: 122px;
  border-right: 1px solid white;
  .wrap_sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
    border-bottom: 1px solid white;
    width: 100%;
    height: calc(100vh - 9.3rem);
  }
  .navigate_group {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 122px;
    button {
      background-color: #3b72fe;
      width: 100%;
      padding: 1rem 0;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: white;
        font-size: 2.5rem;
      }
    }
    .disabled_btn {
      background-color: inherit;
      cursor: not-allowed;
    }
    .disabled_tab_btn {
      background-color: inherit;
      cursor: not-allowed;
    }

    p {
      background-color: var(--primary);
      border: 1px solid white;
      color: white;
      font-size: 2rem;
      transform: rotate(90deg);
      padding: 4.5rem 3.2rem;
      width: 100%;
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }
  }
`;

const ItemMenu = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  a {
    height: 100%;
    z-index: 10;
    transition: all 0.5s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    .name_menu_item {
      position: absolute;
      left: -150%;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      width: 163px;
      height: 40px;
      padding: 5px 8px;
      background: rgba(59, 114, 254, 0.1);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      transition: all 0.5s ease-in;
      z-index: 9;
    }
    .icon {
      z-index: 999;
      position: relative;
    }
    &:hover {
      .name_menu_item {
        left: 30px;
        transition: all 0.5s ease-in;
      }
    }
  }
`;

const SideRight = styled.div`
  z-index: 99;
  background-color: ${({ status }) =>
    status ? "rgba(59,114,254,0.1)" : "#1c212f"};
  backdrop-filter: ${({ status }) => (status ? "blur(10px)" : "unset")};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 122px;
  max-width: 122px;
  border-left: 1px solid white;
  .active {
    background-color: #3b72fe !important;
  }
  .wrap_sidebar {
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    /* justify-content: space-between; */
    justify-content: center;
    border-bottom: 1px solid white;
    width: 100%;

    .left_bar {
      transform: rotate(90deg);
      color: white;
      height: 150px;
      width: 23rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      line-height: 0.9;
      span {
        text-align: center;
      }
    }
    .icon_category {
      img {
        cursor: pointer;
        transform: ${({ anima }) => (anima ? "rotate(180deg)" : "rotate(0)")};
        transition: all 0.25s ease-in-out;
      }
      &:hover {
        animation: ${spinner} 1s infinite;
      }
    }
  }
`;

// Icon
const ListIconPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  opacity: ${({ status }) => (status ? 1 : 0)};

  .icon_of_page {
    display: flex;
    align-items: center;
    flex-direction: column;
    .title_icon {
      font-weight: 700;
      text-align: center;
      color: #ffffff;
      opacity: 0;
    }
    &:hover {
      img {
        transform: rotate(360deg);
        transition: all 0.75s ease-in-out;
      }
      .title_icon {
        opacity: 1;
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;

export { SideLeft, ItemMenu, SideRight, ListIconPage };
