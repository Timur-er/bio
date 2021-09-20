import React, {useRef, useState} from 'react';
import Button from "../Button/Button";
import styles from './QuestionInput.module.scss';
import {useSelector} from "react-redux";
import {getIsAuth} from "../../store/auth/selectors";
import ModalWindow from "../ModalWindow/ModalWindow";

const QuestionInput = () => {
    const isAuth = useSelector(getIsAuth)
    const question = useRef();

    const askQuestion = () => {
        if (isAuth) {

        }
        console.log(question.current.value);
        console.log('i am try to ask question')
    }

    return (
        <>
            <input ref={question} className={styles.questionInput} type="text"/>
            <Button onClick={askQuestion} variant='default'>ASK</Button>
        </>
    );
};

export default QuestionInput;