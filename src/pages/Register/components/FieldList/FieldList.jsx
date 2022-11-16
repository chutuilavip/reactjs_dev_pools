import React from 'react';
import { InputData } from '../../registerItul';
import { ListInput } from '../../styled';
import FieldListWrapper from './styled';

const FieldList = ({ register, errors }) => {
  return (
    <FieldListWrapper>
      {InputData.map((row, index) => {
        return (
          <div className="row" key={`row-${index}`}>
            {row.map((item, index) => {
              return (
                <div className="field_item" key={`field-${index}`}>
                  <input
                    placeholder={item.placeholder}
                    type={item.type || 'text'}
                    {...register(item.register)}
                  />
                  <p className="validateMessage"> {errors[item.register]?.message}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </FieldListWrapper>
  );
};

export default FieldList;
