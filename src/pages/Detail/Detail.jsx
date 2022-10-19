import React, { useEffect } from "react";
import HeaderDetail from "../../components/DetailApp/HeaderDetail/HeaderDetail";
import VideoGame from "../../components/DetailApp/VideoGame/VideoGame";
import Achievement from "../../components/DetailApp/Achievement/Achievement";
import NewUpdate from "../../components/DetailApp/NewUpdate/NewUpdate";
import PurchaseGame from "../../components/DetailApp/PurchaseGame/PurchaseGame";
import { WrapPageDetail, PurchaseAndInstall } from "./styled";
import Infomation from "../../components/DetailApp/Information/Infomation";
import MapRating from "../../components/DetailApp/MapRating/MapRating";
import Review from "../../components/DetailApp/Reviews/Review";
import WriteReview from "../../components/DetailApp/WriteReview/WriteReview";
import Specifications from "../../components/DetailApp/Specifications/Specifications";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import ListGameLike from "../../components/DetailApp/ListGameLike/ListGameLike";
import { useDispatch, useSelector } from "react-redux";
import { getDetailApp } from "../../redux/slice/detailApp.slice";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../../layout/components/Loading/Loading";

const Detail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { isLoading, detailApp } = useSelector((state) => state.detailApp);
  const location = useLocation();

  useEffect(() => {
    dispatch(getDetailApp(slug));
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <WrapPageDetail>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <HeaderDetail infoApp={detailApp?.data} />
            <VideoGame infoApp={detailApp?.data} />
            <PurchaseAndInstall>
              <PurchaseGame infoApp={detailApp?.data} />
              <Achievement />
            </PurchaseAndInstall>
            <NewUpdate />
            <Infomation infoApp={detailApp?.data} />
            <MapRating infoApp={detailApp?.data} />
            <Review infoApp={detailApp?.data} />
            <WriteReview />
            <Specifications />
            <ListGameLike data={detailApp.data.trendings} />
          </>
        )}
      </WrapPageDetail>
    </motion.main>
  );
};
export default Detail;
