import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UploadAplWrapper } from "./styled";

export default function UploadApk({ setFinalData, finalData }) {
  const { register, getValues, setValue, reset } = useForm();
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
  return (
    <UploadAplWrapper>
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
    </UploadAplWrapper>
  );
}
