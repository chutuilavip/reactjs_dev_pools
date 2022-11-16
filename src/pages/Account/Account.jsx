import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Deposit from '../../components/Account/Deposit/Deposit';
import InfoAvatarUser from '../../components/Account/InfoUser/InfoAvatarUser';
import InfoDetailUser from '../../components/Account/InfoUser/InfoDetailUser';
import MyWallet from '../../components/Account/MyWallet/MyWallet';
import { variants } from '../../helpers/motion';
import Loading from '../../layout/components/Loading/Loading';
import { getAccount } from '../../redux/slice/account.slice';
import { Main } from './styled';

const Account = () => {
  const { infoAccount, isLoading, statusGetAccount } = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const params = useLocation();

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
          {isLoading || statusGetAccount !== 'success' ? (
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
