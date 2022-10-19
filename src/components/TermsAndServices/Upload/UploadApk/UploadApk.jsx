import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function UploadApk({ setFinalData }) {
  const { register, getValues, setValue } = useForm();
  useEffect(() => {
    return () => {
      setFinalData((prevData) => ({
        ...Object.assign(prevData, getValues()),
      }));
    };
  }, []);
  const onChangeFile = (e) => {
    setValue("fileapk", e.target.files[0]);
  };
  return (
    <div
      className=""
      style={{ width: "90%", margin: "auto", marginBottom: "7rem" }}
    >
      <label style={{ marginRight: "1rem" }} htmlFor="apk">
        Choose APK file
      </label>
      <input
        type="file"
        id="apk"
        {...register("fileapk")}
        onChange={onChangeFile}
      />
    </div>
  );
}
