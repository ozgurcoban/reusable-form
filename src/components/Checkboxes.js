import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Checkboxes = props => {
  const { name, label, options, ...rest } = props;
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          console.log('Radio field', field);
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Checkboxes;
