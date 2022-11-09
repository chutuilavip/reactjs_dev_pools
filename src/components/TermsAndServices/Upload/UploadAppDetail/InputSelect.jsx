import { Select } from "antd";
import React from "react";
import styled from "styled-components";
const { Option } = Select;

const InputSelect = ({ title, ArrOption, valueDefault, register, field }) => {
  console.log(ArrOption);
  return (
    <StyleInputSelect>
      <p>{title}</p>
      <Select
        {...register}
        {...field}
        className="item_select"
        defaultValue={valueDefault}
      >
        {ArrOption.map((item, index) => {
          return (
            <Option key={index} value={item.code || item.id}>
              {item.title || item.language}
            </Option>
          );
        })}
      </Select>
    </StyleInputSelect>
  );
};

export default InputSelect;

const StyleInputSelect = styled.div`
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
  .ant-select {
    flex: 1;
    color: white;
    height: 60px;
  }
  .item_select .ant-select-selector {
    height: 60px !important;
    .ant-select-selection-item {
      line-height: 60px;
    }
  }
  .ant-select-selector {
    border: none !important;
  }
`;
