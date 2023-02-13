import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../styles/Sign.module.css'
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux/services/login";



const Login = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        // const { email,  userPassword } = values;
        // await dispatch(LoginUser({ data: { email, userPassword } }));
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
                    userPassword: '',


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

                    if (!values.userPassword) {
                        errors.userPassword = 'Required';
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
                            type="password"
                            name="userPassword"
                            placeholder="Password"

                        />
                        <ErrorMessage
                            className={styles.error}
                            name="userPassword"
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

export default Login;





