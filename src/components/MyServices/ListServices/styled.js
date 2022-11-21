import styled from 'styled-components';

export const ListServicesWrapper = styled.div`
  &&& {
    .ant-table table {
      padding: 5rem;
    }
    .ant-table-row {
      transition: all 0.4s;
      &:hover {
        /* transform: scale(1.05); */
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
    .table-row-light {
      background-color: #ffffff;
    }
    .table-row-dark {
      background-color: #f3faff;
    }
  }

  .button {
    transition: all 0.5s;
    color: white;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    text-align: center;
    padding: 1rem 0;
    &:active {
      transform: scale(1.1);
    }
    a {
      background: transparent !important;

      &:active {
      }
    }
  }
  .status_approved {
    background: #2cbc63;
    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);
  }

  .status_pending {
    background: var(--bg-blue);
    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);
  }
  .status_rejected {
    background: red;
    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 10px 100%, 0 50%);
  }
`;
