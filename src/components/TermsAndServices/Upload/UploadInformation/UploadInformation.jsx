import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import SelectController from "../SelctController/SelectController";
import InputText from "../UploadAppDetail/InputText";
import { GroupInput, UploadInfoWrapper } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { UploadContextWrapper } from "../UploadAppDetailWrapper/UploadAppDetailWrapper";
import StepButtonGroup from "../StepButtonGroup/StepButtonGroup";
import UploadInformationSchema from "../Schema/UploadInfomationSchema";

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
const AgeLimit = [
  {
    code: "3",
    title: "3",
  },
  {
    code: "7",
    title: "7",
  },
  {
    code: "12",
    title: "12",
  },
  {
    code: "16",
    title: "16",
  },
  {
    code: "18",
    title: "18",
  },
];

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
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otherlanguages: languages[0]?.code,
      type: Methods[0].code,
      age_limit: AgeLimit[0].code,
      country_of_service: languages[0]?.locale_code,
    },
    resolver: yupResolver(UploadInformationSchema),
  });

  const onSubmit = (data) => {
    if (finalData.free === "1" && getValues().price === "") {
      setError("price", {
        type: "required",
        message: "Price is required when you set app is Pay",
      });
      return;
    }
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
                <div className="field_item" key={`field-${index}`}>
                  <SelectController
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
              return (
                <div className="field_item" key={`field-${index}`}>
                  <InputText
                    register={{ ...register(item.name) }}
                    title={item.title}
                    placeho={item.placeholder}
                  />
                  <p className="error_message">{errors[item.name]?.message}</p>
                </div>
              );
            }
          })}
        </div>
      );
    });
  };
  useEffect(() => {
    setValue("country_of_service", languages[0]?.language);
    setValue("otherlanguages", languages[0]?.language);
  }, [languages]);
  useEffect(() => {
    reset({ ...finalData });
  }, [finalData]);

  useEffect(() => {
    return () => {
      if (getValues().free === "0") {
        getValues().price = 0;
      }

      console.log("upload information", getValues(), finalData);

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
        <StepButtonGroup />
      </form>
    </div>
  );
}
