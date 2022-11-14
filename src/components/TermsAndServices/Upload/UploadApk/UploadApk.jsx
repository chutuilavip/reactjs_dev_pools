import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import StepButtonGroup from '../StepButtonGroup/StepButtonGroup';
import { UploadContextWrapper } from '../UploadAppDetailWrapper/UploadAppDetailWrapper';
import { UploadAplWrapper } from './styled';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  fileapk: yup
    .mixed()
    .required()
    .test('fileSize', 'The file is too large', (value) => {
      if (!value) {
        return true;
      }
      return value[0].size / 1024 / 1024 < 200;
    }),
});
export default function UploadApk({ setFinalData, finalData }) {
  const DetailContext = useContext(UploadContextWrapper);
  const { submitForm, disabledSubmit, setDisabledSubmit, setIsDisabledPrev } = DetailContext;
  const {
    register,
    getValues,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [apk, setApk] = useState([]);
  const [forceRerender, setForceRerender] = useState(false);
  useEffect(() => {
    reset({ ...finalData });
  }, [finalData]);
  useEffect(() => {
    return () => {
      setFinalData((prevData) => ({
        ...Object.assign(prevData, getValues()),
      }));
    };
  }, []);
  useEffect(() => {
    setApk(finalData.fileapk);
  }, [finalData.fileapk]);

  const onChangeFile = (info) => {
    info.file.status = 'done';
    //   setForceRerender((prev) => !prev);
    //   setDisabledSubmit(true);
    //   setIsDisabledPrev(true);
    // } else {
    //   setDisabledSubmit(false);
    //   setIsDisabledPrev(false);
    // }
    setApk(info.fileList);
    setValue('fileapk', info.fileList);
    setFinalData((prevData) => ({
      ...Object.assign(prevData, getValues()),
    }));
  };
  const onSubmit = () => {
    submitForm();
  };
  console.log('upload apk', getValues(), finalData);

  return (
    <UploadAplWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field_item">
          <div className="label">
            <label style={{ marginRight: '1rem' }} htmlFor="apk">
              Choose APK file
            </label>
            <p className="error_field">{errors.fileapk?.message}</p>
            <p className="hint">
              - The file sime must be less than <span className="special">200MB</span>
            </p>
          </div>
          <Upload
            {...register('fileapk')}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            fileList={apk}
            accept=".apk"
            maxCount={1}
            onChange={onChangeFile}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </div>
        <StepButtonGroup disabledSubmit={disabledSubmit} />
      </form>
    </UploadAplWrapper>
  );
}
