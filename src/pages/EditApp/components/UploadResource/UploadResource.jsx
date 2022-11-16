import { Image } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getBase64, URL_API } from '../../../../utils';
import { hintUploadCover, hintUploadScreenshot } from '../../constant';
import ScreenshotList from '../ScreenshotList/ScreenshotList';
import UpdateAPKDetail from '../UpdateAPKDetail/UpdateAPKDetail';
import UploadImage from '../UploadImage/UploadImage';
import { UploadResourceWrapper } from './styled';
import UploadAPK from './UploadAPK/UploadAPK';
import UploadVideo from './UploadVideo/UploadVideo';

const UploadResource = ({ control, errors, defaultValues, setError, setValue }) => {
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
    setValue('apkfile', data.fileList[0] || []);
  };
  const handleChangeAppVersion = (e) => {
    if (e.target.value !== '') {
      setError('app_version');
    } else {
      setError('app_version', {
        type: 'required',
        message: 'App version is required when you update new app apk',
      });
    }
  };
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
      <UploadAPK
        control={control}
        errors={errors}
        onChange={handleChangeAPK}
        apkfile_init={defaultValues?.apkfile_init}
      />
      {isUpdateAPK && (
        <UpdateAPKDetail control={control} errors={errors} onChange={handleChangeAppVersion} />
      )}
      <UploadVideo
        control={control}
        errors={errors}
        onChange={handleChangeVideo}
        video_init={defaultValues?.video_init}
        previewVideo={previewVideo}
      />
    </UploadResourceWrapper>
  );
};

export default React.memo(UploadResource);
