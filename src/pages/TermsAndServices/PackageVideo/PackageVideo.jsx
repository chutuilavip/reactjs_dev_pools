import { UploadOutlined } from '@ant-design/icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Form, Input, Select, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConvertToFormData } from '../../../helpers/formData';
import Loading from '../../../layout/components/Loading/Loading';
import { buyServiceVideo } from '../../../redux/slice/detailApp.slice';
import { listAppNotService } from '../../../redux/slice/game.slice';
import { getBase64 } from '../../../utils';
import { PackageVideoWrapper } from './styled';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SmallLoading from '../../../layout/components/SmallLoading/SmallLoading';
export default function PackageVideo({ listAppService, selectedCard, selectedCardContent }) {
  const dispatch = useDispatch();
  const formRef = useRef();

  const [video, setVideo] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
  const [previewVideo, setPreviewVideo] = useState();
  const [previewThumbnail, setPreviewThumbnail] = useState();
  const { account } = useSelector((state) => state.web3);
  const { isLoadingBuyVideoService } = useSelector((state) => state.detailApp);

  const handleChangeVideo = async (info) => {
    setVideo(info.fileList);
    const preview = await getBase64(info.file.originFileObj);
    setPreviewVideo(preview);
  };
  const handleChangeThumbnail = async (info) => {
    setThumbnail(info.fileList);
    const preview = await getBase64(info.file.originFileObj);
    setPreviewThumbnail(preview);
  };
  const { isLoadingModalBuyBanner } = useSelector((state) => state.listGame);
  const onFinish = (values) => {
    values.url = values.url.file.originFileObj;
    values.poster = values.poster.file.originFileObj;
    values.creator_address = account;
    values.id_service = selectedCard;
    console.log(values);
    const formData = ConvertToFormData(values);
    dispatch(buyServiceVideo(formData))
      .unwrap()
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setPreviewThumbnail();
          setPreviewVideo();
          formRef.current.resetFields();
        }
      });
  };
  useEffect(() => {
    dispatch(listAppNotService(selectedCardContent?.type));
  }, []);
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  return (
    <PackageVideoWrapper>
      {isLoadingBuyVideoService ? (
        <div className="loading_wrapper" style={{ width: '100%', height: '30rem' }}>
          <SmallLoading />
        </div>
      ) : (
        <Form onFinish={onFinish} ref={formRef}>
          <div className="media">
            <div className="video flex_item">
              <Form.Item
                name="url"
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                  {
                    validator: (rule, value, callback) => {
                      console.log('validate', value);
                      if (value.file?.size / 1024 / 1024 > 10) {
                        return Promise.reject(new Error('The file size is too large'));
                      } else {
                        return Promise.resolve();
                      }
                    },
                  },
                ]}
              >
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
              </Form.Item>
              {previewVideo && <video controls src={previewVideo}></video>}
            </div>

            <div className="thumbnail flex_item">
              <Form.Item
                name="poster"
                rules={[
                  {
                    required: true,
                    message: 'This field is required',
                  },
                ]}
              >
                <Upload
                  customRequest={dummyRequest}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                  defaultFileList={[...thumbnail]}
                  onChange={handleChangeThumbnail}
                  accept="image/jpeg,image/png"
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
                </Upload>
              </Form.Item>
              {previewThumbnail && <img src={previewThumbnail}></img>}
            </div>
          </div>
          <div className="media-content">
            <Form.Item
              label="Video Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
                {
                  min: 10,
                  message: 'Min length of title must greater than 10 characters',
                },
                {
                  whitespace: true,
                  message: 'You can not set title only with whitespace ',
                },
              ]}
            >
              <Input placeholder="Enter video title" maxLength={255} />
            </Form.Item>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
                {
                  min: 10,
                  message: 'Min length of description must greater than 10 characters',
                },
              ]}
              label="Description"
            >
              <TextArea rows={4} placeholder="Enter video description" maxLength={500} />
            </Form.Item>

            <Form.Item name="description_2" label="Description 2">
              <CKEditor
                className="editor"
                editor={ClassicEditor}
                data=""
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              />
            </Form.Item>
            <Form.Item
              name="id"
              label="Select App"
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Select name="app" defaultValue="" style={{ width: '100%' }}>
                <Select.Option value="" disabled>
                  Select App
                </Select.Option>
                {listAppService?.res?.data?.my_apps?.map((item, index) => {
                  return <Select.Option value={item.id}>{item.title}</Select.Option>;
                })}
              </Select>
            </Form.Item>
          </div>
          <Form.Item>
            <Button style={{ margin: '2rem' }} loading={isLoadingBuyVideoService} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </PackageVideoWrapper>
  );
}
