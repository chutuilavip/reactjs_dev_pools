import React from "react";
import { MyActivities, TitleActivities, ItemsActivities } from "./styled";
import Data from "../../../assets/Account/imgbg.png";
import { useTranslation } from "react-i18next";
import { URL_API } from "../../../constants/constants";

const DownloadApp = ({ res }) => {
  const { t } = useTranslation();

  return (
    <>
      <TitleActivities>{t("account.downloaded_app")}</TitleActivities>
      <MyActivities>
        {res.data.downloaded?.map((item, index) => {
          return (
            <ItemsActivities key={index}>
              <div className="_items bg_dark">
                <img
                  src={`${URL_API}/${item.cover}`}
                  className="_img_activities"
                  alt="game"
                />
                <div className="detail_activities">
                  <div className="grid_item">
                    <div className="_tit_acti title_dark">
                      {t("account.name_of_product")}
                    </div>
                    <div className="_show_acti _show_dark">{item.title}</div>
                  </div>
                  <div className="grid_item">
                    <div className="_tit_acti title_dark">
                      {" "}
                      {t("account.type")}{" "}
                    </div>
                    <div className="_show_acti _show_dark">
                      {item.type ? item.type : "Game"}
                    </div>
                  </div>
                  <div className="grid_item">
                    <div className="_tit_acti title_dark">
                      {t("account.status")}{" "}
                    </div>
                    <div className="_show_acti _show_dark">Success</div>
                  </div>
                  <div className="grid_item">
                    <div className="_tit_acti title_dark">
                      {t("account.date")}{" "}
                    </div>
                    <div className="_show_acti _show_dark">
                      {item.updated_at.slice(0, 10)}
                    </div>
                  </div>
                  <div className="grid_item">
                    <div className="_tit_acti title_dark">
                      {t("account.value")}{" "}
                    </div>
                    <div className="_show_acti _show_dark">
                      {Number(item.price) === 0 ? "Free" : item.price}
                    </div>
                  </div>
                </div>
              </div>
            </ItemsActivities>
          );
        })}
      </MyActivities>
    </>
  );
};

export default DownloadApp;
