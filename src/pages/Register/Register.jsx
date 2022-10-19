import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
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
import { motion } from "framer-motion";
import { variants } from "../../helpers/motion";
import {
  FormMeta,
  FormRegis,
  ListApp,
  ListBtnStep,
  ListInput,
  StepOne,
  StepTwo,
  WrapRegister,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { registerPublisher, registerUser } from "../../redux/slice/user.slice";
import { useNavigate } from "react-router-dom";
import { Switch } from "antd";
import { toast } from "react-toastify";

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
  const [isRegisterForPublisher, setIsRegisterForPublisher] = useState(false);
  const [step, setStep] = useState(true);
  const fieldsValues = useRef();
  const { register, handleSubmit, reset, getValues } = useForm();
  const dispatch = useDispatch();
  const { statusRegis, errors } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (!isRegisterForPublisher) {
      dispatch(registerUser(data));
      if (statusRegis.status === 200) {
        console.log("--------------------------------", statusRegis.status);
        navigate("/login");
      }
    } else {
      dispatch(registerPublisher(data));
      if (statusRegis.status === 200) {
        console.log("--------------------2222------------");
        navigate("/login");
      }
    }
  };
  const switchRegisterType = (checked) => {
    setIsRegisterForPublisher(checked);
    const values = getValues();
    fieldsValues.current = values;
    // reset();
  };
  // useEffect(() => {
  //   if (errors) {
  //     const keys = Object.keys(errors?.register?.errors);
  //     keys.forEach((el) => {
  //       toast.error(errors?.register?.errors[el][0]);
  //     });
  //   }
  //   toast.clearWaitingQueue();
  // }, [errors]);

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
          <Switch
            id="switch_register_type"
            checked={isRegisterForPublisher}
            onChange={switchRegisterType}
          />
          <label htmlFor="switch_register_type">Register for Publisher</label>
        </div>
        <FormRegis
          onSubmit={handleSubmit(onSubmit)}
          height={isRegisterForPublisher ? "72%" : "43%"}
        >
          <StepOne status={step}>
            {isRegisterForPublisher && (
              <>
                <ListInput>
                  <input
                    placeholder="Business Name *"
                    type="text"
                    defaultValue={fieldsValues.current?.business_name}
                    {...register("business_name", {
                      required: true,
                    })}
                  />
                  <input
                    placeholder="Contact Name *"
                    type="text"
                    {...register("contact_name")}
                  />
                </ListInput>
                <ListInput>
                  <input
                    placeholder="Website *"
                    type="text"
                    {...register("website")}
                  />
                  <input
                    placeholder="Products and Services *"
                    type="text"
                    {...register("product_and_services")}
                  />
                </ListInput>
                <ListInput>
                  <input
                    placeholder="Release details *"
                    type="text"
                    {...register("release_details")}
                  />
                  <input
                    placeholder="Products URL *"
                    type="text"
                    {...register("products_url")}
                  />
                </ListInput>
                <ListInput>
                  <input
                    placeholder="Year Established *"
                    type="text"
                    {...register("year_established")}
                  />
                  <input
                    placeholder="Application catalog *"
                    type="text"
                    {...register("application_catalog")}
                  />
                </ListInput>
              </>
            )}
            <ListInput>
              <input
                placeholder="First Name *"
                type="text"
                {...register("first_name")}
              />
              <input
                placeholder="Last Name *"
                type="text"
                {...register("last_name")}
              />
            </ListInput>
            <ListInput>
              <input placeholder="Email *" type="text" {...register("email")} />
              <input
                placeholder="Phone Number *"
                type="text"
                {...register("phone_number")}
              />
            </ListInput>
            <ListInput>
              <input
                placeholder="Password *"
                type="password"
                {...register("password", { required: true, minLength: 6 })}
              />
              <input
                placeholder="Confirm Password *"
                type="password"
                {...register("password_confirmation", {
                  required: true,
                  minLength: 6,
                })}
              />
            </ListInput>
            <input
              placeholder="Address"
              type="text"
              className="input_form_last"
              {...register("address")}
            />
            <button
              type="submit"
              className="btn_form"
              // onClick={() => {
              //   setStep(false);
              // }}
            >
              Submit
            </button>
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
