import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

const CustomInput = ({ fieldProps, control, errors, customOnchange, mod }) => {
  return (
    <Controller
      control={control}
      name={fieldProps.name}
      render={({ field }) => (
        <div className="field-item">
          <div className="field">
            <label className="fieldLabel">{fieldProps.label} :</label>
            {mod === 'area' ? (
              <Input.TextArea
                rows={10}
                disabled={fieldProps?.disabled || false}
                {...field}
                onChange={(e) => {
                  customOnchange && customOnchange(e);
                  field.onChange(e);
                }}
                placeholder={fieldProps.placeholder}
                type={fieldProps.type || 'text'}
              />
            ) : (
              <Input
                disabled={fieldProps?.disabled || false}
                {...field}
                onChange={(e) => {
                  customOnchange && customOnchange(e);
                  field.onChange(e);
                }}
                placeholder={fieldProps.placeholder}
                type={fieldProps.type || 'text'}
              />
            )}
          </div>
          <p className="error_message">{errors[fieldProps.name]?.message}</p>
        </div>
      )}
    />
  );
};

export default CustomInput;
