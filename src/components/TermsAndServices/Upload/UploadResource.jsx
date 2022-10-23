import { InboxOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import reactImageSize from "react-image-size";
import * as yup from "yup";
import StepButtonGroup from "./StepButtonGroup/StepButtonGroup";
import { UploadContextWrapper } from "./UploadAppDetailWrapper/UploadAppDetailWrapper";
import { WrapUploadResource } from "./UploadResource/styled";

// Config
const schema = yup.object().shape({
  uploadavatar: yup
    .mixed()
    .test("fileSize", "The file is too large", (value) => {
      if (!value || !value[0]) {
        return true;
      }
      return value[0].size / 1024 / 1024 < 2;
    })
    .test("required", "The file is required", (value) => {
      if (!value || value.length === 0) {
        return false;
      }
      return true;
    })
    .test(
      "widthHeight",
      "File must be 255 of width and 390 of height",
      async (value) => {
        const file = value[0];
        if (!value || !value[0]) {
          return true;
        }
        const imageUrl = URL.createObjectURL(file?.originFileObj);
        try {
          const { width, height } = await reactImageSize(imageUrl);
          return width === 255 && height === 390;
        } catch (err) {
          console.log(err);
        }
      }
    )
    .test(
      "image-type",
      "The type must be image/jpeg or image/png",
      async (value) => {
        if (!value || !value.length > 0) {
          return true;
        }
        for (let file of value) {
          if (file.type === "image/jpeg" || file.type === "image/png") {
            return true;
          } else {
            return false;
          }
        }
      }
    ),
  images: yup
    .mixed()
    .required()
    .test("fileSize", "The file is too large", (value) => {
      if (!value) {
        return true;
      }
      for (let v of value) {
        if (v.size / 1024 / 1024 < 3) {
          return true;
        }
        return false;
      }
    })
    .test("fileLength", "You must upload at least 2 images", (value) => {
      if (!value) {
        return false;
      }
      if (value.length < 2) {
        return false;
      }
      if (value.length > 10) {
        return false;
      }
      return true;
    })
    .test(
      "image-type",
      "The type must be image/jpeg or image/png",
      async (value) => {
        if (!value || !value.length > 0) {
          return true;
        }
        for (let file of value) {
          if (file.type === "image/jpeg" || file.type === "image/png") {
            return true;
          } else {
            return false;
          }
        }
      }
    ),
});
const getBase64 = (file) => {
  if (file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
};
const UploadResource = ({ setFinalData, finalData }) => {
  // Context
  const DetailContext = useContext(UploadContextWrapper);
  const { handleNextTab, setIsDisabledPrev } = DetailContext;

  // UseForm
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    trigger,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      uploadavatar: [],
      images: [],
    },
    resolver: yupResolver(schema),
  });

  // State
  const [avatarImageUrl, setAvatarImageUrl] = useState();
  const [avatarImage, setAvatarImage] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [images, setImages] = useState([]);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  // Props
  const propsUploadAvatar = {
    name: "file",
    listType: "picture",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: async (info) => {
      setAvatarImage(info.fileList[0]);
      setValue("uploadavatar", info.fileList);
    },
    onDrop(e) {},
  };
  const propsUploadImages = {
    name: "file",
    multiple: true,
    listType: "picture",
    fileList: images || [],
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: async (info) => {
      setImages(info.fileList);
      setValue("images", info.fileList);
    },
    onDrop(e) {},
  };

  // Function
  const UpdateImagesUrl = async () => {
    if (images) {
      let listOfImagesUrl = [];
      for (let file of images) {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        listOfImagesUrl.push(file.url || file.preview);
      }
      setImagesUrl(listOfImagesUrl);
    }
  };
  const UpdateAvatarUrl = async () => {
    if (avatarImage) {
      if (!avatarImage.url && !avatarImage.preview) {
        avatarImage.preview = await getBase64(avatarImage.originFileObj);
      }
      setAvatarImageUrl(avatarImage.url || avatarImage.preview);
    }
  };

  const handleCancel = () => setPreviewOpen(false);

  // UseEffect
  useEffect(() => {
    UpdateImagesUrl();
  }, [images]);
  useEffect(() => {
    UpdateAvatarUrl();
  }, [avatarImage]);
  useEffect(() => {
    // Initial images and avatar data
    if (finalData.images) {
      setImages(finalData.images);
    }
    if (finalData.uploadavatar) {
      setAvatarImage(finalData.uploadavatar[0]);
    }
  }, []);
  useEffect(() => {
    // Update final data when move on next step
    reset({ ...finalData });
    return () => {
      setFinalData((prevData) => ({ ...Object.assign(prevData, getValues()) }));
    };
  }, []);

  // Submit Form
  const onSubmit = (data) => {
    handleNextTab();
  };

  return (
    <WrapUploadResource imagesDisplay={images.length >= 10 ? "none" : ""}>
      <form className="form_upload" onSubmit={handleSubmit(onSubmit)}>
        <div className="upload_item">
          <div className="label">
            <p>Upload Avatar *</p>
            <p className="error_message">{errors.uploadavatar?.message}</p>
          </div>
          {!avatarImageUrl ? (
            <Controller
              name={"uploadavatar"}
              control={control}
              render={({ field }) => (
                <>
                  <Dragger {...propsUploadAvatar}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </Dragger>
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
          ) : (
            <div className="avatar_uploaded">
              <img alt="example" src={avatarImageUrl} />
              <button
                onClick={() => {
                  setAvatarImageUrl("");
                }}
              >
                <CloseCircleOutlined />
              </button>
            </div>
          )}
        </div>
        <div className="upload_item item_1">
          <div className="label">
            <p>Upload Images *</p>
            <p className="error_message">{errors.images?.message}</p>
          </div>
          <Dragger {...propsUploadImages}>
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
      </form>
    </WrapUploadResource>
  );
};

export default UploadResource;
