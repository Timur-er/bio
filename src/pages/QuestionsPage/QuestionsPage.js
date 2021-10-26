import React, {useCallback, useEffect, useState} from 'react';
import Container from "../../components/Container/Container";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import styles from './QuestionPage.module.scss';
import {useHttp} from "../../Hooks/http.hook";

const QuestionsPage = () => {
    const {error, request, loading} = useHttp();
    const [questions, setQuestions] = useState(null);


    useEffect(() => {
        (async () => {
            try {
                const question =  await request('https://askme-server.herokuapp.com/api/questions/getAllQuestions', 'GET')
                setQuestions(question)
            } catch (e) {}
        })();
    }, [request])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            {!loading && questions && <div className={styles.questionsPage}>
                <Container>
                    <div className={styles.questionsBlock}>
                        <span className={styles.title}>Answer the question</span>
                        {questions.map(q => {
                            const {question, userName} = q;
                            return <QuestionCard question={question} askUser={userName}/>
                        })}
                    </div>
                </Container>
            </div>}
        </>
)
    ;
};

export default QuestionsPage;