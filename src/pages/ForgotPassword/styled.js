import styled from 'styled-components';

export const ForgotPasswordWrapper = styled.div`
  background-color: var(--bg-dark);
  padding-top: 10rem;
  height: 100%;
  min-height: 100vh;
  margin-top: 7rem;
  &&& {
    .ant-row {
      display: block;
    }
    .ant-form-item {
      width: 100%;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin: 0 auto;
    .btn_group {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    input {
      padding: 1rem 2rem;
      width: 100%;
    }
    label {
      color: white;
    }
    p {
      color: red;
    }
  }
`;
