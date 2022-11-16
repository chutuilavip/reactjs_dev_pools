import { InboxOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Image, Input, Popconfirm, Select, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  deleteScreenshot,
  editApp,
  getAppPermissionAndInfoCollection,
  getCategoriesAndLanguage,
  getDetailAppWithLange,
} from '../../../../redux/slice/detailApp.slice';

import { ConvertToFormData } from '../../../../helpers/formData';
import Loading from '../../../../layout/components/Loading/Loading';
import { getBase64, getFileName, URL_API } from '../../../../utils';
import UploadSingleAvatar from '../UploadSingleAvatar/UploadSingleAvatar';
import { Cost, InputFields, EditAppSchema, Types } from './constant';
import { EditAppWrapper } from './styled';
const { Dragger } = Upload;

export default function EditApp() {
  const dispatch = useDispatch();
  const params = useParams();
  const {
    getValues,
    control,
    setFocus,
    handleSubmit,
    reset,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      price: null,
    },
    resolver: yupResolver(EditAppSchema),
  });

  const {
    languages,
    categories,
    isLoading,
    detailAppWithLang,
    isLoadingDeleteScreenshot,
    isLoadingEditApp,
    app_permission,
    information,
  } = useSelector((state) => state.detailApp);
  const [isAppFree, setIsAppFree] = useState(true);
  const [locale, setLocale] = useState('');
  const [previewVideo, setPreviewVideo] = useState(null);

  const navigate = useNavigate();

  const SelectField = [
    [
      {
        name: 'category',
        label: 'Category',
        data: categories,
      },
      {
        name: 'type',
        label: 'Type',
        data: Types,
      },
    ],
    [
      {
        name: 'free',
        label: 'Cost',
        data: Cost,
      },

      {
        name: 'country_of_service',
        label: 'Country Of Service',
        data: languages,
      },
      {
        name: 'otherlanguages',
        label: 'Other Languages',
        data: languages,
      },
    ],
  ];
  const renderOption2 = (options) => {
    return options.map((option, index) => {
      return {
        value: `${option.id}`,
        label: option.language || option.title,
      };
    });
  };
  const renderOption = (data) => {
    console.log();
    const mainOption = data.data?.map((item) => {
      if (data.name === 'otherlanguages') {
        return {
          value: item.code,
          label: item.language || item.title,
        };
      } else {
        return {
          value: item.locale_code || item.id,
          label: item.language || item.title,
        };
      }
    });
    console.log('---------------------------------------------------', data);

    if (mainOption) {
      const res = [
        {
          value: '',
          label: `Select App ${data.label}`,
          disabled: true,
        },
        ...mainOption,
      ];
      return res;
    }
  };

  const propsUploadAvatar = {
    listType: 'picture',
    accept: 'image/png, image/jpeg',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: (info) => {},
    onDrop(e) {},
  };
  const handleGetDetailApp = () => {
    dispatch(getDetailAppWithLange({ slug: params?.slug, lang: locale }));
  };
  const redirectToAccount = () => {
    navigate('/created-app');
  };
  const submitForm = (value) => {
    let payload = Object.assign(getValues(), { locale });
    if (typeof payload.video !== 'string' && payload.video) {
      console.log('payload.videopayload.video', payload.video);
      payload.video = payload.video.fileList[0]?.originFileObj || null;
    }
    console.log(isAppFree, payload);
    if (!isAppFree && !Number(payload.price)) {
      setError('price', {
        type: 'required',
        message: 'Price is required when you set app is Pay',
      });
      setFocus('price');
      return;
    }
    if (!detailAppWithLang?.data?.app?.screenshots && !payload.images) {
      setError('images', {
        type: 'required',
        message: 'Images is required',
      });
      return;
    }
    const keys = Object.keys(payload);
    for (let v of keys) {
      if (v === 'cover') {
        if (payload['cover']?.file) {
          payload['cover'] = payload['cover'].file?.originFileObj;
        } else {
          payload.cover = detailAppWithLang?.data?.app?.cover;
        }
      } else if (v === 'apkfile') {
        if (payload['apkfile']?.file) {
          payload['apkfile'] = payload['apkfile'].file?.originFileObj;
        } else {
          payload['apkfile'] = detailAppWithLang?.data?.app?.file_apk;
        }
      } else if (v === 'images') {
        if (payload['images']?.fileList) {
          payload['images'] = [...payload['images'].fileList];
        }
      }
    }
    const formData = ConvertToFormData(payload);
    dispatch(editApp({ data: formData, callBack: redirectToAccount }));
    console.log(value);
  };
  const handleChangeAppCost = (value) => {
    setValue('free', value);
    if (value === '1') {
      setIsAppFree(false);
    } else if (value === '0') {
      setIsAppFree(true);
    }
  };

  const handleDeleteScreenshot = (imgUrl) => {
    dispatch(
      deleteScreenshot({
        name_image: imgUrl,
        appid: detailAppWithLang?.data?.app?.appid,
        reload: handleGetDetailApp,
      })
    );
  };
  useEffect(() => {
    dispatch(getAppPermissionAndInfoCollection());
  }, []);
  // Initial value of form
  useEffect(() => {
    const formKeys = Object.keys(getValues());
    const resetValue = {};
    if (detailAppWithLang) {
      if (detailAppWithLang?.data?.app?.is_pay === '1') {
        setIsAppFree(false);
      } else if (detailAppWithLang?.data?.app?.is_pay === '0') {
        setIsAppFree(true);
      }
      for (let v of formKeys) {
        if (v === 'locale') {
          resetValue[v] = '';
        } else if (v === 'cover' || v === 'images' || v === 'apkfile') {
          continue;
        } else if (v === 'type') {
          switch (detailAppWithLang?.data?.app?.type) {
            case '1':
              resetValue[v] = 'nft';
              break;
            case '2':
              resetValue[v] = 'metaverse';
              break;
            default:
              resetValue[v] = 'play-to-earn';
              break;
          }
        } else if (v === 'full_description') {
          if (detailAppWithLang?.data.info) {
            resetValue[v] = detailAppWithLang?.data?.info['description'];
          } else {
            resetValue[v] = '';
          }
        } else if (v === 'country_of_service') {
          if (detailAppWithLang?.data.info) {
            resetValue[v] = detailAppWithLang?.data?.info['country'];
          } else {
            resetValue[v] = '';
          }
        } else if (v === 'otherlanguages') {
          if (detailAppWithLang?.data.info) {
            resetValue[v] = detailAppWithLang?.data?.info['other_languages'];
          } else {
            resetValue[v] = '';
          }
        } else if (v === 'app_permission_id') {
          if (detailAppWithLang?.data.info) {
            resetValue[v] = detailAppWithLang?.data?.app['app_permission_id']?.split(',');
          } else {
            resetValue[v] = '';
          }
        } else if (v === 'information_collected_id') {
          if (detailAppWithLang?.data.info) {
            resetValue[v] = detailAppWithLang?.data?.app['information_collected_id']?.split(',');
          } else {
            resetValue[v] = '';
          }
        } else if (v === 'free') {
          resetValue[v] = detailAppWithLang?.data?.app?.is_pay;
        } else {
          if (detailAppWithLang?.data?.info) {
            resetValue[v] =
              detailAppWithLang?.data?.app[v] || detailAppWithLang?.data?.info[v] || '';
          } else {
            resetValue[v] = detailAppWithLang?.data?.app[v] || '';
          }
        }
      }
    }
    resetValue['price'] = Number(detailAppWithLang?.data?.app?.price).toFixed(0);
    console.log('resetValueresetValueresetValueresetValueresetValueresetValue', resetValue);
    reset(resetValue);
  }, [detailAppWithLang, getValues]);
  useEffect(() => {
    dispatch(getCategoriesAndLanguage());
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const generateVideoPreview = () => {
    if (!previewVideo) {
      return `${URL_API}${getValues('video')}`;
    } else {
      return previewVideo;
    }
  };
  console.log(errors);
  return (
    <EditAppWrapper>
      <h1 style={{ textAlign: 'center' }}>EDIT APP</h1>
      <Form onFinish={handleSubmit(submitForm)}>
        <h1>Step 1 : Choo your app's locale</h1>
        {Object.keys(languages).length > 0 ? (
          <div className="locale">
            <p className="fieldLabel">Locale :</p>
            <Select
              defaultValue=""
              onChange={(e) => {
                reset({});
                setLocale(e);
                dispatch(getDetailAppWithLange({ slug: params?.slug, lang: e }));
              }}
              options={[
                {
                  value: '',
                  label: 'Choo App locale to edit',
                  disabled: true,
                },
                ...languages.map((item, index) => {
                  return {
                    value: item.code,
                    label: item.language,
                  };
                }),
              ]}
            />
          </div>
        ) : (
          <Loading />
        )}
        {locale && (
          <>
            <hr />
            <h1>Step 2 : Edit your app</h1>
            {InputFields.map((row, index) => {
              return (
                <div className="row" key={index}>
                  {row.map((item, index) => {
                    return (
                      <Controller
                        key={index}
                        control={control}
                        name={item.name}
                        render={({ field }) => (
                          <div className="field-item">
                            <label className="fieldLabel">{item.label} :</label>
                            <Input
                              disabled={item?.disabled || false}
                              {...field}
                              placeholder={item.placeholder}
                              type={item.type || 'text'}
                            />
                            <p className="error_message">{errors[item.name]?.message}</p>
                          </div>
                        )}
                      />
                    );
                  })}
                </div>
              );
            })}
            {SelectField.map((row, index) => {
              return (
                <div className="row" key={index}>
                  {row.map((item, index) => {
                    return (
                      <Controller
                        key={index}
                        control={control}
                        name={item.name}
                        render={({ field }) => (
                          <div className="field-item">
                            <label className="fieldLabel">{item.label} :</label>
                            <Select
                              {...field}
                              defaultValue=""
                              onChange={item.name === 'free' ? handleChangeAppCost : field.onChange}
                              options={renderOption(item)}
                            />
                            <p className="error_message">{errors[item.name]?.message}</p>
                          </div>
                        )}
                      />
                    );
                  })}
                </div>
              );
            })}
            <div className="row">
              <div className="fieldItem">
                <div className="field">
                  <p>App Permissions</p>
                  <Controller
                    name="app_permission_id"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        mode="multiple"
                        allowClear
                        style={{
                          flex: 1,
                        }}
                        placeholder="Please select"
                        options={renderOption2(app_permission)}
                      />
                    )}
                  />
                </div>
                <p className="error_message">{errors.app_permissions?.message}</p>{' '}
              </div>
              <div className="fieldItem">
                <div className="field">
                  <p>Information Collection</p>
                  <Controller
                    name="information_collected_id"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        mode="multiple"
                        allowClear
                        style={{
                          flex: 1,
                        }}
                        placeholder="Please select"
                        options={renderOption2(information)}
                      />
                    )}
                  />
                </div>
                <p className="error_message">{errors.information?.message}</p>{' '}
              </div>
            </div>
            {!isAppFree && (
              <div className="field-item">
                {' '}
                <Controller
                  style={{ width: '100%' }}
                  control={control}
                  name="price"
                  render={({ field }) => (
                    <Form.Item label="App Price">
                      <Input {...field} placeholder="Enter App price" type="number" />
                      <p className="error_message">{errors?.price?.message}</p>
                    </Form.Item>
                  )}
                />
              </div>
            )}
            <UploadSingleAvatar
              control={control}
              defaultAvatar={detailAppWithLang?.data?.app?.cover}
              errMessage={errors?.cover?.message}
              name="cover"
              label="App Cover"
            />
            <Controller
              control={control}
              name="images"
              render={({ field }) => (
                <Form.Item label="App Images">
                  <Dragger
                    {...propsUploadAvatar}
                    {...field}
                    multiple={true}
                    listType="picture"
                    accept="image/png, image/jpeg"
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Upload your new app's screenshot</p>
                  </Dragger>
                  <div className="note">
                    <p className="hint">
                      You must upload max
                      <span className="special"> 8 images</span>
                    </p>
                    <p className="hint">
                      The type must be <span className="special">image/jpeg</span> or
                      <span className="special"> image/png</span> or
                      <span className="special"> image/jpg</span>
                    </p>
                  </div>
                  <div className="screenshots-wrapper">
                    <p
                      style={{
                        textTransform: 'uppercase',
                        margin: '3rem 0',
                      }}
                    >
                      Current Screenshots:{' '}
                    </p>
                    {!isLoadingDeleteScreenshot ? (
                      <div className="screenshots">
                        {detailAppWithLang?.data?.app?.screenshots ? (
                          JSON.parse(detailAppWithLang?.data?.app?.screenshots).map(
                            (item, index) => {
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

                                  <Popconfirm
                                    title="Are you sure wanna delete this image？"
                                    okText="Yes"
                                    cancelText="No"
                                    onConfirm={() => handleDeleteScreenshot(item)}
                                  >
                                    <Button
                                      type="danger"
                                      onClick={() => handleDeleteScreenshot(item)}
                                    >
                                      x
                                    </Button>
                                  </Popconfirm>
                                </div>
                              );
                            }
                          )
                        ) : (
                          <p>Nothing</p>
                        )}
                      </div>
                    ) : (
                      <Loading />
                    )}
                  </div>

                  <p className="error_message">{errors.images?.message}</p>
                </Form.Item>
              )}
            />
            <Controller
              control={control}
              name="apkfile"
              render={({ field }) => (
                <Form.Item label="App Apk">
                  <Dragger {...field} multiple={false} accept=".apk" maxCount={1}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Upload your new apk</p>
                  </Dragger>
                  <div className="note">
                    <p className="hint">
                      The size of file must be less than
                      <span className="special"> 200MB</span>
                    </p>
                    <p className="hint">
                      The type must be <span className="special">APK</span>
                    </p>
                  </div>
                  <p className="error_message">{errors.apkfile?.message}</p>
                  {detailAppWithLang?.data?.app?.file_apk && (
                    <p
                      style={{
                        border: '1px dashed black',
                        padding: '1rem',
                        marginTop: '2rem',
                        cursor: 'not-allowed',
                      }}
                    >
                      {getFileName(detailAppWithLang?.data?.app?.file_apk)}
                    </p>
                  )}
                </Form.Item>
              )}
            />
            <Controller
              control={control}
              name="video"
              render={({ field }) => (
                <Form.Item label="App Video">
                  <Dragger
                    {...field}
                    onChange={async (info) => {
                      const preview = await getBase64(info?.fileList[0]?.originFileObj);
                      setPreviewVideo(preview);
                      // setValue('video', info?.fileList[0].originFileObj);
                      field.onChange(info);
                      console.log(info);
                    }}
                    onRemove={(e) => {
                      setPreviewVideo(null);
                      setValue('video', null);
                    }}
                    multiple={false}
                    accept=".mp4"
                    maxCount={1}
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Upload your new video</p>
                  </Dragger>
                  {(previewVideo || getValues('video')) && (
                    <video style={{ width: '30rem' }} controls src={generateVideoPreview()}></video>
                  )}
                  {/* <div className="note">
                    <p className="hint">
                      The size of file must be less than
                      <span className="special"> 200MB</span>
                    </p>
                    <p className="hint">
                      The type must be <span className="special">APK</span>
                    </p>
                  </div>
                  <p className="error_message">{errors.apkfile?.message}</p> */}
                  {/* {detailAppWithLang?.data?.app?.file_apk && (
                    <p
                      style={{
                        border: '1px dashed black',
                        padding: '1rem',
                        marginTop: '2rem',
                        cursor: 'not-allowed',
                      }}
                    >
                      {getFileName(detailAppWithLang?.data?.app?.file_apk)}
                    </p>
                  )} */}
                </Form.Item>
              )}
            />
          </>
        )}

        {locale !== '' && (
          <>
            <hr />
            <h1>Step 3: Update your app</h1>
            <Button
              style={{ width: '100%' }}
              type="primary"
              htmlType="submit"
              loading={isLoadingEditApp}
            >
              Update App
            </Button>
          </>
        )}
      </Form>
    </EditAppWrapper>
  );
}
