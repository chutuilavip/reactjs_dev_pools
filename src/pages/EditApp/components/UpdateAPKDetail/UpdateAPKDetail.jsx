import React from 'react';
import CustomInput from '../Input/CustomInput';

const UpdateAPKDetail = ({ control, errors, onChange }) => {
  const appVersionUpdate = [
    {
      name: 'app_version',
      label: 'App Version',
      placeholder: 'Enter App Version',
    },
    {
      name: 'description',
      label: 'Description',
      placeholder: 'Enter description',
      mode: 'area',
    },
  ];
  return (
    <div
      style={{
        width: 'calc(90% + 0rem)',
        marginLeft: 'auto',
        border: '1px solid red',
        padding: '2rem',
        borderRadius: '5px',
      }}
    >
      <h1 style={{ background: 'black', color: 'white', borderRadius: '5px', padding: '0 2rem' }}>
        New App version detail
      </h1>
      {appVersionUpdate?.map((item, index) => (
        <CustomInput
          key={`update-app-version-${index}`}
          fieldProps={item}
          control={control}
          customOnchange={item.name === 'app_version' && onChange}
          errors={errors}
          mod={item.mode}
        />
      ))}
    </div>
  );
};

export default UpdateAPKDetail;
