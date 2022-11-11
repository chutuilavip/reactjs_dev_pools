import { InboxOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ResourceSchema from "./Schema/UploadResourceSchema";
import StepButtonGroup from "./StepButtonGroup/StepButtonGroup";
import { UploadContextWrapper } from "./UploadAppDetailWrapper/UploadAppDetailWrapper";
import { WrapUploadResource } from "./UploadResource/styled";

// Config

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
  const {
    handleNextTab,
    setIsDisabledPrev,
    disabledSubmit,
    setDisabledSubmit,
  } = DetailContext;

  // UseForm
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    trigger,
    setFocus,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      uploadavatar: [],
      images: [],
    },
    resolver: yupResolver(ResourceSchema),
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
    accept: "image/png, image/jpeg",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: (info) => {
      setAvatarImage(info.fileList[0]);
      setValue("uploadavatar", info.fileList);
    },
    onDrop(e) {},
  };
  const propsUploadImages = {
    name: "file",
    multiple: true,
    accept: "image/png, image/jpeg",
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
    return () => {
      setFinalData((prevData) => ({ ...Object.assign(prevData, getValues()) }));
    };
  }, []);
  useEffect(() => {
    reset({ ...finalData });
  }, [finalData, reset]);
  useEffect(() => {
    const keys = Object.keys(errors);
    if (keys.length > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  }, [errors]);
  // Submit Form
  const onSubmit = (data) => {
    console.log(data);
    handleNextTab();
  };
  console.log("upload resource", getValues(), finalData);
  return (
    <WrapUploadResource imagesDisplay={images.length >= 10 ? "none" : ""}>
      <form className="form_upload" onSubmit={handleSubmit(onSubmit)}>
        <div className="upload_item">
          <div className="label">
            <p>Upload Avatar *</p>

            <p className="error_message">{errors.uploadavatar?.message}</p>
            <p className="hint">
              - The file size must be less than{" "}
              <span className="special">2MB</span>
            </p>
            <p className="hint">
              - File must be <span className="special">255px</span> of width and{" "}
              <span className="special">390px</span> of height
            </p>
            <p className="hint">
              - The type must be <span className="special">image/jpeg</span> or
              <span className="special"> image/png</span> or{" "}
              <span className="special"> image/jpg</span>
            </p>
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
            <p className="hint">
              - The file size must be less than{" "}
              <span className="special">3MB</span>
            </p>
            <p className="hint">
              - You must upload at least{" "}
              <span className="special">2 images</span> and max is{" "}
              <span className="special"> 10 images</span>
            </p>
            <p className="hint">
              - The type must be <span className="special">image/jpeg</span> or
              <span className="special"> image/png</span> or{" "}
              <span className="special"> image/jpg</span>
            </p>
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
