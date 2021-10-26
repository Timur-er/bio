import React, {useRef, useState} from 'react';
import styles from './QuestionCard.module.scss';
import Button from "../Button/Button";
// import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import {CHAT_PAGE_ROUTE} from "../../routes/const";
import {getUserName} from "../../store/auth/selectors";
import {useSelector} from "react-redux";

const QuestionCard = ({ askUser, question }) => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [height, setHeight] = useState('0px')
    const content = useRef(null);
    const userName = useSelector(getUserName);

    const openChat = () => {
        console.log('open chat')
    }

    const openDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen)
        setHeight(isDescriptionOpen ? '0px' : `${content.current.scrollHeight}px`)
    }

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.textSection}>
                <span className={styles.question}>{question}</span>
                <span className={styles.name}>{askUser}</span>
            </div>

            <div ref={content} style={{height: `${height}`}} className={styles.description}>
                description
            </div>

            <div className={styles.buttonBlock}>
                <NavLink to={`${CHAT_PAGE_ROUTE}?userName=${userName}&askUser=${askUser}`}>
                    <Button onClick={openChat} variant={'answer'}>Answer</Button>
                </NavLink>
                <Button variant={'toTop'}>Vote to top</Button>
                <Button variant={'bad'}>Bad question</Button>
                <Button variant={'default'} onClick={openDescription}>{isDescriptionOpen ? 'Close description' : 'Open description'}</Button>
            </div>

        </div>
    );
};

export default QuestionCard;