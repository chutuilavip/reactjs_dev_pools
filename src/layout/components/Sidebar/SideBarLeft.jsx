import React from "react";
import { icon_left } from "../../IconLayout";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ItemMenu, SideLeft } from "./styled";

const SideBarLeft = (customLayout) => {
   return (
      <SideLeft status={customLayout.data}>
         <div className="wrap_sidebar">
            {icon_left.map((item, index) => {
               return (
                  <ItemMenu key={index}>
                     <NavLink to={item.path}>
                        <span className="name_menu_item">{item.name}</span>
                        <LazyLoadImage
                           className="icon"
                           src={item.icon}
                           alt={item.alt}
                        />
                     </NavLink>
                  </ItemMenu>
               );
            })}
         </div>
      </SideLeft>
   );
};

export default SideBarLeft;
