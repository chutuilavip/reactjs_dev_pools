import React from "react";
import { WrapContent } from "./styled";
import { Select, Checkbox } from "antd";

const Interface = () => {
  const { Option } = Select;

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <WrapContent>
      <div className="category_title">Select the languages you want</div>
      <Select
        labelInValue
        defaultValue={{
          value: "toTop",
        }}
        style={{
          width: 180,
          marginBottom: 30,
        }}
      >
        <Option value="toTop">Alphabetical A-Z</Option>
        <Option value="toLow">Alphabetical Z-A</Option>
      </Select>
      <div className="category_title">Select the languages you want</div>
      <Select
        labelInValue
        defaultValue={{
          value: "toTop",
        }}
        style={{
          width: 180,
          marginBottom: 30,
        }}
      >
        <Option value="toTop">Alphabetical A-Z</Option>
        <Option value="toLow">Alphabetical Z-A</Option>
      </Select>
      <div className="category_title">Select the skin you wish Pool store to use</div>
      <Select
        labelInValue
        defaultValue={{
          value: "toTop",
        }}
        style={{
          width: 180,
          marginBottom: 30,
        }}
      >
        <Option value="toTop">Alphabetical A-Z</Option>
        <Option value="toLow">Alphabetical Z-A</Option>
      </Select>
      <div className="category_title">
        <Checkbox onChange={onChange}>
          <p>Scale texts and icons to match monitor settings</p>
        </Checkbox>
      </div>
      <div className="category_title">
        <Checkbox onChange={onChange}>
          <p>Run Pool store when my computer starts</p>
        </Checkbox>
      </div>
      <div className="category_title">
        <Checkbox onChange={onChange}>
          <p>Enable GPU accelerated rendering in web views</p>
        </Checkbox>
      </div>
      <div className="category_title">
        <Checkbox onChange={onChange}>
          <p>Enable smooth scrolling in web views</p>
        </Checkbox>
      </div>
      <div className="category_title">
        <Checkbox onChange={onChange}>
          <p>Enable hardware video decoding, if supported</p>
        </Checkbox>
      </div>
      <div className="category_title">
        <Checkbox onChange={onChange}>
          <p>Notify me about additions or changes to my game, new releases and up coming releases.</p>
        </Checkbox>
      </div>
    </WrapContent>
  );
};

export default Interface;
