import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikController from './FormikController';

const FormikContainer = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const radioOptions = [
    { key: 'Option 1', value: 'roption1' },
    { key: 'Option 2', value: 'roption2' },
    { key: 'Option 3', value: 'roption3' },
  ];

  const checkboxOptions = [
    { key: 'Option 1', value: 'coption1' },
    { key: 'Option 2', value: 'coption2' },
    { key: 'Option 3', value: 'coption3' },
  ];

  const initialValues = {
    email: '',
    message: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date().required('Required').nullable(),
  });

  const onSubmit = values => {
    console.log('Form data', values);

    // If dates are wrong format in object:
    console.log('Saved data', JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikController
            control='input'
            type='email'
            label='email'
            name='email'
          />
          <FormikController control='textarea' label='Message' name='message' />
          <FormikController
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
          />
          <FormikController
            control='radio'
            label='Select something'
            name='radioOption'
            options={radioOptions}
          />
          <FormikController
            control='checkbox'
            label='Checkbox topics'
            name='checkboxOption'
            options={checkboxOptions}
          />

          <FormikController
            control='date'
            label='Pick a date'
            name='birthDate'
            minDate={new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
