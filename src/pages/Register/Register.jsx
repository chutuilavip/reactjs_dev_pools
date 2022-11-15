import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import global from '../../assets/register/global.png';
import K from '../../assets/register/K.png';
import ledger from '../../assets/register/ledger.png';
import maskGroup from '../../assets/register/maskGroup.png';
import mastercard from '../../assets/register/mastercard.png';
import metaMask from '../../assets/register/metaMask.png';
import payPal from '../../assets/register/payPal.png';
import spaces from '../../assets/register/spaces.png';
import Visa from '../../assets/register/Visa.png';
import walletConnect from '../../assets/register/walletConnect.png';
import { ConvertToFormData } from '../../helpers/formData';
import { variants } from '../../helpers/motion';
import { registerPublisher } from '../../redux/slice/user.slice';
import FieldList from './components/FieldList/FieldList';
import { InputData, schema } from './registerItul';
import { FormRegis, ListInput, StepOne, WrapRegister } from './styled';
const arrWallet = [
  global,
  K,
  ledger,
  maskGroup,
  mastercard,
  metaMask,
  payPal,
  spaces,
  Visa,
  walletConnect,
];

const Register = () => {
  const [step, setStep] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { statusRegis, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    let payload = ConvertToFormData(data);
    dispatch(registerPublisher({ payload, goHome }));
  };
  const goHome = () => {
    navigate('/login');
  };

  return (
    <motion.main variants={variants} initial="hidden" animate="visible" exit="hidden">
      <WrapRegister>
        <h3 className="title_form">CREATE ACOUNT</h3>
        <div className="switch_register_type">
          <label htmlFor="switch_register_type">Register for Publisher</label>
        </div>
        <FormRegis onSubmit={handleSubmit(onSubmit)} height={'100%'}>
          <StepOne status={step}>
            <FieldList register={register} errors={errors} />

            <Button loading={isLoading} htmlType="submit" className="btn_form">
              Submit
            </Button>
          </StepOne>
        </FormRegis>
      </WrapRegister>
    </motion.main>
  );
};

export default Register;
