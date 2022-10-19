import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import LoginForm from "../../components/Login/LoginForm";
import { useSelector } from "react-redux";
import Loading from "../../layout/components/Loading/Loading";
import { toast } from "react-toastify";

const Login = () => {
  const { isLoading, errors } = useSelector((state) => state.user);
  useEffect(() => {
    if (errors.login !== "") {
      toast.error(errors.login);
    }
  }, [errors.login]);
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {isLoading ? <Loading /> : <LoginForm />}
    </motion.main>
  );
};

export default Login;
