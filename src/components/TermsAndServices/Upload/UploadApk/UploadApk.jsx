import { UploadOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Upload } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import StepButtonGroup from '../StepButtonGroup/StepButtonGroup';
import InputText from '../UploadAppDetail/InputText';
import { UploadContextWrapper } from '../UploadAppDetailWrapper/UploadAppDetailWrapper';
import { UploadAplWrapper } from './styled';

const schema = yup.object().shape({
  fileapk: yup
    .mixed()
    .required('File APK is required')
    .test('fileSize', 'The file is too large', (value) => {
      if (!value) {
        return true;
      }
      return value[0].size / 1024 / 1024 < 200;
    }),
  app_version: yup.string().required('App version is required'),
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
    return () => {};
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
  const promiseSetState = () => {
    return new Promise((resolve) =>
      setFinalData((prevData) => ({
        ...Object.assign(prevData, getValues()),
        resolve,
      }))
    );
  };
  const onSubmit = async () => {
    const cloneFinalData = Object.assign(Object.assign(finalData, getValues()));
    const formData = new FormData();
    const keys = Object.keys(cloneFinalData);
    console.log('Clone data', cloneFinalData);
    for (let v of keys) {
      if (v === 'uploadavatar') {
        formData.append(v, cloneFinalData[v][0]?.originFileObj);
      } else if (v === 'images') {
        const newImages = [];
        for (let image of cloneFinalData[v]) {
          let item = image.originFileObj;
          newImages.push(item);
        }
        for (let i = 0; i < newImages.length; i++) {
          formData.append('images[]', newImages[i], newImages[i].name);
        }
      } else if (v === 'fileapk') {
        formData.append(v, cloneFinalData[v][0]?.originFileObj);
      } else if (v === 'information' || v === 'app_permissions') {
        if (cloneFinalData[v] && cloneFinalData[v].length > 0) {
          console.log(cloneFinalData[v]);
          cloneFinalData[v] = cloneFinalData[v].toString();
          formData.append(v, cloneFinalData[v]);
        }
      } else {
        formData.append(v, cloneFinalData[v]);
      }
    }

    submitForm(formData);
  };

  return (
    <UploadAplWrapper>
      <h1 className="section_title">Upload APK</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field_item">
          <div className="label">
            <label style={{ marginRight: '1rem' }} htmlFor="apk">
              Choose APK file
            </label>
            <p className="error_message">{errors.fileapk?.message}</p>
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
        <div className="field_item">
          <InputText
            register={{ ...register('app_version') }}
            title="App Version *"
            placeho="Enter App Version"
          />{' '}
          <p className="error_message">{errors.app_version?.message}</p>
        </div>
        <StepButtonGroup disabledSubmit={disabledSubmit} />
      </form>
    </UploadAplWrapper>
  );
}
