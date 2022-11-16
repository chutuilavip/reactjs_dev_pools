import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import {
  Cost,
  EditAppSchema,
  Types,
} from '../../../components/TermsAndServices/Upload/EditApp/constant';
import { ConvertToFormDataV2 } from '../../../helpers/formData';
import EditAppView from '../EditAppView/EditAppView';

const EditAppProcess = ({
  defaultValues = {},
  onInitialValue,
  categoryAndLanguage,
  onSubmitAPI,
  permissionAndInfo,
}) => {
  const form = useForm({
    defaultValues: useMemo(() => {
      return defaultValues;
    }, [defaultValues]),
    resolver: yupResolver(EditAppSchema),
  });
  useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues]);
  const SelectField = [
    [
      {
        name: 'category',
        label: 'Category',
        data: categoryAndLanguage.category,
      },
      {
        name: 'type',
        label: 'Type',
        data: Types,
      },
    ],
    [
      {
        name: 'country_of_service',
        label: 'Country Of Service',
        data: categoryAndLanguage.language,
      },
      {
        name: 'otherlanguages',
        label: 'Other Languages',
        data: categoryAndLanguage.language,
      },
    ],
  ];
  const LocaleField = {
    name: 'locale',
    label: 'Locale',
    data: categoryAndLanguage.language,
  };
  const FreeField = {
    name: 'free',
    label: 'Cost',
    data: Cost,
  };
  const PriceField = {
    name: 'price',
    label: 'Price',
    placeholder: "Enter App's price",
    type: 'number',
  };
  const PermissionAndInfoFields = [
    {
      name: 'app_permission_id',
      label: 'App Permission',
      data: permissionAndInfo?.app_permission,
    },
    {
      name: 'information_collected_id',
      label: 'Type Of information is collected',
      data: permissionAndInfo?.information,
    },
  ];
  const handlesubmit = (data) => {
    if (form.getValues('free') === '1' && Number(form.getValues('price')) === 0) {
      form.setError('price', {
        type: 'required',
        message: 'Price is required and must be greater than 0 when app is pay',
      });
      form.setFocus('price');
      return;
    }
    if (form.getValues('app_version') === '' && form.getValues('apkfile').fileList?.[0]) {
      form.setError('app_version', {
        type: 'required',
        message: 'App version is required when you update new file apk',
      });
      form.setFocus('app_version');
      return;
    }
    if (data.cover.length === 0) {
      data.cover = data.cover_init;
    }
    if (data.apkfile.length === 0) {
      data.apkfile = data.apkfile_init;
    }
    console.log('data', data);
    let formData = ConvertToFormDataV2(data);
    onSubmitAPI(formData);
  };

  return (
    <div>
      <EditAppView
        form={form}
        handlesubmitProcess={handlesubmit}
        SelectField={SelectField}
        FreeField={FreeField}
        PriceField={PriceField}
        LocaleField={LocaleField}
        PermissionAndInfoFields={PermissionAndInfoFields}
        onInitialValue={onInitialValue}
      />
    </div>
  );
};

export default React.memo(EditAppProcess);
