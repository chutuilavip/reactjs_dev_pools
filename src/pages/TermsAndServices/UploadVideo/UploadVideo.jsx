import { Button, Upload } from "antd";
import React, { useState } from "react";

import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "../../../utils";
import { UploadVideoWrapper } from "./styled";

export default function PackageVideo() {
  const [video, setVideo] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
  const [previewVideo, setPreviewVideo] = useState();
  const [previewThumbnail, setPreviewThumbnail] = useState();
  const handleChangeVideo = async (info) => {
    const preview = await getBase64(info.file.originFileObj);
    setPreviewVideo(preview);
  };
  const handleChangeThumbnail = async (info) => {
    const preview = await getBase64(info.file.originFileObj);
    setPreviewThumbnail(preview);
  };
  console.log(previewVideo);
  return (
    <UploadVideoWrapper>
      <form action="">
        <div className="video flex_item">
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
          {previewVideo && <video controls src={previewVideo}></video>}
        </div>

        <div className="thumbnail flex_item">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            defaultFileList={[...thumbnail]}
            onChange={handleChangeThumbnail}
            accept="image/jpeg,image/png"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
          </Upload>
          {previewThumbnail && <img src={previewThumbnail}></img>}
        </div>
      </form>
    </UploadVideoWrapper>
  );
}
