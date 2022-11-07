import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Input, Select } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { InboxOutlined } from "@ant-design/icons";
import {
  getCategoriesAndLanguage,
  uploadContent,
} from "../../../../redux/slice/detailApp.slice";
import { Upload } from "antd";

import StepButtonGroup, {
  tabContent,
} from "../StepButtonGroup/StepButtonGroup";
import UploadApk from "../UploadApk/UploadApk";
import UploadAppDetail from "../UploadAppDetail/UploadAppDetail";
import UploadInformation from "../UploadInformation/UploadInformation";
import UploadResource from "../UploadResource";
import { schema } from "./constant";
import { EditAppWrapper } from "./styled";

const { Dragger } = Upload;
export default function EditApp() {
  const dispatch = useDispatch();
  const params = useParams();
  const { register, getValues, control, handleSubmit } = useForm({
    resolvers: yupResolver(schema),
  });
  useEffect(() => {
    dispatch(getCategoriesAndLanguage());
  }, []);

  const submitForm = (value) => {
    console.log(value);
  };

  return (
    <EditAppWrapper>
      <Form onFinish={handleSubmit(submitForm)}>
        <Controller
          control={control}
          name="appid"
          render={({ field }) => (
            <Form.Item label="App ID">
              <Input {...field} />
            </Form.Item>
          )}
        />
        <Controller
          control={control}
          name="language"
          render={({ field }) => (
            <Form.Item label="App ID">
              <Select
                {...field}
                defaultValue=""
                options={[
                  {
                    value: "",
                    label: "Choose your app id",
                    disabled: true,
                  },
                  {
                    value: "VN",
                    label: "VIETNAM",
                  },
                  {
                    value: "EN",
                    label: "ENLISH",
                  },
                ]}
              />
            </Form.Item>
          )}
        />
        <Controller
          control={control}
          name="avatar"
          render={({ field }) => (
            <Form.Item label="App ID">
              <Dragger {...field}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Dragger>
            </Form.Item>
          )}
        />
        <Button htmlType="submit">Update App</Button>
      </Form>
    </EditAppWrapper>
  );
}
