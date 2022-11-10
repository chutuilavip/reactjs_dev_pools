import { Button, Form, Input } from "antd";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import Pen from "../../../assets/Account/buttonchange.png";
import { ConvertToFormData } from "../../../helpers/formData";
import Loading from "../../../layout/components/Loading/Loading";
import { editAccountInfo } from "../../../redux/slice/account.slice";
import { goToTop } from "../../../utils";
import fields from "./fields";
import { InfoDetail, ShowInfo } from "./styled";
import { editInfoUserSchema } from "./schema";

const InfoDetailUser = ({ res }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [editFields, setEditFields] = useState([]);
  const { data } = res;
  const { first_name, last_name, email, phone_number, country } = data.dev;
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
    resolver: yupResolver(editInfoUserSchema),
  });

  const handleEdit = (type) => {
    const setOfEditFields = [...new Set(editFields)];
    const index = setOfEditFields.findIndex((el) => el === type);
    if (index === -1) {
      setEditFields((editFields) => [...editFields, type]);
    } else {
      const cloneEditFields = [...setOfEditFields];
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
  useEffect(() => {
    const keys = Object.keys(errors);
    const cloneEditFields = [...editFields, ...keys];
    const setOfEditFields = [...new Set(cloneEditFields)];
    console.log(setOfEditFields);

    setEditFields(setOfEditFields);
  }, [errors]);
  console.log(errors);
  return (
    <InfoDetail>
      <div className="title">{t("account.my_account")}</div>
      {/* <Button className="button_logOut">{t("account.log_out")}</Button> */}
      {data ? (
        <ShowInfo>
          <Form onFinish={handleSubmit(onSubmit)} className="grid_container">
            <div className="grid_item one">{t("account.user_name")}</div>
            <div className="grid_item two">
              {editFields.includes("first_name") ||
              editFields.includes("last_name") ? (
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
              <Button type="primary" onClick={() => handleEdit("first_name")}>
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
                              {fieldName === "year_established" ? (
                                <Input
                                  type="number"
                                  {...field}
                                  onBlur={field.onBlur}
                                />
                              ) : (
                                <Input {...field} onBlur={field.onBlur} />
                              )}
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
