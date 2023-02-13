import Image from "next/image";
import {useState} from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../styles/Sign.module.css'
import { useDispatch } from "react-redux";
import { RegisterUser } from "../redux/services/registration";



const SignUpNoW = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        // const { email, userFirstName, userLastName, userName, userPassword } = values;
        // await dispatch(RegisterUser({ data: { email, userFirstName, userLastName, userName, userPassword } }));
        console.log(values)
        setSubmitting(false);
        resetForm()
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}></h1>
            <Formik
                initialValues={{
                    email: '',
                    phone: '',
                    userFirstName: '',
                    userLastName: '',
                    userName: '',
                    userPassword: '',
                    confirmPassword: '',

                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.userFirstName) {
                        errors.userFirstName = 'Required';
                    }
                    if (!values.userLastName) {
                        errors.userLastName = 'Required';
                    }
                    if (!values.userName) {
                        errors.userName = 'Required';
                    }
                    if (!values.userPassword) {
                        errors.userPassword = 'Required';
                    }
                    if (!values.confirmPassword) {
                        errors.confirmPassword = 'Required';
                    } else if (values.userPassword !== values.confirmPassword) {
                        errors.confirmPassword = 'Password does not match';
                    }
                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        <Field
                            className={styles.field}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <ErrorMessage
                            className={styles.error}
                            name="email"
                            component="div"
                        />
                        <Field
                            className={styles.field}
                            type="phone"
                            name="phone"
                            placeholder="Phone number"
                        />
                        <ErrorMessage
                            className={styles.error}
                            name="phone"
                            component="div"
                        />
                        <Field
                            className={styles.field}
                            type="text"
                            name="userFirstName"
                            placeholder="First Name"
                        />
                        <ErrorMessage
                            className={styles.error}
                            name="userFirstName"
                            component="div"
                        />

                        <Field
                            className={styles.field}
                            type="text"
                            name="userLastName"
                            placeholder="Last Name"
                        />
                        <ErrorMessage
                            className={styles.error}
                            name="userLastName"
                            component="div"
                        />
                        <Field
                            className={styles.field}
                            type="text"
                            name="userName"
                            placeholder="Username"

                        />
                        <ErrorMessage
                            className={styles.error}
                            name="userName"
                            component="div"
                        />
                        <Field
                            className={styles.field}
                            type="password"
                            name="userPassword"
                            placeholder="Password"

                        />
                        <ErrorMessage
                            className={styles.error}
                            name="userPassword"
                            component="div"
                        />
                        <Field
                            className={styles.field}
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"

                        />
                        <ErrorMessage
                            className={styles.error}
                            name="confirmPassword"
                            component="div"
                        />
                        <button
                            className={styles.button}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUpNoW;





