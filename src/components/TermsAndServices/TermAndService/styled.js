import styled from "styled-components";
export const TabPenItem = styled.div`
  .title_tab {
    font-weight: 700;
    font-size: 32px;
    line-height: 41.6px;
    color: #ffffff;
  }
  .title_item {
    font-weight: 700;
    font-size: 24px;
    line-height: 31.2px;
    color: #ffffff;
    margin-top: 3%;
    margin-bottom: 3%;
    max-width: 100%;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .description {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.8px;
  }

  .list_item {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.8px;
    max-width: 100%;
    margin: auto;
    width: 75%;
  }

  .checklist {
    margin-top: 3%;
    .tick_check {
      margin-right: 2%;
    }
  }

  .submit {
    max-width: 100%;
    display: flex;
    width: 15%;
    margin: auto;
    flex-direction: row;
    height: 56px;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    align-content: center;
    margin-bottom: 6%;
    margin-top: 4%;
  }
  .active {
    background-color: blue;
    cursor: pointer;
  }
  .un_active {
    background-color: black;
    cursor: not-allowed;
  }
`;
