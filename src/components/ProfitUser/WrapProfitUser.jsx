import React from "react";
import {
  WrapProfitComp,
  TitleProfit,
  GetProfit,
  CategoryProfit,
  ChoosePlatform,
  Infomation,
  WrapRegister,
  FormRegis,
  ListInput,
  ListApp,
  ListPlatForm,
} from "./styled";
import global from "../../assets/register/global.png";
import K from "../../assets/register/K.png";
import ledger from "../../assets/register/ledger.png";
import maskGroup from "../../assets/register/maskGroup.png";
import mastercard from "../../assets/register/mastercard.png";
import metaMask from "../../assets/register/metaMask.png";
import payPal from "../../assets/register/payPal.png";
import spaces from "../../assets/register/spaces.png";
import Visa from "../../assets/register/Visa.png";
import walletConnect from "../../assets/register/walletConnect.png";
import { Button } from "antd";

const WrapProfitUser = () => {
  const arrWallet = [global, K, ledger, maskGroup, mastercard, metaMask, payPal, spaces, Visa, walletConnect];
  return (
    <WrapProfitComp>
      <TitleProfit>
        <p>benefits</p>
      </TitleProfit>
      <GetProfit>
        <CategoryProfit>
          <p>get profit</p>
        </CategoryProfit>
        <div className="_text">
          POOLS Store specializes in NFT games, metaverses, and P2E games, and provides detailed service information
          about them to users, and provides service information and installation files without any restrictions or
          restrictions. While completely freeing from the market dependence on Google and Apple App Stores, we are also
          addressing the complaints and inconveniences of online service providers around the world who have been unable
          to launch normal services due to their monopolistic market encroachment, unreasonable regulations, policies,
          and excessive fees, and to provide a complete service in a fair competitive environment. In addition, POOLS
          users can quickly select a service by checking detailed information about the service, participate directly in
          reviews, ratings, downloads, etc., and enjoy economic rewards and more benefits. POOLS is the best online
          store where service providers and users alike can get the results they want, have fun together, and have the
          joy of participating.
        </div>
      </GetProfit>
      <ChoosePlatform>
        <CategoryProfit>
          <p>Chose your platform</p>
          <ListPlatForm>
            <ListApp>
              <div className="apps">
                {arrWallet.map((app, index) => {
                  return (
                    <div className="bg_app" key={index}>
                      <img src={app} alt="app" />
                    </div>
                  );
                })}
              </div>
            </ListApp>
          </ListPlatForm>
        </CategoryProfit>
      </ChoosePlatform>

      <Infomation>
        <CategoryProfit>
          <p>your information</p>
        </CategoryProfit>
        <WrapRegister>
          <FormRegis>
            <ListInput>
              <input placeholder="Name *" type="text" />
              <input placeholder="Expiration Date *" type="text" />
            </ListInput>
            <ListInput>
              <input placeholder="Card number *" type="text" />
              <input placeholder="Phone number *" type="text" />
            </ListInput>
            <ListInput>
              <input placeholder="Enter oTTP *" id="_otp_code" />
            </ListInput>

            <Button type="primary">confirm</Button>
          </FormRegis>
        </WrapRegister>
      </Infomation>
    </WrapProfitComp>
  );
};

export default WrapProfitUser;
