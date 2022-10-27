import { Button, Form, Input, Select, Upload } from "antd";
import React, { useState } from "react";
import { PackageVideoWrapper } from "./styled";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "../../../utils";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { ConvertToFormData } from "../../../helpers/formData";
import { buyServiceVideo } from "../../../redux/slice/detailApp.slice";

export default function PackageVideo({ listAppService, selectedCard }) {
  const dispatch = useDispatch();
  const [video, setVideo] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
  const [previewVideo, setPreviewVideo] = useState();
  const [previewThumbnail, setPreviewThumbnail] = useState();
  const { account } = useSelector((state) => state.web3);
  const { isLoadingBuyVideoService } = useSelector((state) => state.detailApp);

  const handleChangeVideo = async (info) => {
    setVideo(info.fileList);
    const preview = await getBase64(info.file.originFileObj);
    setPreviewVideo(preview);
  };
  const handleChangeThumbnail = async (info) => {
    setThumbnail(info.fileList);
    const preview = await getBase64(info.file.originFileObj);
    setPreviewThumbnail(preview);
  };
  const onFinish = (values) => {
    values.url = values.url.file.originFileObj;
    values.poster = values.poster.file.originFileObj;
    values.creator_address = account;
    values.id_service = selectedCard;
    const formData = ConvertToFormData(values);
    dispatch(buyServiceVideo(formData));
  };
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <PackageVideoWrapper>
      <Form onFinish={onFinish}>
        <div className="media">
          <div className="video flex_item">
            <Form.Item
              name="url"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
                {
                  validator: (rule, value, callback) => {
                    console.log("validate", value);
                    if (value.file?.size / 1024 / 1024 > 10) {
                      return Promise.reject(
                        new Error("The file size is too large")
                      );
                    } else {
                      return Promise.resolve();
                    }
                  },
                },
              ]}
            >
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...video]}
                onChange={handleChangeVideo}
                accept="video/mp4"
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload Video</Button>
              </Upload>
            </Form.Item>
            {previewVideo && <video controls src={previewVideo}></video>}
          </div>

          <div className="thumbnail flex_item">
            <Form.Item
              name="poster"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Upload
                customRequest={dummyRequest}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...thumbnail]}
                onChange={handleChangeThumbnail}
                accept="image/jpeg,image/png"
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
              </Upload>
            </Form.Item>
            {previewThumbnail && <img src={previewThumbnail}></img>}
          </div>
        </div>
        <div className="media-content">
          <Form.Item
            label="Video Title"
            name="title"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
              {
                min: 10,
                message: "Min length of title must greater than 10 characters",
              },
              {
                whitespace: true,
                message: "You can not set title only with whitespace ",
              },
            ]}
          >
            <Input placeholder="Enter video title" maxLength={255} />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
              {
                min: 10,
                message:
                  "Min length of description must greater than 10 characters",
              },
            ]}
            label="Description"
          >
            <TextArea
              rows={4}
              placeholder="Enter video description"
              maxLength={500}
            />
          </Form.Item>

          <Form.Item
            name="id"
            label="Select App"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Select name="app" defaultValue="" style={{ width: "100%" }}>
              <Select.Option value="" disabled>
                Select App
              </Select.Option>
              {listAppService?.res?.data?.my_apps?.map((item, index) => {
                return (
                  <Select.Option value={item.id}>{item.title}</Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </div>
        <Form.Item>
          <Button loading={isLoadingBuyVideoService} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </PackageVideoWrapper>
  );
}
