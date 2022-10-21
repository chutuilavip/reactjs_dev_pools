import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StepButtonGroup from "../StepButtonGroup/StepButtonGroup";
import { UploadContextWrapper } from "../UploadAppDetailWrapper/UploadAppDetailWrapper";
import { UploadAplWrapper } from "./styled";

export default function UploadApk({ setFinalData, finalData }) {
  const DetailContext = useContext(UploadContextWrapper);
  const { submitForm } = DetailContext;
  const { register, getValues, setValue, reset, handleSubmit } = useForm();
  const [apk, setApk] = useState([]);
  useEffect(() => {
    reset({ ...finalData });
    return () => {
      setFinalData((prevData) => ({
        ...Object.assign(prevData, getValues()),
      }));
    };
  }, []);
  useEffect(() => {
    setApk(finalData.fileapk);
  }, [finalData.fileapk]);

  const onChangeFile = (info) => {
    console.log(info.file.originFileObj);
    setApk(info.fileList);
    setValue("fileapk", info.fileList);
    setFinalData((prevData) => ({
      ...Object.assign(prevData, getValues()),
    }));
  };
  const onSubmit = () => {
    submitForm();
  };
  return (
    <UploadAplWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label style={{ marginRight: "1rem" }} htmlFor="apk">
          Choose APK file
        </label>
        <Upload
          {...register("fileapk")}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          fileList={apk}
          onChange={onChangeFile}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <StepButtonGroup />
      </form>
    </UploadAplWrapper>
  );
}
