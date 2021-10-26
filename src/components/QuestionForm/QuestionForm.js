import React, {useRef, useState} from 'react';
import ModalWindow from "../ModalWindow/ModalWindow";
import styles from './QuestionForm.module.scss';
import {useSelector} from "react-redux";
import {setQuestion} from "../../store/question/actions";
import {getQuestion} from "../../store/question/selectors";
import {useHttp} from "../../Hooks/http.hook";
import {getUserName} from "../../store/auth/selectors";

const QuestionForm = () => {
    const question = useSelector(getQuestion);
    const userName = useSelector(getUserName);
    const [questionInput, setQuestionInput] = useState(question);
    const {error, request} = useHttp();

    const changeInput = (e) => {
        const changes = e.target.value;
        setQuestionInput(changes);
        console.log(e.target.value);
    }

    const postQuestion = async () => {
        try {
            const data = await request('https://askme-server.herokuapp.com/api/questions/postQuestion', 'POST', {question, userName})
            console.log(data);
            console.log('error === ' + error);
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <ModalWindow>
            <div className={styles.questionDetails}>
                <div className={styles.questionWrapper}>
                    Here is your question:
                    {/*<div className={styles.inputWrapper}>*/}
                        <textarea onChange={changeInput} value={questionInput} className={styles.inputQuestion}/>
                    {/*</div>*/}
                </div>
                <div className={styles.descriptionBlock}>
                    <span>Do you want to add more details to your question?</span>
                    <button className={styles.descriptionBtn}>add</button>
                </div>
                <div className={styles.postQuestion}>
                    <span>Is your question done?</span>
                    <button onClick={postQuestion} className={styles.continueBtn}>collect answers</button>
                </div>
            </div>

        </ModalWindow>
    );
};

export default QuestionForm;