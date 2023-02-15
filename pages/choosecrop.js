import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Select from 'react-select';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/ChooseCrops.module.css';
import React, { useState } from 'react'

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [crop, setCrop] = useState('');
  const [rigs, setRigs] = useState({});

  const handleNextStep = values => {
    setStep(step + 1);
    setCrop(values.crop);
  };

  const handleSubmit = values => {
    setRigs({ ...rigs, [crop]: values.numRigs });
  };

  return (
    <Formik
      initialValues={{
        crop: '',
        numRigs: 0
      }}
      validationSchema={Yup.object({
        crop: Yup.string().required('Please select a crop'),
        numRigs: Yup.number().required('Please select the number of rigs')
      })}
      onSubmit={step === 1 ? handleNextStep : handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          {step === 1 && (
            <>
              <Field name="crop" as="select">
                <option value="">Select a crop</option>
                <option value="wheat">Wheat</option>
                <option value="corn">Corn</option>
                <option value="soybean">Soybean</option>
              </Field>
              {errors.crop && touched.crop && (
                <div className="error">{errors.crop}</div>
              )}
              <button type="submit">Next</button>
            </>
          )}
          {step === 2 && (
            <>
              <Field name="numRigs" as="select">
                <option value="">Select the number of rigs</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Field>
              {errors.numRigs && touched.numRigs && (
                <div className="error">{errors.numRigs}</div>
              )}
              <button type="submit">Submit</button>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
