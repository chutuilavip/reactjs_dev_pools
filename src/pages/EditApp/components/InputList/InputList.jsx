import React, { Fragment } from 'react';
import CustomInput from '../Input/CustomInput';

const InputList = ({ inputList, control, errors }) => {
  return (
    <Fragment>
      {inputList?.map((row, index) => (
        <div className="row" key={index}>
          {row?.map((fieldData, index) => (
            <CustomInput
              key={`Input-${index}`}
              fieldProps={fieldData}
              control={control}
              errors={errors}
            />
          ))}
        </div>
      ))}
    </Fragment>
  );
};

export default InputList;
