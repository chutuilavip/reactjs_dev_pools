import styled from "styled-components";

export const ListAppCreatedWrapper = styled.div`
  &&& {
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      border: none;
    }
    .ant-pagination {
      color: white;
    }
  }
  .table {
    display: flex;
    flex-direction: column;
  }
  margin-top: 5rem;
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
