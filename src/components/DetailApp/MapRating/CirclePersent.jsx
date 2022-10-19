import React from "react";
import { Progress } from "antd";
import styled from "styled-components";

const CirclePersent = ({ data }) => {
  const { title, per } = data;
  return (
    <WrapCircle>
      <div className="title">{title}</div>
      <Progress type="circle" percent={per} />
    </WrapCircle>
  );
};

export default CirclePersent;

const WrapCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.0015em;
  color: #ffffff;
  gap: 15px;
  .ant-progress-text {
    font-weight: 700;
    font-size: 25.3919px;
    letter-spacing: 0.0015em;
    color: #ffffff;
  }
`;
