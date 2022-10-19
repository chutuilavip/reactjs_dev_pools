import { Button, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAndLanguage } from "../../../../redux/slice/detailApp.slice";
import PackageTabs from "../../PackageTabs/PackageTabs";
import SelectController from "../SelctController/SelectController";
import InputSelect from "./InputSelect";
import InputText from "./InputText";
import { GroupInput, WrapAppDetail } from "./styled";

const Language = ["English ", "VietNamese", "Korea"];
const Blockchain = ["Block chain 1", "Block chain 2", "Block chain 3"];
const Cost = [
  {
    code: "yes",
    title: "Pay",
  },
  {
    code: "no",
    title: "Free",
  },
];
const Compability = ["Win 10", "Win 11", "Win 12"];

const UploadAppDetail = ({ setFinalData, finalData }) => {
  const dispatch = useDispatch();
  const { categories, languages } = useSelector((state) => state.detailApp);
  const { register, handleSubmit, control, getValues, reset, setValue } =
    useForm({
      defaultValues: {
        cost: Cost[0],
        genre: categories[0]?.title,
        languages: languages[0]?.language,
        defaultlanguage: languages[0]?.language,
        compability: Compability[0],
        blockchain: Blockchain[0],
      },
    });
  const [data, setData] = useState({});

  const onSubmit = (data) => {
    setData((prevData) => ({ ...Object.assign(prevData, data) }));
  };
  useEffect(() => {
    reset({ ...finalData });
    return () => {
      setFinalData((prevData) => ({ ...Object.assign(prevData, getValues()) }));
    };
  }, []);

  useEffect(() => {
    dispatch(getCategoriesAndLanguage());
  }, []);
  useEffect(() => {
    setValue("genre", categories[0]?.title);
    setValue("languages", languages[0]?.language);
    setValue("defaultlanguage", languages[0]?.language);
  }, [categories, languages]);
  const onChangeIsFree = (checked) => {
    setValue("free", checked);
  };
  console.log("feeeeee", languages, categories);
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "7rem" }}>
        <WrapAppDetail>
          <p className="title">Application Detail</p>
          <GroupInput>
            <div className="col_input_one">
              <div className="row">
                <InputText
                  register={{ ...register("title") }}
                  title="App Name *"
                  placeho="Enter App Name"
                />
                <InputText
                  register={{ ...register("appid") }}
                  title="App ID *"
                  placeho="Enter App ID"
                />
              </div>
              <div className="row">
                <SelectController
                  control={control}
                  name="genre"
                  ArrOption={categories}
                />
                <SelectController
                  control={control}
                  ArrOption={languages}
                  name="languages"
                />
              </div>
              <div className="row">
                <SelectController
                  control={control}
                  name="free"
                  ArrOption={Cost}
                />
                <SelectController
                  control={control}
                  ArrOption={languages}
                  name="defaultlanguage"
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
                    <p>Promote your app with a description to attract users</p>
                    <span>0/1000</span>
                  </div>
                </div>
              </div>
              <div className="description">
                <p>Description *</p>
                <div className="textarea">
                  <textarea
                    {...register("full_description")}
                    placeholder="Enter Description"
                  ></textarea>
                  <div className="bottom_des">
                    <p>Promote your app with a description to attract users</p>
                    <span>0/1000</span>
                  </div>
                </div>
              </div>
            </div>
          </GroupInput>
        </WrapAppDetail>
      </form>
    </div>
  );
};

export default UploadAppDetail;
