import React, {useEffect, useState} from 'react';
import Container from "../../components/Container/Container";
import styles from './AuthPage.module.scss';
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {useLocation} from "react-router-dom";
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'
import LoginForm from "../../components/LoginForm/LoginForm";
import {useHttp} from "../../Hooks/http.hook";


const AuthPage = () => {

  const [tabIndex, setTabIndex] = useState(0);



    return (
        <div className={styles.authPage}>
            <Container>
                <div className={styles.authWrapper}>
                    <Tabs selectedIndex={tabIndex} onSelect={index => {
                        setTabIndex(index)
                        console.log(index);
                    }} className={styles.auth}>
                            <TabList className={styles.authWayButtons}>
                                <Tab className={tabIndex === 0 ? `${styles.authWay} ${styles.activeAuthWay}` : `${styles.authWay}`}>Sign in</Tab>
                                <Tab className={tabIndex === 1 ? `${styles.authWay} ${styles.activeAuthWay}` : `${styles.authWay}`}>Sign up</Tab>
                            </TabList>

                            <TabPanel className={tabIndex === 0 ? `${styles.form} ${styles.activeAuthForm}` : `${styles.form}`}>
                                <RegisterForm />
                            </TabPanel>

                            <TabPanel className={tabIndex === 1 ? `${styles.form} ${styles.activeAuthForm}` : `${styles.form}`}>
                                <LoginForm />
                            </TabPanel>
                    </Tabs>


                </div>
            </Container>
        </div>
    );
};

export default AuthPage;