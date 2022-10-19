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

  console.log(infoAccount);

  useEffect(() => {
    dispatch(getAccount());
  }, []);

  const { res } = infoAccount;

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Main>
          {isLoading === true ? (
            <Loading />
          ) : (
            <>
              <InfoAvatarUser res={res} />
              <InfoDetailUser res={res} />
              <MyWallet res={res} />
              <MyActivities res={res} />
              <DownloadApp res={res} />
              <TodayActivities res={res} />
            </>
          )}
        </Main>
      </motion.main>
    </>
  );
};

export default Account;
