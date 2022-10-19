import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BgContent, TitleForm, ListInput } from "./styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/user.slice";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const routerRegister = useSelector(
    (state) => state.customLayout.routerPrevious
  );

  const redirectLogin = () => {
    navigate(routerRegister === "/register" ? "/" : -1);
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("tokens"));
    if (token) {
      redirectLogin();
    }
  }, []);

  const onSubmit = async (data) => {
    await dispatch(loginUser(data));
  };

  return (
    <BgContent>
      <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>{t("user.signin")}</TitleForm>
        <ListInput>
          <input
            placeholder="User name"
            type="text"
            className="input_form"
            {...register("email")}
          />
          <input
            placeholder="Password"
            type="password"
            className="input_form"
            {...register("password", { required: true, minLength: 6 })}
          />
          <div className="option_form">
            <div>
              <input placeholder="Password" type="checkbox" id="rememPass" />
              <label htmlFor="rememPass">Remember password</label>
            </div>
            <Link className="forgot_pass" to="/">
              Forgot password?
            </Link>
          </div>
        </ListInput>

        <button className="btn_form" type="submit">
          SIGN IN
        </button>

        <div className="social_login">
          <p>Or Sign in with</p>
          <div className="social">
            {/* <BsFacebook /> */}
            {/* <BsGoogle /> */}
          </div>
          <div className="register_link">
            <span>You don’t have acount? </span>
            <Link to="/register">Create account</Link>
          </div>
        </div>
      </form>
    </BgContent>
  );
};

export default LoginForm;
