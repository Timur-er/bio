import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ABOUT_PAGE_ROUTE, MAIN_PAGE_ROUTE, QUESTIONS_PAGE_ROUTE, WAY_PAGE_ROUTE } from "./const";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import QuestionsPage from "../pages/QuestionsPage/QuestionsPage";
import WayPage from "../pages/WayPage/WayPage";
import MenuBar from "../components/MenuBar/MenuBar";

const PagesRoute = () => {
    return (
        <>
            <MenuBar />
            <Switch>
                <Route component={MainPage} exact path={MAIN_PAGE_ROUTE}/>
                <Route component={AboutPage} exact path={ABOUT_PAGE_ROUTE}/>
                <Route component={QuestionsPage} exact path={QUESTIONS_PAGE_ROUTE}/>
                <Route component={WayPage} exact path={WAY_PAGE_ROUTE}/>
            </Switch>
        </>
    );
};

export default PagesRoute;