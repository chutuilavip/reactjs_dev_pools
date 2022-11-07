import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import global from "../../assets/register/global.png";
import K from "../../assets/register/K.png";
import ledger from "../../assets/register/ledger.png";
import maskGroup from "../../assets/register/maskGroup.png";
import mastercard from "../../assets/register/mastercard.png";
import metaMask from "../../assets/register/metaMask.png";
import payPal from "../../assets/register/payPal.png";
import spaces from "../../assets/register/spaces.png";
import Visa from "../../assets/register/Visa.png";
import walletConnect from "../../assets/register/walletConnect.png";
import { variants } from "../../helpers/motion";
import { registerPublisher, registerUser } from "../../redux/slice/user.slice";
import { FormRegis, ListInput, StepOne, WrapRegister } from "./styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputData, schema } from "./registerItul";
import { Button } from "antd";
import { ConvertToFormData } from "../../helpers/formData";
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
  const fieldsValues = useRef();
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
  const { statusRegis } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    let payload = ConvertToFormData(data);
    dispatch(registerPublisher({ payload, goHome }));
  };
  const goHome = () => {
    navigate("/login");
  };

  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <WrapRegister>
        <h3 className="title_form">CREATE ACOUNT</h3>
        <div className="switch_register_type">
          <label htmlFor="switch_register_type">Register for Publisher</label>
        </div>
        <FormRegis onSubmit={handleSubmit(onSubmit)} height={"100%"}>
          <StepOne status={step}>
            {InputData.map((item, index) => {
              return (
                <ListInput>
                  <div className="field_item">
                    <input
                      placeholder={item.field_1.placeholder}
                      type={item.field_1.type || "text"}
                      {...register(item.field_1.register)}
                    />
                    <p className="validateMessage">
                      {" "}
                      {errors[item.field_1.register]?.message}
                    </p>
                  </div>
                  <div className="field_item">
                    <input
                      placeholder={item.field_2.placeholder}
                      type={item.field_2.type || "text"}
                      {...register(item.field_2.register)}
                    />
                    <p className="validateMessage">
                      {" "}
                      {errors[item.field_2.register]?.message}
                    </p>
                  </div>
                </ListInput>
              );
            })}

            <div className="field_item">
              <input
                placeholder="Address"
                type="text"
                className="input_form_last"
                {...register("address")}
              />
              <p className="validateMessage"> {errors?.address?.message}</p>
            </div>
            <Button htmlType="submit" className="btn_form">
              Submit
            </Button>
          </StepOne>

          {/* <StepTwo status={step}>
            <ListApp>
              <div className="step_two_header">
                <h3>Connect Wallet</h3>
                <p>
                  Seclect what network and wallet you want to connect bellow
                </p>
              </div>
              <div className="apps">
                {arrWallet.map((app, index) => {
                  return (
                    <div className="bg_app" key={index}>
                      <img src={app} alt="app" />
                    </div>
                  );
                })}
              </div>
              <div className="list_app_footer">
                <span>What’s wallet?</span>
                <p>
                  Can’t find your wallet? <span>Suggest Defi Walllet</span>
                </p>
              </div>
            </ListApp>
            <FormMeta>
              <div>
                <h3>MetaMask</h3>
                <p>
                  MetaMask provides the simplest yet most secure way to connect
                  to blockchain-based applications. You are always in control
                  when interacting on the new decentralized web.
                </p>
              </div>
              <div className="form_connect">
                <div className="input_top">
                  <input
                    placeholder="Card Number"
                    type="text"
                    className="input_meta"
                    {...register("cardNumber")}
                  />
                  <input
                    placeholder="Expiration Date"
                    type="text"
                    className="input_meta"
                    {...register("expirationDate", {
                      required: true,
                      minLength: 6,
                    })}
                  />
                </div>
                <input
                  style={{ width: "85%" }}
                  placeholder="Name"
                  type="text"
                  className="input_meta"
                  {...register("name")}
                />
                <p className="or">Or</p>
                <button className="btn_QR">Connect with QR code</button>
              </div>
              <button className="btn_connectWallet">Connect Wallet</button>
            </FormMeta>
          </StepTwo> */}
        </FormRegis>

        {/* List btn step */}
        {/* <ListBtnStep>
          <div
            className={`${step ? "btn_step_active" : "btn_step"}`}
            onClick={() => {
              setStep(true);
            }}
          >
            <span>Step 1</span>
            <span>Create Acount</span>
          </div>
          <div
            className={`${!step ? "btn_step_active" : "btn_step"}`}
            onClick={() => {
              setStep(false);
            }}
          >
            <span>Step 2</span>
            <span>Connect Wallet</span>
          </div>
        </ListBtnStep> */}
      </WrapRegister>
    </motion.main>
  );
};

export default Register;
