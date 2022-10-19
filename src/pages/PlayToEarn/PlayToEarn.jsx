import React, { useEffect } from "react";
import { PlaytoearnPage } from "./styled";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import SlideReview from "../../components/SlideReview/SlideReview";
import SlideRacing from "../../components/SlideRacing/SlideRacing";
import SlideService from "../../components/Service/SlideService";
import SlidePlayToEarn from "../../components/SlidePlayToEarn/SlidePlayToEarn";
import { useDispatch, useSelector } from "react-redux";
import { getListGameFollowType } from "../../redux/slice/game.slice";

const PlayToEarn = () => {
   const dispatch = useDispatch();
   const { listGameType } = useSelector((state) => state.listGame);
   useEffect(() => {
      dispatch(getListGameFollowType("play-to-earn"));
   }, []);
   return (
      <motion.main
         variants={variants}
         initial="hidden"
         animate="visible"
         exit="hidden"
      >
         <PlaytoearnPage>
            <SlideService />
            <SlidePlayToEarn />
            <SlideReview title="Trending" data={listGameType?.slice(0, 6)} />
            {/* <SlideRacing title="Racing" /> */}
            <SlideReview title="Viewed" data={listGameType?.slice(0, 6)} />
         </PlaytoearnPage>
      </motion.main>
   );
};

export default PlayToEarn;
