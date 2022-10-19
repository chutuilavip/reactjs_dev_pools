import React, { useEffect } from "react";
import BannerGame from "../../components/NFTGame/BannerGame";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import { NftGameComp } from "./styled";
import BuyNftGame from "../../components/NFTGame/BuyNftGame";
import SlideReview from "../../components/SlideReview/SlideReview";
import SlideRacing from "../../components/SlideRacing/SlideRacing";
import { useDispatch, useSelector } from "react-redux";
import { getListGameFollowType } from "../../redux/slice/game.slice";
import Loading from "../../layout/components/Loading/Loading";

const NFTGame = () => {
  const dispatch = useDispatch();
  const { listGameType, isLoading } = useSelector((state) => state.listGame);

  useEffect(() => {
    dispatch(getListGameFollowType("nft"));
  }, []);

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <NftGameComp>
          <BannerGame />
          <BuyNftGame />
          <SlideReview title="Trending" data={listGameType?.slice(0, 6)} />
          <SlideRacing title="Racing" />
          <SlideReview data={listGameType?.slice(0, 6)} title="Viewer" />
        </NftGameComp>
      )}
    </motion.main>
  );
};

export default NFTGame;
