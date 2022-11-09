import { InboxOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form, Image, Input, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteScreenshot,
  editApp,
  getCategoriesAndLanguage,
  getDetailAppWithLange,
} from "../../../../redux/slice/detailApp.slice";

import { ConvertToFormData } from "../../../../helpers/formData";
import Loading from "../../../../layout/components/Loading/Loading";
import { getFileName, URL_API } from "../../../../utils";
import { Cost, schema, Types } from "./constant";
import { EditAppWrapper } from "./styled";
import UploadSingleAvatar from "../UploadSingleAvatar/UploadSingleAvatar";
import UploadMultipleImage from "../UploadMultipleImage/UploadMultipleImage";
const { Dragger } = Upload;

export default function EditApp() {
  const dispatch = useDispatch();
  const params = useParams();
  const {
    getValues,
    control,
    handleSubmit,
    reset,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      price: null,
    },
    resolver: yupResolver(schema),
  });

  const {
    languages,
    categories,
    isLoading,
    detailAppWithLang,
    isLoadingDeleteScreenshot,
    isLoadingEditApp,
  } = useSelector((state) => state.detailApp);
  const [isAppFree, setIsAppFree] = useState(true);
  const [locale, setLocale] = useState("");

  const navigate = useNavigate();
  const InputFields = [
    [
      {
        name: "appid",
        label: "App ID",
        placeholder: "Enter App ID",
        disabled: true,
      },
      {
        name: "title",
        label: "Title",
        placeholder: "Enter App Title",
      },
    ],
    [
      {
        name: "summary",
        label: "Summary",
        placeholder: "Enter Summary",
      },
      {
        name: "full_description",
        label: "Description",
        placeholder: "Enter Description",
      },
    ],

    [
      {
        name: "recent_change",
        label: "Recent Change",
        placeholder: "Enter Recent Change",
      },
      {
        name: "app_version",
        label: "App Version",
        placeholder: "Enter App Version",
      },
    ],
    [
      {
        name: "privacy_policy",
        label: "Privacy Policy",
        placeholder: "Enter Privacy Policy",
      },
      {
        name: "term_of_policy",
        label: "Term Of Policy",
        placeholder: "Enter Term Of Policy",
      },
    ],
    [
      {
        name: "app_support",
        label: "App Support",
        placeholder: "Enter App Support",
      },
    ],
    // {
    //   name: "price",
    //   label: "Price",
    //   placeholder: "Enter Price",
    //   type: "number",
    // },
  ];
  const SelectField = [
    [
      {
        name: "category",
        label: "Category",
        data: categories,
      },
      {
        name: "type",
        label: "Type",
        data: Types,
      },
    ],
    [
      {
        name: "free",
        label: "Cost",
        data: Cost,
      },

      {
        name: "country_of_service",
        label: "Country Of Service",
        data: languages,
      },
    ],
    // {
    //   name: "locale",
    //   label: "Locale",
    //   data: languages,
    // },
  ];
  const renderOption = (data) => {
    const mainOption = data.data?.map((item) => {
      return {
        value: item.locale_code || item.id,
        label: item.language || item.title,
      };
    });
    const res = [
      {
        value: "",
        label: `Select App ${data.label}`,
        disabled: true,
      },
      ...mainOption,
    ];
    return res;
  };

  const propsUploadAvatar = {
    listType: "picture",
    accept: "image/png, image/jpeg",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: (info) => {},
    onDrop(e) {},
  };
  const handleGetDetailApp = () => {
    dispatch(getDetailAppWithLange({ slug: params?.slug, lang: locale }));
  };
  const redirectToAccount = () => {
    navigate("/account");
  };
  const submitForm = (value) => {
    let payload = Object.assign(getValues(), { locale });
    if (!isAppFree && payload.price === undefined) {
      setError("price", {
        type: "required",
        message: "Price is required when you set app is Pay",
      });
      return;
    }
    if (!detailAppWithLang?.data?.app?.screenshots && !payload.images) {
      setError("images", {
        type: "required",
        message: "Images is required",
      });
      return;
    }
    const keys = Object.keys(payload);
    for (let v of keys) {
      if (v === "cover") {
        if (payload["cover"]?.file) {
          payload["cover"] = payload["cover"].file?.originFileObj;
        } else {
          payload.cover = detailAppWithLang?.data?.app?.cover;
        }
      } else if (v === "apkfile") {
        if (payload["apkfile"]?.file) {
          payload["apkfile"] = payload["apkfile"].file?.originFileObj;
        } else {
          payload["apkfile"] = detailAppWithLang?.data?.app?.file_apk;
        }
      } else if (v === "images") {
        if (payload["images"]?.fileList) {
          payload["images"] = [...payload["images"].fileList];
        }
      }
    }
    console.log(payload);
    const formData = ConvertToFormData(payload);
    dispatch(editApp({ data: formData, callBack: redirectToAccount }));
  };
  const handleChangeAppCost = (value) => {
    setValue("free", value);
    console.log(value);
    if (value === "1") {
      setIsAppFree(false);
    } else if (value === "0") {
      setIsAppFree(true);
    }
  };

  const handleDeleteScreenshot = (imgUrl) => {
    console.log(imgUrl);
    dispatch(
      deleteScreenshot({
        name_image: imgUrl,
        appid: detailAppWithLang?.data?.app?.appid,
        reload: handleGetDetailApp,
      })
    );
  };
  // Initial value of form
  useEffect(() => {
    const formKeys = Object.keys(getValues());
    const resetValue = {};
    if (detailAppWithLang) {
      if (detailAppWithLang?.data?.app?.is_pay === "1") {
        setIsAppFree(false);
      } else if (detailAppWithLang?.data?.app?.is_pay === "0") {
        setIsAppFree(true);
      }
      for (let v of formKeys) {
        if (v === "locale") {
          resetValue[v] = "";
        } else if (v === "cover" || v === "images" || v === "apkfile") {
          continue;
        } else if (v === "type") {
          switch (detailAppWithLang?.data?.app?.type) {
            case "1":
              resetValue[v] = "nft";
              break;
            case "2":
              resetValue[v] = "metaverse";
              break;
            default:
              resetValue[v] = "play-to-earn";
              break;
          }
        } else if (v === "full_description") {
          if (detailAppWithLang?.data.info) {
            resetValue[v] = detailAppWithLang?.data?.info["description"];
          } else {
            resetValue[v] = "";
          }
        } else if (v === "country_of_service") {
          if (detailAppWithLang?.data.info) {
            resetValue[v] = detailAppWithLang?.data?.info["country"];
          } else {
            resetValue[v] = "";
          }
        } else if (v === "free") {
          resetValue[v] = detailAppWithLang?.data?.app?.is_pay;
        } else {
          if (detailAppWithLang?.data?.info) {
            resetValue[v] =
              detailAppWithLang?.data?.app[v] ||
              detailAppWithLang?.data?.info[v] ||
              "";
          } else {
            resetValue[v] = detailAppWithLang?.data?.app[v] || "";
          }
        }
      }
    }
    resetValue["price"] = Number(detailAppWithLang?.data?.app?.price).toFixed(
      0
    );
    reset(resetValue);
  }, [detailAppWithLang, getValues]);
  useEffect(() => {
    dispatch(getCategoriesAndLanguage());
  }, []);
  return (
    <EditAppWrapper>
      <h1 style={{ textAlign: "center" }}>EDIT APP</h1>
      <Form onFinish={handleSubmit(submitForm)}>
        {Object.keys(languages).length > 0 ? (
          <div className="locale">
            <p>Locale :</p>
            <Select
              defaultValue=""
              onChange={(e) => {
                reset({});
                setLocale(e);

                dispatch(
                  getDetailAppWithLange({ slug: params?.slug, lang: e })
                );
                // handleGetDetailApp();
              }}
              options={[
                {
                  value: "",
                  label: "Choo App locale to edit",
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
                          // <Form.Item label={item.label}>

                          // </Form.Item>
                          <div className="field-item">
                            <label className="fieldLabel">{item.label} :</label>

                            <Input
                              disabled={item?.disabled || false}
                              {...field}
                              placeholder={item.placeholder}
                              type={item.type || "text"}
                            />
                            <p className="error_message">
                              {errors[item.name]?.message}
                            </p>
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
                          // <Form.Item label={item.label}>

                          // </Form.Item>
                          <div className="field-item">
                            <label className="fieldLabel">{item.label} :</label>
                            <Select
                              {...field}
                              defaultValue=""
                              onChange={
                                item.name === "free"
                                  ? handleChangeAppCost
                                  : field.onChange
                              }
                              options={renderOption(item)}
                            />
                            <p className="error_message">
                              {errors[item.name]?.message}
                            </p>
                          </div>
                        )}
                      />
                    );
                  })}
                </div>
              );
            })}
            {!isAppFree && (
              <div className="field-item">
                {" "}
                <Controller
                  style={{ width: "100%" }}
                  control={control}
                  name="price"
                  render={({ field }) => (
                    <Form.Item label="App Price">
                      <Input
                        {...field}
                        placeholder="Enter App price"
                        type="number"
                      />
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
            {/* <Controller
                  control={control}
                  name="cover"
                  render={({ field }) => (
                    <Form.Item label="App avatar">
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
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Upload your new avatar
                        </p>
                      </Dragger>
                      {detailAppWithLang?.data?.app?.cover && (
                        <div className="cover-wrapper">
                          <p>Current Cover :</p>
                          <Image
                            preview={false}
                            src={`${URL_API}/${detailAppWithLang?.data?.app?.cover}`}
                            alt="Current Cover"
                            className="cover"
                          />
                        </div>
                      )}
                      <p className="error_message">{errors.cover?.message}</p>
                    </Form.Item>
                  )}
                /> */}
            <Controller
              control={control}
              name="images"
              render={({ field }) => (
                <Form.Item label="App Images">
                  <Dragger
                    {...propsUploadAvatar}
                    {...field}
                    multiple={true}
                    // maxCount={1}
                    listType="picture"
                    accept="image/png, image/jpeg"
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Upload your new app's screenshot
                    </p>
                  </Dragger>

                  <div className="screenshots-wrapper">
                    <p
                      style={{
                        textTransform: "uppercase",
                        margin: "3rem 0",
                      }}
                    >
                      Current Screenshots:{" "}
                    </p>
                    {!isLoadingDeleteScreenshot ? (
                      <div className="screenshots">
                        {detailAppWithLang?.data?.app?.screenshots ? (
                          JSON.parse(
                            detailAppWithLang?.data?.app?.screenshots
                          ).map((item, index) => {
                            return (
                              <div className="image" key={index}>
                                <Image
                                  key={index}
                                  className="screenshot"
                                  style={{
                                    marginTop: "1rem",
                                    borderRadius: "1rem",
                                  }}
                                  preview={false}
                                  src={`${URL_API}${item}`}
                                  alt="screenshot"
                                />

                                <Button
                                  type="danger"
                                  onClick={() => handleDeleteScreenshot(item)}
                                >
                                  x
                                </Button>
                              </div>
                            );
                          })
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
            {/* <UploadMultipleImage
                  control={control}
                  defaultImages={JSON.parse(
                    detailAppWithLang?.data?.app?.screenshots
                  )}
                  errMessage={errors.images?.message}
                  name="images"
                  onDeleteScreenshot={handleDeleteScreenshot}
                  label="App Screenshots"
                /> */}
            <Controller
              control={control}
              name="apkfile"
              render={({ field }) => (
                <Form.Item label="App Apk">
                  <Dragger {...field} multiple={false} accept=".apk">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">Upload your new apk</p>
                  </Dragger>
                  <p className="error_message">{errors.apkfile?.message}</p>
                  {detailAppWithLang?.data?.app?.file_apk && (
                    <p
                      style={{
                        border: "1px dashed black",
                        padding: "1rem",
                        marginTop: "2rem",
                        cursor: "not-allowed",
                      }}
                    >
                      {getFileName(detailAppWithLang?.data?.app?.file_apk)}
                    </p>
                  )}
                </Form.Item>
              )}
            />
          </>
        )}

        {locale !== "" && (
          <Button htmlType="submit" loading={isLoadingEditApp}>
            Update App
          </Button>
        )}
      </Form>
    </EditAppWrapper>
  );
}
