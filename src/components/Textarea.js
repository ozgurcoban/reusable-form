import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Textarea = props => {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} as='textarea' {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};

export default Textarea;
