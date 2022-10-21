import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import SelectController from "../SelctController/SelectController";
import InputText from "../UploadAppDetail/InputText";
import { GroupInput, UploadInfoWrapper } from "./styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UploadContextWrapper } from "../UploadAppDetailWrapper/UploadAppDetailWrapper";
import StepButtonGroup from "../StepButtonGroup/StepButtonGroup";

const schema = yup
  .object({
    privacy_policy: yup.string().required(),
    term_of_policy: yup.string().required(),
    app_support: yup.string().required(),
    size: yup.string().required(),
  })
  .required();
const Methods = [
  {
    code: "nft",
    title: "NFT",
  },
  {
    code: "metaverse",
    title: "Metaverse",
  },
  {
    code: "play-to-earn",
    title: "Play To Earn",
  },
];
const AgeLimit = ["3", "7", "12", "16", "18"];

export default function UploadInformation({ setFinalData, finalData }) {
  const { languages } = useSelector((state) => state.detailApp);
  const DetailContext = useContext(UploadContextWrapper);
  const { handleNextTab } = DetailContext;
  const { register, handleSubmit, control, getValues, reset, setValue } =
    useForm({
      defaultValues: {
        otherlanguages: languages[0]?.language,
        type: Methods[0].title,
        age_limit: AgeLimit[0],
        country_of_service: languages[0]?.language,
      },
      resolver: yupResolver(schema),
    });
  useEffect(() => {
    setValue("country_of_service", languages[0]?.language);
    setValue("otherlanguages", languages[0]?.language);
  }, [languages]);
  const onSubmit = (data) => {
    setFinalData((prevData) => ({ ...Object.assign(prevData, data) }));
    handleNextTab();
  };
  const FieldContentInput = [
    [
      {
        type: "input",
        register: "privacy_policy",
        title: "Privacy Policy (link) *",
        placeholder: "Enter The Link",
      },
      {
        type: "input",
        register: "term_of_policy",
        title: "Term Policy (link) *",
        placeholder: "Enter The Link",
      },
    ],
    [
      {
        type: "input",
        register: "app_support",
        title: "App Support (link) *",
        placeholder: "Enter The Link",
      },
      {
        type: "input",
        register: "size",
        title: "Size *",
        placeholder: "Enter The Size",
      },
    ],
  ];
  const FieldContentSelect = [
    [
      {
        type: "select",
        name: "age_limit",
        Array: AgeLimit,
        title: "Age limit",
      },
      {
        type: "select",
        name: "country_of_service",
        Array: languages,
        title: "country of service",
      },
    ],
    [
      {
        type: "select",
        name: "type",
        Array: Methods,
        title: "Type ",
      },
      {
        type: "select",
        name: "otherlanguages",
        Array: languages,
        title: "other languages",
      },
    ],
  ];
  const renderField = () => {
    return FieldContentInput.concat(FieldContentSelect).map((row, index) => {
      return (
        <div key={`row-${index}`} className="row">
          {row.map((item, index) => {
            if (item.type === "select") {
              return (
                <SelectController
                  key={`field-${index}`}
                  control={control}
                  name={item.name}
                  title={item.title}
                  ArrOption={item.Array}
                />
              );
            } else {
              return (
                <InputText
                  key={`field-${index}`}
                  register={{ ...register(item.register) }}
                  title={item.title}
                  placeho={item.placeholder}
                />
              );
            }
          })}
        </div>
      );
    });
  };
  useEffect(() => {
    reset({ ...finalData });
  }, []);
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "7rem" }}>
        <UploadInfoWrapper>
          <p className="title">Information</p>
          <GroupInput>
            <div className="col_input_one">{renderField()}</div>
          </GroupInput>
        </UploadInfoWrapper>
        <StepButtonGroup />
      </form>
    </div>
  );
}
