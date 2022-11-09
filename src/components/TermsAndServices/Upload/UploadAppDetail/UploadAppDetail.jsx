import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
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
    code: "1",
    id: 1,
    title: "Pay",
  },
  {
    code: "0",
    id: 2,
    title: "Free",
  },
];
const schema = yup
  .object({
    title: yup.string().required(),
    appid: yup.string().required(),
    summary: yup.string().required(),
    full_description: yup.string().required(),
  })
  .required();
const UploadAppDetail = ({ setFinalData, finalData }) => {
  const DetailContext = useContext(UploadContextWrapper);
  const { handleNextTab } = DetailContext;

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
    formState: { errors },
  } = useForm({
    defaultValues: {
      free: Cost[0]?.code,
      genre: categories[0]?.id,
      languages: languages[0]?.code,
      defaultlanguage: languages[0]?.code,
    },
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (Object.keys(finalData).length > 0) {
      reset({ ...finalData });
    } else {
      setValue("genre", categories[0]?.id);
      setValue("free", Cost[0]?.code);
      setValue("languages", languages[0]?.code);
      setValue("defaultlanguage", languages[0]?.code);
    }
  }, [categories, languages, Cost]);
  useEffect(() => {
    reset({ ...finalData });
  }, [finalData]);
  useEffect(() => {
    return () => {
      setFinalData((prevData) => ({ ...Object.assign(prevData, getValues()) }));
    };
  }, []);
  const onSubmit = (data) => {
    handleNextTab();
  };
  useEffect(() => {
    if (getValues("free") === "0") {
      setValue("price", 0);
    }
  }, [getValues()]);
  console.log("upload app detail", getValues(), finalData);

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
                    name="languages"
                    title="Languages"
                  />
                </div>
                <div className="row">
                  <SelectController
                    control={control}
                    name="free"
                    title="Cost"
                    ArrOption={Cost}
                  />
                  <SelectController
                    control={control}
                    ArrOption={languages}
                    name="defaultlanguage"
                    title="default languages"
                  />
                </div>
              </div>
              <div className="description_group">
                <div className="description">
                  <p>Short Description *</p>
                  <div className="textarea">
                    <textarea
                      {...register("summary")}
                      placeholder="Enter Description"
                    ></textarea>
                    <div className="bottom_des">
                      <p>
                        Promote your app with a description to attract users
                      </p>
                      <span>0/1000</span>
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
                    ></textarea>
                    <div className="bottom_des">
                      <p>
                        Promote your app with a description to attract users
                      </p>
                      <span>0/1000</span>
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
