import React from 'react';
import styles from './QuestionCard.module.scss';
import Button from "../Button/Button";
// import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import {CHAT_PAGE_ROUTE} from "../../routes/const";

const QuestionCard = () => {

    const openChat = () => {
        console.log('open chat')
    }

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.textSection}>
                <span className={styles.question}>Here will be a question later</span>
                    <span className={styles.name}> Timur Erkimbaev</span>
            </div>

            <div className={styles.buttonBlock}>
                <NavLink to={CHAT_PAGE_ROUTE}>
                    <Button onClick={openChat} variant={'answer'}>Answer</Button>
                </NavLink>
                <Button variant={'toTop'}>Vote to top</Button>
                <Button variant={'bad'}>Bad question</Button>
            </div>

        </div>
    );
};

export default QuestionCard;