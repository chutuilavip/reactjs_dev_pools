import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../../components/Login/LoginForm';
import { variants } from '../../helpers/motion';
import Loading from '../../layout/components/Loading/Loading';

const Login = () => {
  const { isLoading } = useSelector((state) => state.user);
  return (
    <motion.main variants={variants} initial="hidden" animate="visible" exit="hidden">
      {isLoading ? <Loading /> : <LoginForm />}
    </motion.main>
  );
};

export default Login;
