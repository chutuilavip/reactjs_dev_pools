import React from "react";
import { WrapSetting, SettingNotifications, Notifications, Category } from "./styled";
import { Switch } from "antd";

const SettingNotification = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <SettingNotifications>
      <div className="_big_title">Setting Notifications</div>
      <Category>
        <div className="_title_category">Friend</div>
        <div className="_choose">
          <div className="_option_choose">
            <div className="text_option">When a friend joins a game</div>
            <div className="choose_option">
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
          <div className="_option_choose">
            <div className="text_option">When a friend comes online</div>
            <div className="choose_option">
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
          <div className="_option_choose">
            <div className="text_option">When a friend invites to play</div>
            <div className="choose_option">
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
          <div className="_option_choose">
            <div className="text_option">Group events and anncouncements</div>
            <div className="choose_option">
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
          <div className="_option_choose">
            <div className="text_option">When a stranger send a friend requests</div>
            <div className="choose_option">
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
        </div>
      </Category>
      <Category>
        <div className="_title_category">Payment History</div>
        <div className="_choose">
          <div className="_option_choose">
            <div className="text_option">Notify when you have paid successfully.</div>
            <div className="choose_option">
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
          <div className="_option_choose">
            <div className="text_option">Notify when Pool Store has a new game</div>
            <div className="choose_option">
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
          <div className="_option_choose">
            <div className="text_option">Notify when Pool Store has a new discount game</div>
            <div className="choose_option">
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
        </div>
      </Category>
    </SettingNotifications>
  );
};

export default SettingNotification;
