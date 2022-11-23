import React from 'react';
import styled from 'styled-components';

const RegisterHint = () => {
  return (
    <RegisterHintWrapper>
      <p>Password must have</p>
      <p>- In range 8-100 characters </p>
      <p>- At least 1 uppercase letter</p>
      <p>- At least 1 lowercase letter</p>
      <p>- At least 1 special letter in "{'!@#$&*.()%*'}"</p>
      <p>- At least 1 number</p>
    </RegisterHintWrapper>
  );
};

export default RegisterHint;
const RegisterHintWrapper = styled.div`
  width: 100%;
  p {
    color: #878181;
    font-size: 2rem;
    &:first-child {
      color: red;
    }
  }
`;
