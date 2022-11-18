import React, { Fragment } from 'react';
import CustomSelect from '../Select/CustomSelect';

const SelectList = ({ selectList, control, errors }) => {
  return (
    <Fragment>
      {selectList.map((row, index) => (
        <div className="row" key={index}>
          {row?.map((fieldData, index) => {
            console.log(fieldData);
            return (
              <CustomSelect
                key={`Select-${index}`}
                fieldProps={fieldData}
                control={control}
                errors={errors}
              />
            );
          })}
        </div>
      ))}
    </Fragment>
  );
};

export default SelectList;
