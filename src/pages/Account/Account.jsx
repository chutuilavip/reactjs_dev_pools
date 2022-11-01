import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import InfoAvatarUser from "../../components/Account/InfoUser/InfoAvatarUser";
import { Main } from "./styled";
import InfoDetailUser from "../../components/Account/InfoUser/InfoDetailUser";
import MyWallet from "../../components/Account/MyWallet/MyWallet";
import MyActivities from "../../components/Account/Activities/MyActivities";
import DownloadApp from "../../components/Account/Activities/DownloadApp";
import TodayActivities from "../../components/Account/Activities/TodayActivities";
import { useDispatch, useSelector } from "react-redux";
import { getAccount } from "../../redux/slice/account.slice";
import Loading from "../../layout/components/Loading/Loading";

const Account = () => {
  const { infoAccount, isLoading } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccount());
  }, []);

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Main>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <InfoAvatarUser res={infoAccount?.res} />
              <InfoDetailUser res={infoAccount?.res} />
              <MyWallet res={infoAccount?.res} />
              <MyActivities res={infoAccount?.res} />
              <DownloadApp res={infoAccount?.res} />
              <TodayActivities res={infoAccount?.res} />
            </>
          )}
        </Main>
      </motion.main>
    </>
  );
};

export default Account;
