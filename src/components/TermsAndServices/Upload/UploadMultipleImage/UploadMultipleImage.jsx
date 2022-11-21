import React from 'react';
import { Button, Form, Image, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Controller } from 'react-hook-form';
import { URL_API } from '../../../../utils';
const { Dragger } = Upload;
export default function UploadMultipleImage(
  control,
  defaultImages,
  errMessage,
  name,
  onDeleteScreenshot,
  label
) {
  const propsUploadAvatar = {
    listType: 'picture',
    accept: 'image/png, image/jpeg',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: (info) => {},
    onDrop(e) {},
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Dragger
            {...propsUploadAvatar}
            {...field}
            maxCount={1}
            listType="picture"
            accept="image/png, image/jpeg"
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Upload your new app's screenshot</p>
          </Dragger>

          <div className="screenshots-wrapper">
            <p
              style={{
                textTransform: 'uppercase',
                margin: '3rem 0',
              }}
            >
              Current Screenshots:{' '}
            </p>
            <div className="screenshots">
              {defaultImages.length > 0 ? (
                defaultImages?.map((item, index) => {
                  return (
                    <div className="image" key={index}>
                      <Image
                        key={index}
                        className="screenshot"
                        style={{
                          marginTop: '1rem',
                          borderRadius: '1rem',
                        }}
                        preview={false}
                        src={`${URL_API}${item}`}
                        alt="screenshot"
                      />

                      <Button type="danger" onClick={() => onDeleteScreenshot(item)}>
                        x
                      </Button>
                    </div>
                  );
                })
              ) : (
                <p>Nothing</p>
              )}
            </div>
          </div>

          <p className="error_message">{errMessage}</p>
        </Form.Item>
      )}
    />
  );
}
