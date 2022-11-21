import React from 'react';
import { URL_API } from '../../../../../utils';
import { hintUploadAPK, hintUploadVideo } from '../../../constant';
import UploadFile from '../../UploadFile/UploadFile';

const UploadVideo = ({ control, errors, onChange, previewVideo, video_init }) => {
  console.log(video_init);
  return (
    <div className="upload_resource__item upload_video">
      <UploadFile
        control={control}
        hints={hintUploadVideo}
        errMessage={errors?.video?.message}
        name="video"
        label="Upload Video"
        maxCount={1}
        accept=".mp4"
        onChange={onChange}
      />
      <div className="initial_content">
        <div className="video">
          {previewVideo && (
            <div className="new_video video__item">
              <p>New Video</p>
              <video controls src={`${previewVideo}`} />
            </div>
          )}
          {video_init && (
            <div className="current_video video__item">
              <p>Current video</p>
              <video controls src={`${URL_API}${video_init}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
