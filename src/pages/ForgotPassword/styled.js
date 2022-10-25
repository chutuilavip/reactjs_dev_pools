import styled from "styled-components";

export const ForgotPasswordWrapper = styled.div`
  background-color: var(--bg-dark);
  padding-top: 10rem;
  height: 100%;
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
