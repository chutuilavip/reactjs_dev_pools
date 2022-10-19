import styled from "styled-components";

const WrapFooter = styled.div`
  margin: 0 -122px;
  background-color: #1c212f;
  padding: 90px 160px 50px 160px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;

  .footer_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .content_one {
      max-width: 300px;
    }
  }
  .footer_bot {
    ul {
      display: flex;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      justify-content: space-between;
    }
  }
`;
const ListLanguage = styled.div`
  width: 150px;
  position: relative;
  .list_lang {
    width: 150px;
    position: absolute;
    bottom: 100%;
    left: 0;
    background-color: white;
    color: black;
    opacity: ${({ status }) => (status ? "1" : "0")};
    transition: all 0.25s ease-in;
    pointer-events: ${({ status }) => (status ? "unset" : "none")};
  }
  .value_lang {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    color: black;
    padding: 0 2px;
    pointer-events: ${({ status }) => status && "none"};
    svg {
      cursor: pointer;
    }
    .flag_name {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }
  .item_flag {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border-bottom: 1px solid black;
  }
`;
export { WrapFooter, ListLanguage };
