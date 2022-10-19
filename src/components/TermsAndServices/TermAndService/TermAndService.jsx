import React, { useState } from "react";
import { TabPenItem } from "./styled";

const TermAndService = () => {
   const [modal, setModal] = useState(false);
   const toggleModal = () => {
      setModal(!modal);
      // console.log(modal);
   };
   return (
      <TabPenItem>
         <h1 className="title_tab">What is the Pools’s Store ?</h1>
         <span className="description">
            POOLS Store specializes in NFT games, metaverses, and P2E games, and
            provides detailed service information about them to users, and
            provides service information and installation files without any
            restrictions or restrictions. While completely freeing from the
            market dependence on Google and Apple App Stores, we are also
            addressing the complaints and inconveniences of online service
            providers around the world who have been unable to launch normal
            services due to their monopolistic market encroachment, unreasonable
            regulations, policies, and excessive fees, and to provide a complete
            service in a fair competitive environment. In addition, POOLS users
            can quickly select a service by checking detailed information about
            the service, participate directly in reviews, ratings, downloads,
            etc., and enjoy economic rewards and more benefits. POOLS is the
            best online store where service providers and users alike can get
            the results they want, have fun together, and have the joy of
            participating.
         </span>
         <h2 className="title_item">
            Advantages of NPLS from an online service provider's point of view:
         </h2>
         <ul className="list">
            <li className="list_item">
               1. Online service providers around the world can more easily,
               quickly, and freely register service installation and related
               information according to the basic upload principle of NPLS.
            </li>
            <li className="list_item">
               2.By establishing a free compensation policy for service users in
               the POOLS system in advance and providing related services
               according to the standards, you can get many advantages in
               attracting new members.{" "}
            </li>
            <li className="list_item">
               3. You can get the best advertising and marketing effects at the
               lowest cost for service exposure and promotion.
            </li>
         </ul>
         <h2 className="title_item">
            Advantages of NPLS from the perspective of online service users:t
         </h2>
         <ul>
            <li className="list_item">
               1. You can easily browse the different service categories, view
               information about each service (eg reviews or ratings), and
               easily select the one you want.
            </li>
            <li className="list_item">
               2.By establishing a free compensation policy for service users in
               the POOLS system in advance and providing related services
               according to the standards, you can get many advantages in
               attracting new members.{" "}
            </li>
            <li className="list_item">
               3.When you install services, watch advertisements, or share
               service information, you can earn rewards accordingly.
            </li>
            <li className="list_item">
               4. You can quickly check related information on global trends,
               such as new and various NFT games and metaverses.
            </li>
         </ul>
         <h1 className="title_tab">What is POOLS Token ?</h1>
         <span className="description">
            POOLS tokens are used for rewards or settlements in the role of
            Gituk in POOLS, and are POOLS governance tokens that can be cashed
            directly at the exchange designated as the value of goods. Users
            will receive POOLS tokens as a reward according to their
            contribution to various activities (sharing, review, rating) in
            POOLS and the installation and use of services.
         </span>
         <h1 className="title_tab">Purchasing and monetizing POOLS tokens</h1>
         <span className="description">
            You can purchase POOLS tokens at the designated exchange of POOLS,
            and you can cash POOLS tokens at the decentralized exchange
            'Winery'.
         </span>
         <div className="checklist">
            <input
               className="tick_check"
               onClick={toggleModal}
               type="checkbox"
            ></input>
            <span>I agree to Pools’s terms and services</span>
         </div>

         <div>
            <button
               className={`submit ${modal === true ? "active" : "un_active"}`}
            >
               Confirm
            </button>
         </div>
      </TabPenItem>
   );
};

export default TermAndService;
