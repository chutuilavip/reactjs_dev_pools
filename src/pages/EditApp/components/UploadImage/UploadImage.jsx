import { Form } from 'antd'
import Dragger from 'antd/lib/upload/Dragger'
import React from 'react'
import { Controller } from 'react-hook-form'
import { InboxOutlined } from '@ant-design/icons'

const UploadImage = ({ control, hints, errMessage, name, label, maxCount, multiple }) => {
  const propsUploadSingleAvatar = {
    listType: 'picture',
    accept: 'image/png, image/jpeg',
    multiple,
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: (info) => {},
    onDrop(e) {},
  }
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Dragger
              {...propsUploadSingleAvatar}
              {...field}
              maxCount={maxCount}
              listType="picture"
              accept="image/png, image/jpeg"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Upload your new avatar</p>
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
    </div>
  )
}

export default UploadImage
