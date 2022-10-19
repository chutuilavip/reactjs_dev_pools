import React from "react";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import { WrapProfit } from "./styled";
import WrapProfitUser from "../../components/ProfitUser/WrapProfitUser";

const ProfitUser = () => {
  return (
    <motion.main variants={variants} initial="hidden" animate="visible" exit="hidden">
      <WrapProfit>
        <WrapProfitUser />
      </WrapProfit>
    </motion.main>
  );
};

export default ProfitUser;
