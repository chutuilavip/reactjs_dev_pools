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
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
    register,
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
  useEffect(() => {
    ClassicEditor.create(document.querySelector('#editor'), {
      removePlugins: ['Heading', 'Link'],
      toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote'],
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <EditAppViewWrapper>
      <div className="container">
        {/* <div className="">
          <CKEditor
            id="editor"
            editor={ClassicEditor}
            data={getValues('full_description')}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValue('full_description', data);
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </div> */}
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
          <div className="description">
            <p>Description *</p>
            <div className="textarea">
              <textarea
                {...register('full_description')}
                placeholder="Enter Description"
                maxLength={4000}
              ></textarea>
              <div className="bottom_des">
                <p>Promote your app with a description to attract users</p>
                <span>max 4000</span>
              </div>
            </div>
            <p className="error_message">{errors.full_description?.message}</p>
          </div>
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
