import React from "react";
import SlideLibrary from "../../components/Library/SlideLibrary";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import { WrapLib } from "./styled";
const Library = () => {
  return (
    <motion.main variants={variants} initial="hidden" animate="visible" exit="hidden">
      <WrapLib>
        <SlideLibrary />
      </WrapLib>
    </motion.main>
  );
};

export default Library;
