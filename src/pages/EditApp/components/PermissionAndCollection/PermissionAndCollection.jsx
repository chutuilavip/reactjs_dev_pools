import React from 'react';
import CustomSelect from '../Select/CustomSelect';

const PermissionAndCollection = ({ control, errors, fieldsData }) => {
  const renderOption = (data) => {
    const mainOption = data.data?.map((item) => {
      return {
        value: `${item.id}`,
        label: item.title,
      };
    });
    const res = [...mainOption];
    return res;
  };
  return (
    <div>
      {fieldsData?.map((field, index) => (
        <CustomSelect
          key={`multiple-select-${index}`}
          fieldProps={field}
          control={control}
          errors={errors}
          customRenderOptions={renderOption}
          mode="multiple"
        />
      ))}
    </div>
  );
};

export default PermissionAndCollection;
