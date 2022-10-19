import React from "react";
import { ServiceSlide } from "./styled";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import SlideReview from "../../components/SlideReview/SlideReview";
import SlideRacing from "../../components/SlideRacing/SlideRacing";
import SlideService from "../../components/Service/SlideService";
import SlidePlayToEarn from "../../components/SlidePlayToEarn/SlidePlayToEarn";

const Service = () => {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <ServiceSlide>
        <SlideService />
        <SlidePlayToEarn />
        {/* <SlideReview title="Trending" />
      <SlideRacing title="Racing" />
      <SlideReview title="Viewed" /> */}
      </ServiceSlide>
    </motion.main>
  );
};

export default Service;
