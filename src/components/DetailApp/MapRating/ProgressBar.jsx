import { Progress } from "antd";
import React from "react";
import styled from "styled-components";

const ProgressBar = ({ data }) => {
  const { percent, star } = data;
  return (
    <WrapProgress>
      <span className="star">
        <span> {star}</span> <span>stars</span>
      </span>
      <Progress percent={percent} showInfo={false} />
    </WrapProgress>
  );
};

export default ProgressBar;

const WrapProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 75px;
  .ant-progress-status-success .ant-progress-bg {
    background-color: #3b72fe;
  }
  .star {
    display: flex;
    gap: 10px;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.0015em;
    color: #ffffff;
  }
`;
