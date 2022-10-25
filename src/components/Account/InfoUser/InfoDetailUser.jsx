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
    email: yup.string().required().email(),
    // current_password: yup.string().required(),
    password: yup.string(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password confirm does not match"),
  })
  .required();

const InfoDetailUser = ({ res }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [editFields, setEditFields] = useState([]);
  const { data } = res;
  const { first_name, last_name, email, phone_number, country } = data.dev;
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
    const formData = new FormData();
    const keys = Object.keys(data);
    for (let v of keys) {
      formData.append(v, data[v]);
    }
    dispatch(getEditInfo(formData));
  };
  console.log(errors);
  console.log(getValues());
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
                      <div className="userNameInput">
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
                      <div className="userNameInput">
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

            {/* -------------------------------------- */}

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

            {/* -------------------------------------- */}

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
                            type="password"
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
                            type="password"
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
                            type="password"
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

            {/* -------------------------------------- */}

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

            {/* -------------------------------------- */}

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

            {/* -------------------------------------- */}

            <div className="grid_item one">{t("account.business_name")}</div>
            <div className="grid_item two">
              {editFields.includes("business_name") ? (
                <Controller
                  name="business_name"
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
              <Button
                type="primary"
                onClick={() => handleEdit("business_name")}
              >
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>

            <div className="grid_item one">{t("account.contact_name")}</div>
            <div className="grid_item two">
              {editFields.includes("contact_name") ? (
                <Controller
                  name="contact_name"
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
                `${getValues("contact_name")}`
              )}
            </div>
            <div className="grid_item">
              <Button type="primary" onClick={() => handleEdit("contact_name")}>
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>

            <div className="grid_item one">{t("account.website")}</div>
            <div className="grid_item two">
              {editFields.includes("website") ? (
                <Controller
                  name="website"
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
                `${getValues("website")}`
              )}
            </div>
            <div className="grid_item">
              <Button type="primary" onClick={() => handleEdit("website")}>
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>

            <div className="grid_item one">{t("account.release_details")}</div>
            <div className="grid_item two">
              {editFields.includes("release_details") ? (
                <Controller
                  name="release_details"
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
                `${getValues("release_details")}`
              )}
            </div>
            <div className="grid_item">
              <Button
                type="primary"
                onClick={() => handleEdit("release_details")}
              >
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>

            <div className="grid_item one">
              {t("account.product_and_services")}
            </div>
            <div className="grid_item two">
              {editFields.includes("product_and_services") ? (
                <Controller
                  name="product_and_services"
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
                `${getValues("product_and_services")}`
              )}
            </div>
            <div className="grid_item">
              <Button
                type="primary"
                onClick={() => handleEdit("product_and_services")}
              >
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>

            <div className="grid_item one">{t("account.products_url")}</div>
            <div className="grid_item two">
              {editFields.includes("products_url") ? (
                <Controller
                  name="products_url"
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
                `${getValues("products_url")}`
              )}
            </div>
            <div className="grid_item">
              <Button type="primary" onClick={() => handleEdit("products_url")}>
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>

            <div className="grid_item one">{t("account.year_established")}</div>
            <div className="grid_item two">
              {editFields.includes("year_established") ? (
                <Controller
                  name="year_established"
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
                `${getValues("year_established")}`
              )}
            </div>
            <div className="grid_item">
              <Button
                type="primary"
                onClick={() => handleEdit("year_established")}
              >
                {t("account.edit")} <img src={Pen} alt="pen " />
              </Button>
            </div>

            <div className="grid_item one">
              {t("account.application_catalog")}
            </div>
            <div className="grid_item two">
              {editFields.includes("application_catalog") ? (
                <Controller
                  name="application_catalog"
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
                `${getValues("application_catalog")}`
              )}
            </div>
            <div className="grid_item">
              <Button
                type="primary"
                onClick={() => handleEdit("application_catalog")}
              >
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
