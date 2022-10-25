import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { forgotPassword } from "../../redux/slice/user.slice";
import { ForgotPasswordWrapper } from "./styled";

const schema = yup
  .object({
    email: yup.string().required().email("Invalid email format"),
  })
  .required();
export default function ForgotPassword() {
  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    console.log(values);
    dispatch(forgotPassword(values));
  };

  return (
    <ForgotPasswordWrapper>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Form.Item label="Email">
              <Input {...field} placeholder="Enter your email" />
              <p>{errors.email?.message}</p>
            </Form.Item>
          )}
        />

        <Button type="primary" loading={isLoading} htmlType="submit">
          Confirm
        </Button>
      </Form>
    </ForgotPasswordWrapper>
  );
}
