import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PrivateRouter, publicRoutes } from "../src/routes";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { checkLogin, checkWalletAccount } from "./redux/slice/user.slice";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./layout/index";
import Redirect from "./components/Redirect/Redirect";
import ProviderRouter from "./ProviderRouter";
import { getAccount, getAccountMetaMask } from "./redux/slice/web3.slice";
// Toast
import { ToastContainer } from "react-toastify";
import TermsAndServices from "./pages/TermsAndServices/TermsAndServices";
import { getLanguagesTranslations } from "./redux/slice/app.slice";

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

  const accountChangeHandler = (account) => {
    dispatch(getAccountMetaMask(account));
  };

  useEffect(() => {
    const handleConnectWallet = async () => {
      accountChangeHandler(await getAccount());
    };
    handleConnectWallet();
  }, []);

  const token = JSON.parse(localStorage.getItem("tokens"));
  // Get data user when login
  useEffect(() => {
    const getAccountFromLocal = () => {
      if (token) {
        dispatch(checkLogin(token));
      }
    };
    getAccountFromLocal();
  }, []);

  //Check connect wallet with account
  useEffect(() => {
    if (token) {
      dispatch(checkWalletAccount({ address: account, add: 1 }));
    }
    dispatch(getLanguagesTranslations());
  }, [account, token]);

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
            <Route index element={<Navigate to="/terms-and-services" />} />
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
            <Route
              path="/nft-market"
              element={<Redirect url="https://snailhouse.io/" />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
