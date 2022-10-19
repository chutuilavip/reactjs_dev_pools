import styled from "styled-components";

const WrapHeader = styled.div`
  z-index: 999;
  background-color: ${({ status }) =>
    status ? "rgba(59,114,254,0.1)" : "#1c212f"};
  backdrop-filter: ${({ status }) => (status ? "blur(10px)" : "unset")};
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid white;
    min-width: 122px;
  }
  .menu {
    border-left: 1px solid white;
    min-width: 122px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    pointer-events: ${({ show }) => show && "none"};
  }
  .icon_search {
    cursor: pointer;
  }
`;

const ListMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  height: 100%;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 8px;
    height: 100%;
    padding: 0 10px;

    p {
      font-weight: 700;
      font-size: 16px;
      color: #ffffff;
    }
  }
`;

const HeaderMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`;

const StyleSearch = styled.div`
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

export { WrapHeader, ListMenu, HeaderMiddle, StyleSearch };
