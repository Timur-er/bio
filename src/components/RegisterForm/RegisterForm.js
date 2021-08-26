import React, {useEffect, useState} from 'react';
import {Form, Formik, Field, ErrorMessage} from "formik";
import styles from './RegisterForm.module.scss';
import * as yup from 'yup';
import {useHttp} from "../../Hooks/http.hook";
import {useDispatch} from "react-redux";
import {openPopup} from "../../store/popup/actions";

const validationSchema = yup.object().shape({
    userName: yup
        .string()
        .test('len', 'Name is too short', val => val && val.length >= 3)
        .required('This is required field'),
    email: yup
        .string()
        .test('len', 'This is invalid email', val => val && val.length >= 5)
        .required('This is required field'),
    password: yup
        .string()
        .required('This is required field'),
    confirmPassword: yup
        .string()
        .required('This is required field')
        .oneOf([yup.ref('password'), null], 'Password no matched'),

})

const RegisterForm = () => {

    const {loading, error, request} = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('error ' + error);
        if (error) {
            dispatch(openPopup(error))
        }
    }, [error])

    return (
        <Formik
            initialValues={{
                userName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(val) => {

                const {email, userName, password} = val;

                const registerHandler = async () => {
                    try {
                        const data = await request(`https://askme-server.herokuapp.com/api/auth/register`, 'POST', {userName, email, password})
                        dispatch(openPopup(data.message))
                    } catch (e) {}
                }

                registerHandler()

            }}
        >
            {({
                  isSubmitting,
                  isValid,
                  handleSubmit
              }) => (
                <Form onSubmit={handleSubmit}>


                    <label htmlFor="" className={styles.label}>
                        User name:
                        <div className={styles.inputWrapper}>
                            <Field
                                type="text"
                                name='userName'
                                className={styles.input}
                            />
                            <span className={styles.errorMessage}><ErrorMessage name='name'/></span>
                        </div>
                    </label>


                    <label htmlFor="" className={styles.label}>
                        Email:
                        <div className={styles.inputWrapper}>
                            <Field
                                type="email"
                                name="email"
                                className={styles.input}
                            />
                            <span className={styles.errorMessage}><ErrorMessage name='email'/></span>
                        </div>
                    </label>

                    <label htmlFor="" className={styles.label}>
                        Password:
                        <div className={styles.inputWrapper}>
                            <Field
                                type="password"
                                name='password'
                                className={styles.input}
                            />
                            <span className={styles.errorMessage}><ErrorMessage name='password'/></span>
                        </div>
                    </label>

                    <label htmlFor="" className={styles.label}>
                        Confirm password:
                        <div className={styles.inputWrapper}>
                            <Field
                                type="password"
                                name='confirmPassword'
                                className={styles.input}
                            />
                            <span className={styles.errorMessage}><ErrorMessage name='confirmPassword'/></span>
                        </div>
                    </label>

                    <button disabled={!isValid} type='submit' className={styles.submitBtn}>Register
                    </button>

                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;