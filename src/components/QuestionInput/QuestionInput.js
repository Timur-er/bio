import React, {useRef} from 'react';
import Button from "../Button/Button";
import styles from './QuestionInput.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../../store/auth/selectors";
import {openModal} from "../../store/modal/actions";
import {setQuestion} from "../../store/question/actions";

const QuestionInput = () => {
    const isAuth = useSelector(getIsAuth)
    const questionRef = useRef();
    const dispatch = useDispatch();

    const askQuestion = () => {
        const question = questionRef.current.value;
        if (isAuth) {
            console.log(question);
            dispatch(openModal());
            dispatch(setQuestion(question));
        }
    }

    return (
        <>
            <input ref={questionRef} className={styles.questionInput} type="text"/>
            <Button onClick={askQuestion} variant='default'>ASK</Button>
        </>
    );
};

export default QuestionInput;