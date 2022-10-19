import React, { useState } from "react";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import Stores from "../../components/Store/BannerStore/BannerStore";
import Categrogy from "../../components/Store/Categrogy/Categrogy";
import ListGameSale from "../../components/Store/ListGameSale/ListGameSale";
import { WrapListType, WrapStore } from "./styled";
import ListTypeGame from "../../components/Store/ListTypeGame/ListTypeGame";

const Store = () => {
  const [status, setStatus] = useState(false);

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <WrapStore>
        <Stores />
        <Categrogy />
        <ListGameSale />
        <WrapListType>
          <ListTypeGame />
          <div className="line"></div>
          <ListTypeGame />
          <div className="line"></div>
          <ListTypeGame />
        </WrapListType>
      </WrapStore>
    </motion.main>
  );
};
export default Store;
