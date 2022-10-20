import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../layout/components/Loading/Loading";
import { getCategoriesAndLanguage } from "../../../../redux/slice/detailApp.slice";
import SelectController from "../SelctController/SelectController";
import InputText from "./InputText";
import { GroupInput, WrapAppDetail } from "./styled";

const Blockchain = ["Block chain 1", "Block chain 2", "Block chain 3"];
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
const Compability = ["Win 10", "Win 11", "Win 12"];

const UploadAppDetail = ({ setFinalData, finalData }) => {
  const dispatch = useDispatch();
  const { categories, languages, isLoading } = useSelector(
    (state) => state.detailApp
  );
  const { register, handleSubmit, control, getValues, reset, setValue } =
    useForm({
      defaultValues: {
        free: Cost[0]?.code,
        genre: categories[0]?.id,
        languages: languages[0]?.language,
        defaultlanguage: languages[0]?.language,
        compability: Compability[0],
        blockchain: Blockchain[0],
      },
    });
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
    setValue("genre", categories[0]?.id);
    setValue("free", Cost[0]?.code);
    setValue("languages", languages[0]?.language);
    setValue("defaultlanguage", languages[0]?.language);
  }, [categories, languages, Cost]);

  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <form style={{ marginBottom: "7rem" }}>
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
                </div>
              </div>
            </GroupInput>
          </WrapAppDetail>
        </form>
      )}
    </div>
  );
};

export default UploadAppDetail;
