import React, { useState } from "react";
import { InfoDetail, ShowInfo } from "./styled";
import { Button, Form, Input } from "antd";
import Pen from "../../../assets/Account/buttonchange.png";
import Loading from "../../../layout/components/Loading/Loading";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { getEditInfo } from "../../../redux/slice/account.slice";
const schema = yup
  .object({
    first_name: yup.string().required().min(2).max(10),
    last_name: yup
      .string()
      .required()
      .min(2, "Min length validate message")
      .max(10),
  })
  .required();

const InfoDetailUser = ({ res }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [editFields, setEditFields] = useState([]);
  const { data } = res;
  const { first_name, last_name, email, phone_number, country } = data.user;
  const {
    handleSubmit,
    control,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name,
      last_name,
      email,
      phone_number,
      country,
      current_password: "",
      password: "",
      password_confirmation: "",
    },
    resolver: yupResolver(schema),
  });

  const handleEdit = (type) => {
    const index = editFields.findIndex((el) => el === type);
    if (index === -1) {
      setEditFields((editFields) => [...editFields, type]);
    } else {
      const cloneEditFields = [...editFields];
      cloneEditFields.splice(index, 1);
      setEditFields(cloneEditFields);
    }
  };
  const onSubmit = (data) => {
    if (data.password !== data.password_confirmation) {
      setError("password_confirmation", {
        type: "string",
        message: "password confirm does not match",
      });

      return;
    }
    const formData = new FormData();
    const keys = Object.keys(data);
    for (let v of keys) {
      formData.append(v, data[v]);
    }
    dispatch(getEditInfo(formData));
  };
  console.log(errors);
  return (
    <InfoDetail>
      <div className="title">{t("account.my_account")}</div>
      <Button className="button_logOut">{t("account.log_out")}</Button>
      {data ? (
        <ShowInfo>
          <Form onFinish={handleSubmit(onSubmit)} className="grid_container">
            <div className="grid_item one">{t("account.user_name")}</div>
            <div className="grid_item two">
              {editFields.includes("userName") ? (
                <div className="userNameField">
                  <Controller
                    name="first_name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <div>
                        <Form.Item>
                          <Input {...field} onBlur={field.onBlur} />
                        </Form.Item>
                        <p className="validateMessage">
                          {" "}
                          {errors.first_name?.message}
                        </p>
                      </div>
                    )}
                  />
                  <Controller
                    name="last_name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <div>
                        <Form.Item>
                          <Input {...field} onBlur={field.onBlur} />
                        </Form.Item>
                        <p className="validateMessage">
                          {" "}
                          {errors.last_name?.message}
                        </p>
                      </div>
                    )}
                  />
                </div>
              ) : (
                `${getValues("first_name")} ${getValues("last_name")}`
              )}
            </div>
            <div className="grid_item">
              <Button type="primary" onClick={() => handleEdit("userName")}>
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>
            <div className="grid_item one">{t("account.email")}</div>
            <div className="grid_item two">
              {editFields.includes("email") ? (
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div>
                      <Form.Item>
                        <Input {...field} onBlur={field.onBlur} />
                      </Form.Item>
                      <p className="validateMessage">
                        {" "}
                        {errors.email?.message}
                      </p>
                    </div>
                  )}
                />
              ) : (
                `${getValues("email")}`
              )}
            </div>
            <div className="grid_item">
              <Button type="primary" onClick={() => handleEdit("email")}>
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>
            <div className="grid_item one">{t("account.password")}</div>
            <div className="grid_item two">
              {editFields.includes("password") ? (
                <div className="change_password_field">
                  <Controller
                    name="current_password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <div>
                        <Form.Item>
                          <Input
                            placeholder="current password"
                            {...field}
                            onBlur={field.onBlur}
                          />
                        </Form.Item>
                        <p className="validateMessage">
                          {" "}
                          {errors.current_password?.message}
                        </p>
                      </div>
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <div>
                        <Form.Item>
                          <Input
                            placeholder="new password"
                            {...field}
                            onBlur={field.onBlur}
                          />
                        </Form.Item>
                        <p className="validateMessage">
                          {" "}
                          {errors.password?.message}
                        </p>
                      </div>
                    )}
                  />
                  <Controller
                    name="password_confirmation"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <div>
                        {" "}
                        <Form.Item>
                          <Input
                            placeholder="confirm new password"
                            {...field}
                            onBlur={field.onBlur}
                          />
                        </Form.Item>
                        <p className="validateMessage">
                          {" "}
                          {errors.password_confirmation?.message}
                        </p>
                      </div>
                    )}
                  />
                </div>
              ) : (
                "***********"
              )}
            </div>
            <div className="grid_item">
              <Button type="primary" onClick={() => handleEdit("password")}>
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>
            <div className="grid_item one">{t("account.phone_number")}</div>
            <div className="grid_item two">
              {editFields.includes("phoneNumber") ? (
                <Controller
                  name="phone_number"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Form.Item>
                      <Input {...field} onBlur={field.onBlur} />
                    </Form.Item>
                  )}
                />
              ) : (
                `${getValues("phone_number")}`
              )}
            </div>
            <div className="grid_item">
              <Button type="primary" onClick={() => handleEdit("phoneNumber")}>
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>
            <div className="grid_item one">{t("account.country")}</div>
            <div className="grid_item two">
              {editFields.includes("country") ? (
                <Controller
                  name="country"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Form.Item>
                      <Input {...field} onBlur={field.onBlur} />
                    </Form.Item>
                  )}
                />
              ) : (
                `${getValues("country") ? getValues("country") : ""}`
              )}
            </div>
            <div className="grid_item">
              <Button type="primary" onClick={() => handleEdit("country")}>
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>
            <Button
              style={{ width: "20%", textAlign: "center" }}
              type="primary"
              htmlType="submit"
              className="button"
            >
              Submit
            </Button>
          </Form>
        </ShowInfo>
      ) : (
        <Loading />
      )}
    </InfoDetail>
  );
};

export default InfoDetailUser;
