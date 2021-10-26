import React from 'react';
import styles from './MainPage.module.scss';
import {Flip} from "react-reveal";
import QuestionInput from "../../components/QuestionInput/QuestionInput";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import {useSelector} from "react-redux";
import {getIsModalOpen} from "../../store/modal/selectors";

const MainPage = () => {

    const isModalOpen = useSelector(getIsModalOpen);

    return (
        <>
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
            {isModalOpen && <QuestionForm/>}
        </>

    );
};

export default MainPage;