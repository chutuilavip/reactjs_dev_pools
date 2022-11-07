import React from "react";
import styled from "styled-components";

const InputText = ({
  title,
  placeho,
  register,
  value,
  className,
  disabled,
  type,
}) => {
  return (
    <StyleInput className={className}>
      <p>{title}</p>
      <input
        disabled={disabled}
        style={{ cursor: disabled ? "not-allowed" : "" }}
        {...register}
        type={type || "text"}
        placeholder={placeho}
        value={value}
      />
    </StyleInput>
  );
};

export default InputText;

const StyleInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0025em;
    color: #ffffff;
    width: 45%;
  }
  input {
    padding: 20px 10px 20px 30px;
    background: #212121;
    height: 60px;
    color: #ffffff;
    flex: 1;
    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.0025em;
      color: #616161;
    }
  }
`;
