import React from 'react';
import { getFileName } from '../../../../../utils';
import { hintUploadAPK } from '../../../constant';
import UploadFile from '../../UploadFile/UploadFile';

const UploadAPK = ({ control, errors, onChange, apkfile_init }) => {
  return (
    <div className="upload_resource__item upload_apk">
      {' '}
      <UploadFile
        control={control}
        hints={hintUploadAPK}
        errMessage={errors?.apkfile?.message}
        onChange={onChange}
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
          {getFileName(apkfile_init)}
        </p>
      </div>
    </div>
  );
};

export default UploadAPK;
