import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import * as yup from "yup";
import Loading from "../../layout/components/Loading/Loading";
import { resetPassword } from "../../redux/slice/user.slice";
import { AppDispatcher } from "../../utils";
import { ResetPasswordWrapper } from "./styled";

const schema = yup
  .object({
    password: yup
      .string()
      .required()
      .min(8, "Your password must be at least 8 character"),
    password_confirmation: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Password does not match"),
  })
  .required();
export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.user);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // single-time read
  const params = Object.fromEntries([...searchParams]);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const goToLogin = () => {
    navigate("/login");
  };
  const onSubmit = (values) => {
    const payload = { ...values, token: params.token, email: params.email };
    dispatch(resetPassword({ payload, goToLogin }));
  };

  console.log(params);
  return (
    <ResetPasswordWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <Form onFinish={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Form.Item label="Password">
                <Input
                  {...field}
                  placeholder="Enter your new password"
                  type="password"
                />
                <p>{errors.password?.message}</p>
              </Form.Item>
            )}
          />
          <Controller
            control={control}
            name="password_confirmation"
            render={({ field }) => (
              <Form.Item label="Confirm Password">
                <Input
                  {...field}
                  placeholder="Confirm your new password"
                  type="password"
                />
                <p>{errors.confirm_password?.message}</p>
              </Form.Item>
            )}
          />
          <Button htmlType="submit">Confirm</Button>
        </Form>
      )}
    </ResetPasswordWrapper>
  );
}
