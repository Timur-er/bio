import React from 'react';
import styles from './MainPage.module.scss';
import MenuBar from "../../components/MenuBar/MenuBar";
import {Zoom, Flip} from "react-reveal";
import InfoCard from "../../components/InfoCard/InfoCard";
import Button from "../../components/Button/Button";

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <div className={styles.greeting}>
                <Flip top>
                        <div className={styles.questionWrapper}>
                            <span className={styles.questionBack}>Ask me</span>
                            <div className={styles.questionBlock}>
                                <input className={styles.questionInput} type="text"/>
                                <Button variant={'default'}>search</Button>
                            </div>
                        </div>
                </Flip>
            </div>
        </div>
    );
};

export default MainPage;