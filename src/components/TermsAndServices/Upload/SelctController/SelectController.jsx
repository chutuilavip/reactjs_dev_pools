import React from 'react';
import { Controller } from 'react-hook-form';
import InputSelect from '../UploadAppDetail/InputSelect';

export default function SelectController({
  control,
  ArrOption,
  name,
  title,
  register,
  style,
  mode,
  className,
}) {
  const upperCaseFirstLetter = (string) => {
    const stringArray = string.split(' ');

    let res = [];
    for (let i = 0; i < stringArray.length; i++) {
      let item = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
      res.push(item);
    }

    return res.join(' ') + '*';
  };
  return (
    <Controller
      style={style}
      name={name}
      control={control}
      render={({ field }) => (
        <InputSelect
          mode={mode}
          title={upperCaseFirstLetter(title)}
          ArrOption={ArrOption}
          valueDefault={ArrOption[0]?.code || ArrOption[0]?.id}
          field={{ ...field }}
          register
        />
      )}
    />
  );
}
