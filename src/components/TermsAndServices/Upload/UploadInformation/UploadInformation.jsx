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
    privacy_policy: yup
      .string()
      .required()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
    term_of_policy: yup
      .string()
      .required()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
    app_support: yup
      .string()
      .required()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
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
      otherlanguages: languages[0]?.code,
      type: Methods[0].code,
      age_limit: AgeLimit[0],
      country_of_service: languages[0]?.locale_code,
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
        name: "privacy_policy",
        title: "Privacy Policy (link) *",
        placeholder: "Enter The Link",
      },
      {
        type: "input",
        name: "term_of_policy",
        title: "Term Policy (link) *",
        placeholder: "Enter The Link",
      },
    ],
    [
      {
        type: "input",
        name: "app_support",
        title: "App Support (link) *",
        placeholder: "Enter The Link",
      },
      {
        type: "input",
        name: "prices",
        title: "Prices *",
        placeholder: "Enter The Prices",
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
  console.log(finalData);
  const renderField = () => {
    return FieldContentInput.concat(FieldContentSelect).map((row, index) => {
      return (
        <div key={`row-${index}`} className="row">
          {row.map((item, index) => {
            if (item.type === "select") {
              return (
                <div className="field_item" key={`row-${index}`}>
                  <SelectController
                    key={`field-${index}`}
                    control={control}
                    name={item.name}
                    title={item.title}
                    ArrOption={item.Array}
                  />
                  <p className="error_message">
                    {errors[`${item.name}`]?.message}
                  </p>
                </div>
              );
            } else {
              if (item.title === "Prices *") {
                return (
                  <div key={`field-${index}`} className="field_item">
                    <InputText
                      register={{ ...register(item.name) }}
                      title={item.title}
                      placeho={item.placeholder}
                      disabled={finalData.free === "0"}
                      type="number"
                    />
                    <p className="error_message">
                      {errors[item.name]?.message}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div className="field_item">
                    <InputText
                      key={`field-${index}`}
                      register={{ ...register(item.name) }}
                      title={item.title}
                      placeho={item.placeholder}
                    />
                    <p className="error_message">
                      {errors[item.name]?.message}
                    </p>
                  </div>
                );
              }
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
