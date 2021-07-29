import React from 'react';
import styles from './Header.module.scss';
import Container from "../Container/Container";
import { MAIN_PAGE_ROUTE, WAY_PAGE_ROUTE, PROJECTS_PAGE_ROUTE, ABOUT_PAGE_ROUTE } from "../../routes/const";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.background}>
            <Container>
                <div className={styles.header}>
                    <NavLink className={styles.link} to={MAIN_PAGE_ROUTE}>Main</NavLink>
                    <NavLink className={styles.link} to={ABOUT_PAGE_ROUTE}>About</NavLink>
                    <NavLink className={styles.link} to={PROJECTS_PAGE_ROUTE}>Projects</NavLink>
                    <NavLink className={styles.link} to={WAY_PAGE_ROUTE}>My way</NavLink>
                </div>
            </Container>
        </div>
    );
};

export default Header;