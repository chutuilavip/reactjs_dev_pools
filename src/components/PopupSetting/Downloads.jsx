import { Button, Checkbox } from "antd";
import React from "react";
import { WrapContent } from "./styled";

const Downloads = () => {
  return (
    <WrapContent>
      <div className="category_title">Content Library</div>
      <Button className="_button">POOLS Library Folders</Button>
      <div className="_small_text">Manage content locations on multiple drives </div>
      <div className="category_title">Download Restrictions</div>
      <div className="category_title">
        <Checkbox>
          <p>Allow downloads during gameplay</p>
        </Checkbox>
      </div>
      <div className="category_title">
        <Checkbox>
          <p>Throttle downloads while streaming</p>
        </Checkbox>
      </div>
      <div className="category_title">
        <Checkbox>
          <p>Display download rates in bits per second</p>
        </Checkbox>
      </div>
      <Button className="_button">Clear HIstory Download</Button>
    </WrapContent>
  );
};

export default Downloads;
