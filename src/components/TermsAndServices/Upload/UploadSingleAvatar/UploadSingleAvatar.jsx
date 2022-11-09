import { Form, Image, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import React from "react";
import { Controller } from "react-hook-form";
import { URL_API } from "../../../../utils";
const { Dragger } = Upload;
export default function UploadSingleAvatar({
  control,
  defaultAvatar,
  errMessage,
  name,
  label,
}) {
  const propsUploadSingleAvatar = {
    listType: "picture",
    accept: "image/png, image/jpeg",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: (info) => {},
    onDrop(e) {},
  };
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Dragger
              {...propsUploadSingleAvatar}
              {...field}
              maxCount={1}
              listType="picture"
              accept="image/png, image/jpeg"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">Upload your new avatar</p>
            </Dragger>
            {defaultAvatar && (
              <div className="cover-wrapper">
                <p>Current Cover :</p>
                <Image
                  preview={false}
                  src={`${URL_API}/${defaultAvatar}`}
                  alt="Current Cover"
                  className="cover"
                />
              </div>
            )}
            <p className="error_message">{errMessage}</p>
          </Form.Item>
        )}
      />
    </div>
  );
}
