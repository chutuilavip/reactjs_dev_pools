import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input } from "antd";
import React, { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import Pen from "../../../assets/Account/buttonchange.png";
import { ConvertToFormData } from "../../../helpers/formData";
import Loading from "../../../layout/components/Loading/Loading";
import { editAccountInfo } from "../../../redux/slice/account.slice";
import { goToTop } from "../../../utils";
import fields from "./fields";
import { InfoDetail, ShowInfo } from "./styled";
const schema = yup
  .object({
    first_name: yup.string().required().min(2).max(10),
    last_name: yup
      .string()
      .required()
      .min(2, "Min length validate message")
      .max(10),
    email: yup.string().required().email(),
    phone_number: yup.string().required(),
    // country: yup.string().required(),
    business_name: yup.string().required(),
    application_catalog: yup.string().required(),
    contact_name: yup.string().required(),
    product_and_services: yup.string().required(),
    products_url: yup.string().required(),
    release_details: yup.string().required(),
    website: yup.string().required(),
    year_established: yup.string().required(),
    password: yup.string(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password confirm does not match"),
  })
  .required();

const InfoDetailUser = ({ res }) => {
  console.log(res);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [editFields, setEditFields] = useState([]);
  const { data } = res;
  const { first_name, last_name, email, phone_number, country } = data.dev;
  console.log(data.business_info);
  const {
    business_name,
    application_catalog,
    contact_name,
    product_and_services,
    products_url,
    release_details,
    website,
    address,
    year_established,
  } = data.business_info ? data.business_info : [];
  const {
    handleSubmit,
    control,
    getValues,
    setError,
    setFocus,
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
      business_name,
      contact_name,
      website,
      address,
      release_details,
      product_and_services,
      products_url,
      year_established,
      application_catalog,
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
    if (data.current_password && data.password.length < 8) {
      setError("password", {
        type: "password length",
        message: "New password must be at least 8 characters",
      });
      setFocus("password", { shouldSelect: true });
      return;
    }
    if (data.current_password.length === 0 && data.password.length > 0) {
      setError("current_password", {
        type: "required",
        message:
          "You must provide your current password if you want to change it",
      });
      setFocus("current_password", { shouldSelect: true });
      return;
    }
    goToTop();
    const formData = ConvertToFormData(data);
    dispatch(editAccountInfo(formData));
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

            {fields.map((fieldName, index) => {
              return (
                <Fragment key={index}>
                  <div className="grid_item one">
                    {t(`account.${fieldName}`)}
                  </div>
                  <div className="grid_item two">
                    {editFields.includes(fieldName) ? (
                      <Controller
                        name={fieldName}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <div>
                            <Form.Item>
                              <Input {...field} onBlur={field.onBlur} />
                            </Form.Item>
                            <p className="validateMessage">
                              {errors[fieldName]?.message}
                            </p>
                          </div>
                        )}
                      />
                    ) : (
                      `${
                        getValues(fieldName) === "null" ||
                        getValues(fieldName) === undefined
                          ? "This field is empty"
                          : getValues(fieldName)
                      }`
                    )}
                  </div>
                  <div className="grid_item">
                    <Button
                      type="primary"
                      onClick={() => handleEdit(fieldName)}
                    >
                      {t("account.edit")} <img src={Pen} alt="pen " />
                    </Button>
                  </div>
                </Fragment>
              );
            })}

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
