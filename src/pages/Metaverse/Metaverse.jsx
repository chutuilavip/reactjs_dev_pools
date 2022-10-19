import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import SlideReview from "../../components/SlideReview/SlideReview";
import SlideRacing from "../../components/SlideRacing/SlideRacing";
import { WrapMetaverse } from "./styled";
import BannerMetaverse from "../../components/BannerMetaverse/BannerMetaverse";
import { useDispatch, useSelector } from "react-redux";
import { getListGameFollowType } from "../../redux/slice/game.slice";

const Metaverse = () => {
   const dispatch = useDispatch();
   const { listGameType } = useSelector((state) => state.listGame);
   useEffect(() => {
      dispatch(getListGameFollowType("metaverse"));
   }, []);
   return (
      <motion.main
         variants={variants}
         initial="hidden"
         animate="visible"
         exit="hidden"
      >
         <WrapMetaverse>
            <BannerMetaverse />
            <SlideReview title="Metaverse" data={listGameType?.slice(0, 6)} />
            <SlideReview title="Trending" data={listGameType?.slice(0, 6)} />
            {/* <SlideRacing title="Racing" data={listGameType}/> */}
            <SlideReview title="Viewed" data={listGameType?.slice(0, 6)} />
         </WrapMetaverse>
      </motion.main>
   );
};

export default Metaverse;
