import { Form } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import React from 'react';
import { Controller } from 'react-hook-form';
import { InboxOutlined } from '@ant-design/icons';

const UploadFile = ({ errMessage, control, hints, name, label, accept, onChange }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Dragger
            {...field}
            multiple={false}
            onChange={(e) => {
              field.onChange(e);
              onChange && onChange(e);
              e.file.status = 'done';
            }}
            accept={accept}
            maxCount={1}
            valuePropName="fileList"
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Upload your new apk</p>
          </Dragger>
          <div className="note">
            {hints?.map((item, index) => (
              <p className="hint" key={`hint-${index}`}>
                {item}
              </p>
            ))}
          </div>
          <p className="error_message">{errMessage}</p>
        </Form.Item>
      )}
    />
  );
};

export default UploadFile;
