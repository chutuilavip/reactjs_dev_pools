import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Loading from "../../../../layout/components/Loading/Loading";
import SelectController from "../SelctController/SelectController";
import StepButtonGroup from "../StepButtonGroup/StepButtonGroup";
import { UploadContextWrapper } from "../UploadAppDetailWrapper/UploadAppDetailWrapper";
import InputText from "./InputText";
import { GroupInput, WrapAppDetail } from "./styled";
const Cost = [
  {
    code: "0",
    id: 0,
    title: "Free",
  },
  {
    code: "1",
    id: 1,
    title: "Pay",
  },
];
const schema = yup
  .object({
    title: yup.string().required(),
    appid: yup.string().required(),
    summary: yup
      .string()
      .required()
      .max(80, "Summary must be less than 80 characters"),
    full_description: yup
      .string()
      .required()
      .max(4000, "Description must be less than 4000 characters"),
  })
  .required();
const UploadAppDetail = ({ setFinalData, finalData }) => {
  const DetailContext = useContext(UploadContextWrapper);
  const { handleNextTab } = DetailContext;
  const [isPay, setIsPay] = useState(false);
  const priceRef = useRef();
  const { categories, languages, isLoading } = useSelector(
    (state) => state.detailApp
  );
  const {
    register,
    handleSubmit,
    control,
    getValues,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (Object.keys(finalData).length > 0) {
      console.log("ifffffffffffffff", finalData);
      reset({ ...finalData });
    } else {
      console.log("elllllllllllllllll");
      setValue("genre", categories[0]?.id);
      setValue("free", Cost[0]?.code);
      setValue("languages", languages[0]?.code);
      setValue("defaultlanguage", languages[0]?.code);
    }
  }, [categories, languages, Cost]);
  useEffect(() => {
    console.log("reset", finalData);
    if (finalData.free === "1") {
      setIsPay(true);
    }
    reset({ ...finalData });
  }, [finalData]);
  useEffect(() => {
    return () => {
      console.log("unMount", getValues());
      setFinalData((prevData) => ({
        ...Object.assign(prevData, getValues()),
      }));
    };
  }, []);
  const onSubmit = (data) => {
    if (getValues("free") === "1" && !Number(getValues("price"))) {
      setError("price", {
        type: "required",
        message: "Price is required when you set app's cost is Pay",
      });
      return;
    }
    handleNextTab();
  };
  useEffect(() => {
    if (getValues("free") === "0") {
      setValue("price", 0);
    }
  }, [getValues()]);
  console.log("upload app detail", getValues(), finalData);
  console.log(errors);
  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ marginBottom: "7rem" }}
        >
          <WrapAppDetail>
            <p className="title">Application Detail</p>
            <GroupInput>
              <div className="col_input_one">
                <div className="row">
                  <div className="field_item">
                    <InputText
                      register={{ ...register("title") }}
                      title="App Name *"
                      placeho="Enter App Name"
                    />
                    <p className="error_message">{errors.title?.message}</p>
                  </div>
                  <div className="field_item">
                    <InputText
                      register={{ ...register("appid") }}
                      title="App ID *"
                      placeho="Enter App ID"
                    />
                    <p className="error_message">{errors.appid?.message}</p>
                  </div>
                </div>
                <div className="row">
                  <SelectController
                    control={control}
                    name="genre"
                    ArrOption={categories}
                    title="Category"
                  />

                  <SelectController
                    control={control}
                    ArrOption={languages}
                    name="defaultlanguage"
                    title="default languages"
                  />
                </div>

                <div className="row">
                  {/* <SelectController
                    control={control}
                    title="Cost"
                    ArrOption={Cost}
                  /> */}

                  <div className="field_item">
                    <div className="free_item">
                      <p>Cost *</p>

                      <Controller
                        name="free"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            onChange={(e) => {
                              setIsPay(Number(e) === 1);
                              setError("price");
                              field.onChange(e);
                            }}
                            className="item_select"
                            defaultValue={Cost[0].code}
                          >
                            {Cost.map((item, index) => {
                              return (
                                <Select.Option key={index} value={item.code}>
                                  {item.title}
                                </Select.Option>
                              );
                            })}
                          </Select>
                        )}
                      />
                    </div>
                    <p className="error_message">{errors.free?.message}</p>{" "}
                  </div>

                  {!isPay ? (
                    <div className="field_item">
                      <p className="error_message">{errors?.price?.message}</p>
                    </div>
                  ) : (
                    <div className="field_item">
                      <InputText
                        register={{ ...register("price") }}
                        title="Price *"
                        placeho="Enter Price"
                        type="number"
                      />
                      <p className="error_message">{errors?.price?.message}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="description_group">
                <div className="description">
                  <p>Short Description *</p>
                  <div className="textarea">
                    <textarea
                      {...register("summary")}
                      placeholder="Enter Description"
                      maxLength={80}
                    ></textarea>
                    <div className="bottom_des">
                      <p>
                        Promote your app with a description to attract users
                      </p>
                      <span>max 80</span>
                    </div>
                  </div>
                  <p className="error_message">{errors.summary?.message}</p>
                </div>
                <div className="description">
                  <p>Description *</p>
                  <div className="textarea">
                    <textarea
                      {...register("full_description")}
                      placeholder="Enter Description"
                      maxLength={4000}
                    ></textarea>
                    <div className="bottom_des">
                      <p>
                        Promote your app with a description to attract users
                      </p>
                      <span>max 4000</span>
                    </div>
                  </div>
                  <p className="error_message">
                    {errors.full_description?.message}
                  </p>
                </div>
              </div>
            </GroupInput>
            <StepButtonGroup />
          </WrapAppDetail>
        </form>
      )}
    </div>
  );
};

export default UploadAppDetail;
