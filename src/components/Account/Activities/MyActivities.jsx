import React from "react";
import { MyActivities, TitleActivities, ItemsActivities } from "./styled";
import Data from "../../../assets/Account/imgbg.png";
import { useTranslation } from "react-i18next";

const MyActivity = () => {
   const { t } = useTranslation();

   return (
      <>
         <TitleActivities>{t("account.my_activities")}</TitleActivities>
         <MyActivities>
            <ItemsActivities>
               <div className="_items bg_light">
                  <img src={Data} className="_img_activities" alt="game" />
                  <div className="detail_activities">
                     <div className="grid_item">
                        <div className="_tit_acti">
                           {t("account.name_of_product")}
                        </div>
                        <div className="_show_acti">Elden Ring</div>
                     </div>
                     <div className="grid_item">
                        <div className="_tit_acti"> {t("account.type")} </div>
                        <div className="_show_acti">Game</div>
                     </div>
                     <div className="grid_item">
                        <div className="_tit_acti">{t("account.status")} </div>
                        <div className="_show_acti">Success</div>
                     </div>
                     <div className="grid_item">
                        <div className="_tit_acti">{t("account.date")} </div>
                        <div className="_show_acti">26/04/2022</div>
                     </div>
                     <div className="grid_item">
                        <div className="_tit_acti">{t("account.value")} </div>
                        <div className="_show_acti">60.00 ETHER </div>
                     </div>
                  </div>
               </div>
            </ItemsActivities>
         </MyActivities>
      </>
   );
};

export default MyActivity;
