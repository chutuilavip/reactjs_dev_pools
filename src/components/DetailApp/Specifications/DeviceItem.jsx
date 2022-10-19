import React from "react";
import styled from "styled-components";

const DeviceItem = ({ data }) => {
  const { img, title, description } = data;
  return (
    <WrapDevice>
      <img src={img} alt={title} />
      <div className="infor">
        <p className="title_device">{title}</p>
        <p className="des">{description}</p>
      </div>
    </WrapDevice>
  );
};

export default DeviceItem;

const WrapDevice = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  .infor {
    .title_device {
      font-weight: 700;
      font-size: 32px;
      letter-spacing: 0.0025em;
      color: #ffffff;
    }
    .des {
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0.0015em;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
