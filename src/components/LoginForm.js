import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikController from './FormikController';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = values => {
    console.log('Form data', values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form>
            <FormikController
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikController
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <button type='submit' disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
