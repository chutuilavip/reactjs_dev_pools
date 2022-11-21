import { Select } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

const CustomSelect = ({
  control,
  fieldProps,
  errors,
  customOnChange,
  mode,
  customRenderOptions,
}) => {
  const renderOption = (data) => {
    const mainOption = data.data?.map((item) => {
      if (data.name === 'otherlanguages' || data.name === 'locale') {
        return {
          value: item.code,
          label: item.language || item.title,
        };
      } else {
        return {
          value: item.locale_code || item.id,
          label: item.language || item.title,
        };
      }
    });
    const res = [
      {
        value: '',
        label: `Select App ${data.label}`,
        disabled: true,
      },
      ...mainOption,
    ];
    return res;
  };

  return (
    <Controller
      control={control}
      name={fieldProps.name}
      render={({ field }) => (
        <div className="field-item">
          <div className="field">
            <label className="fieldLabel">{fieldProps.label}</label>
            <Select
              mode={mode}
              className="input"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                customOnChange && customOnChange(e);
              }}
              defaultValue={
                fieldProps.name !== 'app_permission_id' &&
                fieldProps.name !== 'information_collected_id'
                  ? ''
                  : []
              }
              options={
                customRenderOptions ? customRenderOptions(fieldProps) : renderOption(fieldProps)
              }
            />
          </div>
          <p className="error_message">{errors[fieldProps.name]?.message}</p>
        </div>
      )}
    />
  );
};

export default CustomSelect;
