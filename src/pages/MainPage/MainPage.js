import React from 'react';
import Container from "../../components/Container/Container";
import styles from './MainPage.module.scss';

const MainPage = () => {
    return (
        <div>
            <Container>
                <div className={styles.title}>
                    Timur Erkimbaev
                </div>
            </Container>
        </div>
    );
};

export default MainPage;