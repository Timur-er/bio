import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import {MAIN_PAGE_ROUTE, QUESTIONS_PAGE_ROUTE, CHAT_PAGE_ROUTE, AUTH_PAGE_ROUTE} from "./const";
import MainPage from "../pages/MainPage/MainPage";
import QuestionsPage from "../pages/QuestionsPage/QuestionsPage";
import MenuBar from "../components/MenuBar/MenuBar";
import ChatPage from "../pages/ChatPage/ChatPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import {animated, useTransition} from "react-spring";
import styles from './PageAnimatiob.module.scss';
import Popup from "../components/Popup/Popup";


const PagesRoute = () => {

    const location = useLocation();
    const transitions = useTransition(location,  {
        from: {transform: `translateX(100%)`},
        enter: {transform: `translateX(0)`},
        leave: {transform: `translateX(-100%)`}
    })

    return (
        <>
        <MenuBar/>
            <Popup />
            <main className={styles.wrapper}>
                {transitions((props, item) => (
                    <animated.div style={props}>
                        <div className={styles.routesWrapper}>
                            <Switch location={item}>
                                <Route component={MainPage} exact path={MAIN_PAGE_ROUTE}/>
                                <Route component={QuestionsPage} exact path={QUESTIONS_PAGE_ROUTE}/>
                                <Route component={ChatPage} exact path={CHAT_PAGE_ROUTE}/>
                                <Route component={AuthPage} exact path={AUTH_PAGE_ROUTE}/>
                            </Switch>
                        </div>
                    </animated.div>
                ))}
            </main>
        </>
    )
};

export default PagesRoute;