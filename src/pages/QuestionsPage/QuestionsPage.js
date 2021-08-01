import React from 'react';
import Container from "../../components/Container/Container";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import styles from './QuestionPage.module.scss';

const QuestionsPage = () => {
    return (
        <div className={styles.questionsPage}>
            <Container>
                <div className={styles.questionsBlock}>
                    <span className={styles.title}>Answer the question</span>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                </div>
            </Container>
        </div>
    );
};

export default QuestionsPage;