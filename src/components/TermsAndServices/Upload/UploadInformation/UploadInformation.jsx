import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import SelectController from "../SelctController/SelectController";
import InputText from "../UploadAppDetail/InputText";
import { FieldContent } from "./FieldContent";
import { GroupInput, UploadInfoWrapper } from "./styled";
const OtherLanguages = ["Laos", "Mars", "Sun"];
const Cost = ["Pay", "Free"];
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
const ServiceCountry = ["VietNam", "Korea"];

export default function UploadInformation({ setFinalData, finalData }) {
  const { languages } = useSelector((state) => state.detailApp);
  const { register, handleSubmit, control, getValues, reset, setValue } =
    useForm({
      defaultValues: {
        otherlanguages: languages[0]?.language,
        cost: Cost[0],
        type: Methods[0].title,
        age_limit: AgeLimit[0],
        country_of_service: languages[0]?.language,
      },
    });
  useEffect(() => {
    setValue("country_of_service", languages[0]?.language);
    setValue("otherlanguages", languages[0]?.language);
  }, [languages]);
  const onSubmit = (data) => {
    setFinalData((prevData) => ({ ...Object.assign(prevData, data) }));
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
      },
      {
        type: "select",
        name: "country_of_service",
        Array: languages,
      },
    ],
    [
      {
        type: "select",
        name: "type",
        Array: Methods,
      },
      {
        type: "select",
        name: "otherlanguages",
        Array: languages,
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
    return () => {
      setFinalData((prevData) => ({ ...Object.assign(prevData, getValues()) }));
    };
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
      </form>
    </div>
  );
}
