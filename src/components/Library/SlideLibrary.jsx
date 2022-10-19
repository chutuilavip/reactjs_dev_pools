import React from "react";
import { Select } from "antd";
import { WrapSlideLibrary, TitleLibrary, ListItems } from "./styled";
import Items from "./Items";
import AddItem from "./AddItem";

const { Option } = Select;

const handleChange = (e) => {
  console.log(e);
};

const SlideLibrary = () => {
  return (
    <WrapSlideLibrary>
      <TitleLibrary>
        <div className="_title">Library</div>
        <div className="_select">
          <p>Sort by:</p>
          <Select
            labelInValue
            defaultValue={{
              value: "toTop",
            }}
            style={{
              width: 180,
            }}
            onChange={(e) => handleChange(e)}
          >
            <Option value="toTop">Alphabetical A-Z</Option>
            <Option value="toLow">Alphabetical Z-A</Option>
          </Select>
        </div>
      </TitleLibrary>

      <ListItems>
        {[...Array(7)].map((item, index) => {
          return <Items key={index} />;
        })}

        <AddItem />
      </ListItems>
    </WrapSlideLibrary>
  );
};

export default SlideLibrary;
