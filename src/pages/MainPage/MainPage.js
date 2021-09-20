import React from 'react';
import styles from './MainPage.module.scss';
import MenuBar from "../../components/MenuBar/MenuBar";
import {Zoom, Flip} from "react-reveal";
import InfoCard from "../../components/InfoCard/InfoCard";
import Button from "../../components/Button/Button";
import QuestionInput from "../../components/QuestionInput/QuestionInput";

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <div className={styles.greeting}>
                <Flip top>
                        <div className={styles.questionWrapper}>
                            <span className={styles.questionBack}>Ask me</span>
                            <div className={styles.questionBlock}>
                                <QuestionInput />
                            </div>
                        </div>
                </Flip>
            </div>
        </div>
    );
};

export default MainPage;