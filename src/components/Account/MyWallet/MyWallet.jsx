import { Button } from "antd";
import React, { useEffect } from "react";
import { MyWalletMain } from "./styled";
import Wallet1 from "../../../assets/Account/wallet1.png";
import Metamask from "../../../assets/Account/metamask.png";

import { useTranslation } from "react-i18next";

const MyWallet = ({ res }) => {
  console.log(res);
  const { t } = useTranslation();

  return (
    <MyWalletMain>
      <div className="title_wallet">{t("account.my_wallet")}</div>
      <div className="your_wallet_text">{t("account.your_wallet_address")}</div>
      <div className="button_connect">
        {/* <Button type="primary">
          <div className="_img">
            <img src={Wallet1} alt="wallet1" />
          </div>
          <div className="_money">
            <p>Adam kun</p>
            <p>$1000</p>
          </div>
        </Button> */}
        {res.data.dev_info?.map((item, index) => {
          return (
            <Button style={{ width: "auto" }} key={index} type="primary">
              <div className="_img">
                <img src={Metamask} alt="wallet1" />
              </div>
              <div className="_money">
                <p>{item.creator_address.slice(0, 7)}...</p>
                <p style={{ margin: "0 30px" }}>
                  Total USD: {item.total_usd ? item.total_usd : "$0"}
                </p>
                <p>Total Pools: {item.total_pools ? item.total_pools : "$0"}</p>
              </div>
            </Button>
          );
        })}
      </div>
      <Button className="connect_more">
        {t("account.connect_more_wallet")}
      </Button>
    </MyWalletMain>
  );
};

export default MyWallet;
