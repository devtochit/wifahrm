import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Select from 'react-select';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/ChooseCrops.module.css';





const ChooseCrops = () => {

  const options = [
    { value: 'corn', label: 'Corn' },
    { value: 'tomatoes', label: 'Tomatoes' },
    { value: 'cotton', label: 'Cotton' },
    { value: 'rice', label: 'Rice' },
    { value: 'wheat', label: 'Wheat' },
  ];

  const validationSchema = Yup.object().shape({
    crops: Yup.array().required('Please select at least one crop to cultivate'),
    rigs: Yup.number()
      .required('Please enter the number of rigs or stands')
      .positive('The number of rigs or stands must be a positive number'),
  });

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Choose which crops to cultivate</h1>
        <Formik
          initialValues={{ crops: [], rigs: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log('Form values:', values);
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ values, isSubmitting, handleChange, setFieldValue, errors, touched }) => (
            <Form>
              <Field name='crops'>
                {({ field, form }) => (
                  <div className={styles.formGroup}>
                    <Select
                      isMulti
                      name={field.name}
                      options={options}
                      value={values.crops}
                      onChange={value => setFieldValue('crops', value)}
                    />
                    {touched.crops && errors.crops && (
                      <div className={styles.error}>{errors.crops}</div>
                    )}
                  </div>
                )}
              </Field>
              <div className={styles.formGroup}>
                <label htmlFor='rigs'>Choose the number of rigs or stands:</label>
                <Field
                  type='number'
                  id='rigs'
                  name='rigs'
                  placeholder='Enter the number of rigs or stands'
                  className={styles.field}
                  onChange={handleChange}
                />
                {touched.rigs && errors.rigs && (
                  <div className={styles.error}>{errors.rigs}</div>
                )}
              </div>
              <div className={styles.formGroup}>
                <input type='checkbox' required />
                <label htmlFor='terms'>I accept the terms and conditions</label>
              </div>
              <button type='submit' disabled={isSubmitting} className={styles.submitBtn}>
                Proceed to Payment
              </button>
            </Form>

          )}
        </Formik>
      </div>
      <Footer />
    </>
  )
}
export default ChooseCrops