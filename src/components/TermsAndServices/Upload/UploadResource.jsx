import { PlusOutlined } from "@ant-design/icons";
import { message, Modal, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { WrapUploadResource } from "./UploadResource/styled";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isLt2M;
  },
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const props_one = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UploadResource = ({ setFinalData, finalData }) => {
  const { register, control, handleSubmit, setValue, getValues, reset } =
    useForm({
      defaultValues: {
        uploadavatar: [],
        images: [],
      },
    });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [images, setImages] = useState([]);
  const [avatarImage, setAvatarImage] = useState([]);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const handleChangeAvatar = (info) => {
    console.log("info.fileList", info.fileList);
    setValue("uploadavatar", info.fileList);
    setAvatarImage(info.fileList);
  };
  const handleChangeImgaes = ({ fileList: newFileList }) => {
    setValue("images", newFileList);
    setImages(newFileList);
  };
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  useEffect(() => {
    if (finalData.images) {
      setImages(finalData.images);
    }
    if (finalData.uploadavatar) {
      setAvatarImage(finalData.uploadavatar);
    }
  }, [finalData.uploadavatar, finalData.images]);

  useEffect(() => {
    reset({ ...finalData });
    return () => {
      setFinalData((prevData) => ({ ...Object.assign(prevData, getValues()) }));
    };
  }, []);
  console.log("imagesimagesimages", getValues(), avatarImage);
  return (
    <WrapUploadResource>
      <form className="form_upload">
        <div className="upload_item">
          <p>Upload Avatar *</p>
          <Upload
            {...register("uploadavatar")}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={getValues("uploadavatar")}
            onChange={handleChangeAvatar}
            onPreview={handlePreview}
          >
            {avatarImage.length > 0 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>
        </div>
        <div className="upload_item">
          <p>Upload Images *</p>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={getValues("images")}
            onChange={handleChangeImgaes}
            onPreview={handlePreview}
            multiple
          >
            {images.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>
        </div>
      </form>
    </WrapUploadResource>
  );
};

export default UploadResource;
