import React from 'react';
import styles from './MenuBar.module.scss';
import Container from "../Container/Container";
import {MAIN_PAGE_ROUTE, QUESTIONS_PAGE_ROUTE, AUTH_PAGE_ROUTE, USER_INFO_ROUTE} from "../../routes/const";
import { NavLink } from "react-router-dom";
import {Flip} from "react-reveal";
import { BiUserCircle } from "react-icons/bi"
import {useSelector} from "react-redux";
import {getIsAuth} from "../../store/auth/selectors";

const MenuBar = () => {

    const isAuth = useSelector(getIsAuth);

    return (
            <div className={styles.background}>
                <Container>
                    <Flip top>
                        <div className={styles.header}>
                            <NavLink className={styles.link} to={MAIN_PAGE_ROUTE}>Main</NavLink>
                            <NavLink className={styles.link} to={QUESTIONS_PAGE_ROUTE}>Questions</NavLink>
                            <NavLink className={styles.link} to={isAuth ? USER_INFO_ROUTE : AUTH_PAGE_ROUTE}><BiUserCircle className={styles.userIcon}/></NavLink>
                        </div>
                    </Flip>
                </Container>
            </div>
    );
};

export default MenuBar;