import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../helpers/motion';
import InfoAvatarUser from '../../components/Account/InfoUser/InfoAvatarUser';
import { Main } from './styled';
import InfoDetailUser from '../../components/Account/InfoUser/InfoDetailUser';
import MyWallet from '../../components/Account/MyWallet/MyWallet';
import MyActivities from '../../components/Account/Activities/MyActivities';
import DownloadApp from '../../components/Account/Activities/DownloadApp';
import TodayActivities from '../../components/Account/Activities/TodayActivities';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '../../redux/slice/account.slice';
import Loading from '../../layout/components/Loading/Loading';
import ListAppCreated from '../../components/Account/ListAppCreated/ListAppCreated';
import { useLocation, useSearchParams } from 'react-router-dom';
import Deposit from '../../components/Account/Deposit/Deposit';

const Account = () => {
  const { infoAccount, isLoading } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const createdAppRef = useRef();

  const params = useLocation();

  useEffect(() => {
    dispatch(getAccount());
  }, []);
  useEffect(() => {
    if (params.hash !== '') {
      const element = document.querySelector(params.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [params, isLoading]);
  console.log(params);
  return (
    <>
      <motion.main variants={variants} initial="hidden" animate="visible" exit="hidden">
        <Main>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <InfoAvatarUser res={infoAccount?.res} />
              <Deposit />

              <InfoDetailUser res={infoAccount?.res} />
              <MyWallet res={infoAccount?.res} />
              {/* <ListAppCreated ref={createdAppRef} /> */}
              {/* <MyActivities res={infoAccount?.res} /> */}
              {/* <DownloadApp res={infoAccount?.res} /> */}
              {/* <TodayActivities res={infoAccount?.res} /> */}
            </>
          )}
        </Main>
      </motion.main>
    </>
  );
};

export default Account;
