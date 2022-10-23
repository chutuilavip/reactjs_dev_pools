import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StepButtonGroup from "../StepButtonGroup/StepButtonGroup";
import { UploadContextWrapper } from "../UploadAppDetailWrapper/UploadAppDetailWrapper";
import { UploadAplWrapper } from "./styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  fileapk: yup
    .mixed()
    .required()
    .test("fileSize", "The file is too large", (value) => {
      if (!value) {
        return true;
      }
      return value[0].size / 1024 / 1024 < 200;
    }),
});
export default function UploadApk({ setFinalData, finalData }) {
  const DetailContext = useContext(UploadContextWrapper);
  const { submitForm } = DetailContext;
  const {
    register,
    getValues,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
        <div className="field_item">
          <div className="label">
            <label style={{ marginRight: "1rem" }} htmlFor="apk">
              Choose APK file
            </label>
            <p className="error_field">{errors.fileapk?.message}</p>
          </div>
          <Upload
            {...register("fileapk")}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            fileList={apk}
            onChange={onChangeFile}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </div>
        <StepButtonGroup />
      </form>
    </UploadAplWrapper>
  );
}
