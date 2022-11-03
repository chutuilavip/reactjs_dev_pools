import styled from "styled-components";

const ButtonGroupWrapper = styled.div`
  margin-top: 7rem;
  width: 100%;
  .btn-submit {
    background-color: #3b72fe;
    color: white;
  }
  .btn-antd {
    height: 58%;
    border: none;
    font-size: 3.2rem;
  }
  .disabled {
    cursor: not-allowed;
  }
`;

export { ButtonGroupWrapper };
