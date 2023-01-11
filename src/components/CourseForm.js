import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikController from './FormikController';

const CourseForm = () => {
  const dropdownOptions = [
    { key: 'Select youre course', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const checkboxOptions = [
    { key: 'Option 1', value: 'coption1' },
    { key: 'Option 2', value: 'coption2' },
    { key: 'Option 3', value: 'coption3' },
  ];

  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null,
  };

  const onSubmit = values => {
    console.log('Form data', values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    bio: Yup.string().required('Required'),
    course: Yup.string().required('Required'),
    courseDate: Yup.date().required('Required').nullable(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
            <FormikController control='textarea' label='Bio' name='bio' />

            <FormikController
              control='select'
              label='Course'
              name='course'
              options={dropdownOptions}
            />

            <FormikController
              control='checkbox'
              label='Your skillset'
              name='skills'
              options={checkboxOptions}
            />

            <FormikController
              control='date'
              label='Course date'
              name='courseDate'
            />

            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CourseForm;
