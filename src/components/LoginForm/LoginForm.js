import React from 'react';
import {Formik, ErrorMessage, Form, Field} from "formik";
import styles from './LoginForm.module.scss';
import * as yup from 'yup';
import {useHttp} from "../../Hooks/http.hook";
import {useDispatch, useSelector} from "react-redux";
import {getLogin} from "../../store/auth/selectors";

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required('This is required field'),
    password: yup
        .string()
        .required('This is required field')
})


const LoginForm = () => {

    const {error, request} = useHttp();
    const login = useSelector(getLogin)
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(val) => {
                const { email, password } = val;

                const loginHandler = async () => {
                    try {
                        const data = await request('https://askme-server.herokuapp.com/api/auth/login', 'POST', {email, password})
                        console.log(data);

                        console.log(login);
                        login(data.token, data.userId)
                    } catch (e) {}
                }

                loginHandler();
            }}
        >
            {({isSubmitting, isValid, handleSubmit}) => (
                <Form onSubmit={handleSubmit}>

                    <label htmlFor="" className={styles.label}>
                        User name:
                        <div className={styles.inputWrapper}>
                            <Field type='email' name='email' className={styles.input}/>
                            <span><ErrorMessage name={'email'}/></span>
                        </div>
                    </label>

                    <label htmlFor="" className={styles.label}>
                         Password:
                        <div className={styles.inputWrapper}>
                            <Field type='password' name='password' className={styles.input}/>
                            <span><ErrorMessage name={'password'}/></span>
                        </div>
                    </label>

                    <button disabled={false} type='submit' className={styles.submitBtn}>Login
                    </button>

                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;