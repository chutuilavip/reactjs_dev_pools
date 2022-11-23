import React, { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRouter, publicRoutes } from '../src/routes';
import './App.css';
import Redirect from './components/Redirect/Redirect';
import Layout from './layout/index';
import ProviderRouter from './ProviderRouter';
import { checkLogin, checkWalletAccount } from './redux/slice/user.slice';
import { getAccountMetaMask, getAccountWeb3 } from './redux/slice/web3.slice';
// Toast
import { ToastContainer } from 'react-toastify';
import { getAccount } from './redux/slice/account.slice';
import { getLanguagesTranslations } from './redux/slice/app.slice';
import { getCategoriesAndLanguage } from './redux/slice/detailApp.slice';

const App = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const lang = useSelector((state) => state.user.lang);
  const user = useSelector((state) => state.user.infoUser);
  const { account } = useSelector((state) => state.web3);

  // Handle change language
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    handleChangeLanguage(lang);
  }, [lang]);
  const getDevAccount = () => {
    dispatch(getAccount());
  };
  const accountChangeHandler = (account) => {
    dispatch(getAccountMetaMask(account));
  };
  const getCategoryAndLanguage = () => {
    dispatch(getCategoriesAndLanguage());
  };
  useEffect(() => {
    const handleConnectWallet = async () => {
      accountChangeHandler(await getAccountWeb3());
    };
    handleConnectWallet();
  }, []);
  useEffect(() => {
    getDevAccount();
  }, [localStorage.getItem('tokens')]);
  const token = JSON.parse(localStorage.getItem('tokens'));
  // Get data user when login
  useEffect(() => {
    const getAccountFromLocal = () => {
      if (token) {
        dispatch(checkLogin(token));
      }
    };
    getAccountFromLocal();
    getCategoryAndLanguage();
  }, []);

  //Check connect wallet with account
  useEffect(() => {
    if (token && account !== 'empty') {
      dispatch(checkWalletAccount({ address: account, add: 1 }));
    }
    dispatch(getLanguagesTranslations());
  }, [account, token]);
  console.log('account', account);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Suspense>
          <Routes>
            <Route index element={<Navigate to="/for-publishers/upload" />} />
            <Route element={<Layout />}>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index}>
                    <Route path={route.path} element={<Page />} />
                  </Route>
                );
              })}
              {PrivateRouter.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} element={<ProviderRouter data={user} />}>
                    <Route path={route.path} element={<Page />} />
                  </Route>
                );
              })}
            </Route>
            <Route path="/nft-market" element={<Redirect url="https://snailhouse.io/" />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
