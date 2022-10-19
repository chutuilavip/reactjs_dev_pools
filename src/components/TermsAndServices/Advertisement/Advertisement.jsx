import React, { useEffect } from "react";
import { useState } from "react";
import { HeroAdvertisement, ContainerPublishers } from "./styled";
import ReCAPTCHA from "react-google-recaptcha";
import { Tabs } from "antd";
import { Select } from "antd";

const Advertisement = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  const [status_btnNext, setStatusBtnNext] = useState(false);
  const [value, setCaptchaValue] = useState("");

  function onChange(value) {
    setCaptchaValue(value);
    if (value !== "") {
      setStatusBtnNext(!status_btnNext);
      console.log(!status_btnNext);
    } else {
      console.log("error");
    }
  }

  const { Option } = Select;

  return (
    <HeroAdvertisement>
      <ContainerPublishers>
        <div className="button_slide">
          <Tabs>
            <Tabs.TabPane tab="1 contract" key="tab3">
              <h2 className="title_advertisement">
                Do you want to advertise your product?
              </h2>
              <span className="description_advertisement">
                POOLS Store specializes in NFT games, metaverses, and P2E games,
                and provides detailed service information about them to users,
                and provides service information and installation files without
                any restrictions or restrictions. While completely freeing from
                the market dependence on Google and Apple App Stores, we are
                also addressing the complaints and inconveniences of online
                service providers around the world who have been unable to
                launch normal services due to their monopolistic market
                encroachment, unreasonable regulations, policies, and excessive
                fees, and to provide a complete service in a fair competitive
                environment. In addition, POOLS users can quickly select a
                service by checking detailed information about the service,
                participate directly in reviews, ratings, downloads, etc., and
                enjoy economic rewards and more benefits. POOLS is the best
                online store where service providers and users alike can get the
                results they want, have fun together, and have the joy of
                participating.
              </span>
              <h2 className="title_advertisement">
                ADVERTISING METHODS, MEDIUM
              </h2>

              <span className="description_advertisement">
                POOLS Store specializes in NFT games, metaverses, and P2E games,
                and provides detailed service information about them to users,
                and provides service information and installation files without
                any restrictions or restrictions. While completely freeing from
                the market dependence on Google and Apple App Stores, we are
                also addressing the complaints and inconveniences of online
                service providers around the world who have been unable to
                launch normal services due to their monopolistic market
                encroachment, unreasonable regulations, policies, and excessive
                fees, and to provide a complete service in a fair competitive
                environment. In addition, POOLS users can quickly select a
                service by checking detailed information about the service,
                participate directly in reviews, ratings, downloads, etc., and
                enjoy economic rewards and more benefits. POOLS is the best
                online store where service providers and users alike can get the
                results they want, have fun together, and have the joy of
                participating.
              </span>

              <h2 className="title_advertisement">
                RIGHTS AND OBLIGATIONS OF POOLS
              </h2>

              <span className="description_advertisement">
                POOLS Store specializes in NFT games, metaverses, and P2E games,
                and provides detailed service information about them to users,
                and provides service information and installation files without
                any restrictions or restrictions. While completely freeing from
                the market dependence on Google and Apple App Stores, we are
                also addressing the complaints and inconveniences of online
                service providers around the world who have been unable to
                launch normal services due to their monopolistic market
                encroachment, unreasonable regulations, policies, and excessive
                fees, and to provide a complete service in a fair competitive
                environment. In addition, POOLS users can quickly select a
                service by checking detailed information about the service,
                participate directly in reviews, ratings, downloads, etc., and
                enjoy economic rewards and more benefits. POOLS is the best
                online store where service providers and users alike can get the
                results they want, have fun together, and have the joy of
                participating.
              </span>

              <h2 className="title_advertisement">
                RIGHTS AND OBLIGATIONS OF CUSTOMERS
              </h2>

              <span className="description_advertisement">
                POOLS Store specializes in NFT games, metaverses, and P2E games,
                and provides detailed service information about them to users,
                and provides service information and installation files without
                any restrictions or restrictions. While completely freeing from
                the market dependence on Google and Apple App Stores, we are
                also addressing the complaints and inconveniences of online
                service providers around the world who have been unable to
                launch normal services due to their monopolistic market
                encroachment, unreasonable regulations, policies, and excessive
                fees, and to provide a complete service in a fair competitive
                environment. In addition, POOLS users can quickly select a
                service by checking detailed information about the service,
                participate directly in reviews, ratings, downloads, etc., and
                enjoy economic rewards and more benefits. POOLS is the best
                online store where service providers and users alike can get the
                results they want, have fun together, and have the joy of
                participating.
              </span>

              <h2 className="title_advertisement">DISPUTE RESOLUTION</h2>

              <span className="description_advertisement_item">
                Advantages of NPLS from an online service provider's point of
                view:
              </span>

              <ul className="list_advertisement">
                <li className="list_advertisement_item">
                  1. Online service providers around the world can more easily,
                  quickly, and freely register service installation and related
                  information according to the basic upload principle of NPLS.
                </li>
                <li className="list_advertisement_item">
                  2.By establishing a free compensation policy for service users
                  in the POOLS system in advance and providing related services
                  according to the standards, you can get many advantages in
                  attracting new members.{" "}
                </li>
                <li className="list_advertisement_item">
                  3. You can get the best advertising and marketing effects at
                  the lowest cost for service exposure and promotion.
                </li>
              </ul>

              <span className="description_advertisement_item">
                Advantages of NPLS from the perspective of online service
                users:t
              </span>

              <ul className="list_advertisement">
                <li className="list_advertisement_item">
                  1. You can easily browse the different service categories,
                  view information about each service (eg reviews or ratings),
                  and easily select the one you want.
                </li>
                <li className="list_advertisement_item">
                  2.By establishing a free compensation policy for service users
                  in the POOLS system in advance and providing related services
                  according to the standards, you can get many advantages in
                  attracting new members.{" "}
                </li>
                <li className="list_advertisement_item">
                  3.When you install services, watch advertisements, or share
                  service information, you can earn rewards accordingly.
                </li>
                <li className="list_advertisement_item">
                  4. You can quickly check related information on global trends,
                  such as new and various NFT games and metaverses.
                </li>
              </ul>

              <h2 className="title_advertisement">CONTRACT EXECUTION TIME</h2>

              <span className="description_advertisement">
                POOLS tokens are used for rewards or settlements in the role of
                Gituk in POOLS, and are POOLS governance tokens that can be
                cashed directly at the exchange designated as the value of
                goods. Users will receive POOLS tokens as a reward according to
                their contribution to various activities (sharing, review,
                rating) in POOLS and the installation and use of services.
              </span>

              <h2 className="title_advertisement">
                Purchasing and monetizing POOLS tokens
              </h2>

              <span className="description_advertisement">
                You can purchase POOLS tokens at the designated exchange of
                POOLS, and you can cash POOLS tokens at the decentralized
                exchange 'Winery'.
              </span>

              <div className="check_agree">
                <input
                  type="checkbox"
                  className="check_agree_item"
                  onClick={toggleModal}
                ></input>
                <span>I agree to Pools’s terms and services</span>
              </div>

              <div className="capcha_block">
                <div
                  className={`capcha_block_itme ${
                    modal === true ? "active" : "un_active"
                  }`}
                >
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                    render="explicit"
                  />
                </div>
              </div>
              <div className="button_next">
                <button
                  className={`button_next_item ${
                    status_btnNext === true ? "activeCapcha" : "un_activeCapcha"
                  }`}
                >
                  NEXT
                </button>
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane tab="2 target customers" key="tab2">
              <div iv className="target_customers">
                <h2 className="title_custom">target customers</h2>
                <span className="discription_customers">
                  POOLS Store specializes in NFT games, metaverses, and P2E
                  games, and provides detailed service information about them to
                  users, and provides service information and installation files
                  without any restrictions or restrictions. While completely
                  freeing from the market dependence on Google and Apple App
                  Stores, we are also addressing the complaints and
                  inconveniences of online service providers around the world
                  who have been unable to launch normal services due to their
                  monopolistic market encroachment, unreasonable regulations,
                  policies, and excessive fees, and to provide a complete
                  service in a fair competitive environment. In addition, POOLS
                  users can quickly select a service by checking detailed
                  information about the service, participate directly in
                  reviews, ratings, downloads, etc., and enjoy economic rewards
                  and more benefits. POOLS is the best online store where
                  service providers and users alike can get the results they
                  want, have fun together, and have the joy of participating.
                </span>

                <div className="container_colum">
                  <div className="colum_left">
                    <div className="colum_left_item">
                      <div className="title_select">Target Audience</div>
                      <div className="container_select">
                        <Select className="item_select" defaultValue="Age">
                          <Option className="colo_background" value="Age">
                            Age
                          </Option>
                          <Option value="lucy">Khanh Duy</Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                    </div>

                    <div className="colum_left_item">
                      <div className="title_select">Purchases *</div>
                      <div className="container_select">
                        <Select
                          className="item_select"
                          defaultValue="$0 - $1000"
                        >
                          <Option
                            className="colo_background"
                            value="$0 - $1000"
                          >
                            $0 - $1000
                          </Option>
                          <Option value="lucy">Khanh Duy</Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                    </div>
                    <div className="colum_left_item">
                      <div className="title_select">Category *</div>
                      <div className="container_select">
                        <Select
                          className="item_select"
                          defaultValue="-- Action"
                        >
                          <Option className="colo_background" value="-- Action">
                            -- Action
                          </Option>
                          <Option value="lucy">Khanh Duy</Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="colum_right">
                    <div className="colum_right_item">
                      <div className="title_select">advertising *</div>
                      <div className="container_select">
                        <Select
                          className="item_select"
                          defaultValue="Downloads"
                        >
                          <Option className="colo_background" value="Downloads">
                            Downloads
                          </Option>
                          <Option value="lucy">Khanh Duy</Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                    </div>

                    <div className="colum_right_item">
                      <div className="title_select">interests *</div>
                      <div className="container_select">
                        <Select className="item_select" defaultValue="Games">
                          <Option className="colo_background" value="Games">
                            Games
                          </Option>
                          <Option value="lucy">Khanh Duy</Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="button_confirm">
                <button>Confirm</button>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </ContainerPublishers>
    </HeroAdvertisement>
  );
};

export default Advertisement;
