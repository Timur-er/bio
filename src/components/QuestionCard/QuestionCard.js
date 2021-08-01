import React from 'react';
import styles from './QuestionCard.module.scss';
import Button from "../Button/Button";

const QuestionCard = () => {
    return (
        <div className={styles.cardWrapper}>
            <span className={styles.question}>Here will be a question later</span>
            <div className={styles.buttonBlock}>
                <Button variant={'answer'}>Answer</Button>
                <Button variant={'toTop'}>Vote to top</Button>
                <Button variant={'bad'}>Bad question</Button>
            </div>

        </div>
    );
};

export default QuestionCard;