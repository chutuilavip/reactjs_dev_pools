import { PlusOutlined } from "@ant-design/icons";
import { message, Modal, Upload } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import StepButtonGroup from "./StepButtonGroup/StepButtonGroup";
import { WrapUploadResource } from "./UploadResource/styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UploadContextWrapper } from "./UploadAppDetailWrapper/UploadAppDetailWrapper";
import reactImageSize from "react-image-size";
// const schema = yup.object().shape({
//   // uploadavatar: yup
//   //   .mixed()
//   //   .required()
//   //   .test("fileSize", "The file is too large", (value) => {
//   //     console.log("---------------------", value);
//   //     if (!value) {
//   //       return true;
//   //     }
//   //     return value[0].size / 1024 / 1024 < 0.0002;
//   //   }),
//   images: yup
//     .mixed()
//     .required()
//     .test("fileSize", "The file is too large", (value) => {
//       if (!value) {
//         return true;
//       }
//       for (let v of value) {
//         if (v.size / 1024 / 1024 < 3) {
//           return true;
//         }
//         return false;
//       }
//     })
//     .test("fileLength", "You must upload at least 2 images", (value) => {
//       if (!value) {
//         return false;
//       }
//       if (value.length < 2) {
//         return false;
//       }
//       return true;
//     }),
// });
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UploadResource = ({ setFinalData, finalData }) => {
  const beforeUploadImages = (singleFile, fileList) => {
    for (let file of fileList) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        setError("images", {
          type: "type",
          message: "You can only upload JPG/PNG file!",
        });
        message.error("You can only upload JPG/PNG file!");
      }
      const isLt8M = file.size / 1024 / 1024 < 8;
      if (!isLt8M) {
        setError("images", {
          type: "imgSize",
          message: "Image must smaller than 8MB!",
        });
        message.error("Image must smaller than 8MB!");
      }
      return isJpgOrPng && isLt8M;
    }
  };

  const DetailContext = useContext(UploadContextWrapper);
  const { handleNextTab } = DetailContext;

  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    setError,
    formState: { errors },
  } = useForm({
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
  const getDimensions = async (file) => {
    const imageUrl = URL.createObjectURL(file.originFileObj);
    try {
      const res = await reactImageSize(imageUrl);
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeAvatar = async (info) => {
    if (info.fileList[0]) {
      const res = await getDimensions(info.fileList[0]);
      if (res.width !== 255) {
        setError("uploadavatar", { type: "cc", message: "file sai r" });
      }
      if (info.fileList[0].size / 1024 / 1024 < 0.0002) {
        setError("uploadavatar", { type: "cc", message: "file to vcl" });
      }
    }
    setValue("uploadavatar", info.fileList);
    setAvatarImage(info.fileList);
  };
  const handleChangeImages = ({ fileList: newFileList }) => {
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

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log("oll", errors);
    handleNextTab();
  };
  console.log("Errors", errors);
  return (
    <WrapUploadResource>
      <form className="form_upload" onSubmit={handleSubmit(onSubmit)}>
        <div className="upload_item">
          <p>Upload Avatar *</p>
          <Controller
            name={"uploadavatar"}
            control={control}
            render={({ field }) => (
              <>
                {" "}
                <Upload
                  {...field}
                  // {...register("uploadavatar")}
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
              </>
            )}
          />
        </div>
        <div className="upload_item">
          <p>Upload Images *</p>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={getValues("images")}
            onChange={handleChangeImages}
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
        <StepButtonGroup />
        <button
          onClick={() => {
            console.log(errors);
          }}
          type="button"
        >
          submit
        </button>
      </form>
    </WrapUploadResource>
  );
};

export default UploadResource;
