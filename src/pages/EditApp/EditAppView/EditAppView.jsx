import { Button } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { InputFields } from '../../../components/TermsAndServices/Upload/EditApp/constant';
import CustomInput from '../components/Input/CustomInput';
import InputList from '../components/InputList/InputList';
import PermissionAndCollection from '../components/PermissionAndCollection/PermissionAndCollection';
import CustomSelect from '../components/Select/CustomSelect';
import SelectList from '../components/SelectList/SelectList';
import UploadResource from '../components/UploadResource/UploadResource';
import { EditAppViewWrapper } from './styled';

const EditAppView = (props) => {
  const {
    form,
    handlesubmitProcess,
    SelectField,
    FreeField,
    PriceField,
    LocaleField,
    onInitialValue,
    PermissionAndInfoFields,
  } = props;
  const {
    getValues,
    setValue,
    control,
    setFocus,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;
  const isLoadingEditApp = useSelector((state) => state.detailApp.isLoadingEditApp);
  const [isPay, setIsPay] = useState(form.getValues('free'));
  const handleChangeIsPay = (e) => {
    if (e === '1' && Number(form.getValues('price')) === 0) {
      form.setError('price', {
        type: 'required',
        message: 'Price is required and must be greater than 0 when app is pay',
      });
      form.setFocus('price');
    }
    setIsPay(e);
  };
  const handleChangePrice = (e) => {
    if (Number(e.target.value > 0)) {
      form.setError('price');
    }
  };
  useEffect(() => {
    if (errors) {
      const keys = Object.keys(errors);
      for (let v of keys) {
        toast.error('Invalid value at ' + v.split('_').join(' ') + ' field');
      }
    }
  }, [errors]);
  console.log(errors);
  return (
    <EditAppViewWrapper>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>EDIT APP</h1>{' '}
        <form onSubmit={handleSubmit(handlesubmitProcess)}>
          <div className="row">
            <CustomSelect
              customOnChange={onInitialValue}
              fieldProps={LocaleField}
              control={control}
              errors={errors}
            />
          </div>
          <SelectList selectList={SelectField} control={control} errors={errors} />

          <PermissionAndCollection
            fieldsData={PermissionAndInfoFields}
            control={control}
            errors={errors}
          />
          <div className="row free-price">
            <CustomSelect
              customOnChange={handleChangeIsPay}
              fieldProps={FreeField}
              control={control}
              errors={errors}
            />
            {isPay === '1' && (
              <CustomInput
                customOnchange={handleChangePrice}
                fieldProps={PriceField}
                control={control}
                errors={errors}
              />
            )}
          </div>
          <InputList inputList={InputFields} control={control} errors={errors} />
          <UploadResource
            setValue={setValue}
            control={control}
            errors={errors}
            defaultValues={getValues()}
            setError={form.setError}
          />
          <Button
            loading={isLoadingEditApp}
            htmlType="submit"
            type="primary"
            className="btn_submit"
          >
            Update
          </Button>
        </form>
      </div>
    </EditAppViewWrapper>
  );
};

export default React.memo(EditAppView);
