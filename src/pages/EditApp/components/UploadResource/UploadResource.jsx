import { Image } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteScreenshot } from '../../../../redux/slice/detailApp.slice';
import { getBase64, getFileName, URL_API } from '../../../../utils';
import { hintUploadAPK, hintUploadCover, hintUploadScreenshot } from '../../constant';
import ScreenshotList from '../ScreenshotList/ScreenshotList';
import UpdateAPKDetail from '../UpdateAPKDetail/UpdateAPKDetail';
import UploadFile from '../UploadFile/UploadFile';
import UploadImage from '../UploadImage/UploadImage';
import { UploadResourceWrapper } from './styled';

const UploadResource = ({ control, errors, defaultValues, setError }) => {
  const dispatch = useDispatch();
  const [forceRerender, setForceRerender] = React.useState(false);
  const [previewVideo, setPreviewVideo] = React.useState(null);
  const [isUpdateAPK, setIsUpdateAPK] = React.useState(false);
  const handleChangeVideo = async (info) => {
    if (info.fileList.length === 0) {
      setPreviewVideo(null);
      return;
    }
    const preview = await getBase64(info.fileList[0].originFileObj);
    setPreviewVideo(preview);
  };
  const handleChangeAPK = (data) => {
    console.log(data.fileList.length);
    if (data.fileList.length === 1) {
      setIsUpdateAPK(true);
      setError('app_version', {
        type: 'required',
        message: 'App version is required when you update new app apk',
      });
    } else {
      setIsUpdateAPK(false);
      setError('app_version');
    }
  };
  console.log('defaultValuesdefaultValuesdefaultValues', defaultValues);
  return (
    <UploadResourceWrapper>
      <div className="upload_resource__item upload-cover">
        <UploadImage
          control={control}
          hints={hintUploadCover}
          errMessage={errors?.cover?.message}
          name="cover"
          label="Upload Cover"
          maxCount={1}
        />
        <div className="initial_content">
          <Image
            className="cover"
            style={{
              marginTop: '1rem',
              borderRadius: '1rem',
            }}
            preview={false}
            src={`${URL_API}/${defaultValues?.cover_init}`}
            alt="cover"
          />
        </div>
      </div>

      <div className="upload_resource__item upload_images">
        <UploadImage
          control={control}
          hints={hintUploadScreenshot}
          errMessage={errors?.images?.message}
          name="images"
          label="Upload Images"
          multiple
        />
        <div className="initial_content">
          <ScreenshotList defaultValues={defaultValues} />
        </div>
      </div>
      <div className="upload_resource__item upload_apk">
        {' '}
        <UploadFile
          control={control}
          hints={hintUploadAPK}
          errMessage={errors?.apkfile?.message}
          onChange={handleChangeAPK}
          name="apkfile"
          label="Upload APK"
          maxCount={1}
          accept=".apk"
        />
        <div className="initial_content">
          <p
            style={{
              border: '1px dashed black',
              padding: '1rem',
              marginTop: '2rem',
              cursor: 'not-allowed',
            }}
          >
            {getFileName(defaultValues.apkfile_init)}
          </p>
        </div>
      </div>
      {isUpdateAPK && <UpdateAPKDetail control={control} errors={errors} />}

      <div className="upload_resource__item upload_video">
        {' '}
        <UploadFile
          control={control}
          hints={hintUploadAPK}
          errMessage={errors?.video?.message}
          name="video"
          label="Upload Video"
          maxCount={1}
          accept=".mp4"
          onChange={handleChangeVideo}
        />
        <div className="initial_content">
          <div className="video">
            {previewVideo && (
              <div className="new_video video__item">
                <p>New Video</p>
                <video controls src={`${previewVideo}`} />
              </div>
            )}
            {defaultValues.video_init && (
              <div className="current_video video__item">
                <p>Current video</p>
                <video controls src={`${URL_API}${defaultValues?.video_init}`} />
              </div>
            )}
          </div>
        </div>
      </div>
    </UploadResourceWrapper>
  );
};

export default React.memo(UploadResource);
