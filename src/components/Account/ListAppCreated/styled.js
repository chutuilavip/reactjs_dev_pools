import styled from "styled-components";

export const ListAppCreatedWrapper = styled.div`
  background: var(--bg-dark);
  padding: 1rem;
  h1 {
    color: white;
  }
  &&& {
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      border: none;
    }
    .ant-pagination {
      color: white;
    }
  }
  .button {
    transition: all 0.5s;
    color: white;
    padding: 5px 1rem;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    text-align: center;

    &:active {
      transform: scale(1.1);
    }
  }
  .status_active {
    background: #2cbc63;
    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);
  }

  .status_waiting {
    background: var(--bg-blue);
    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);
  }
  .status_reject {
    background: red;
    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);
  }
  .table {
    display: flex;
    flex-direction: column;
  }
  .pagination {
    background: #1c212f;
    padding: 1rem;
    margin-top: 2rem;
    color: white;
  }
  .feature {
    display: flex;
  }
`;
