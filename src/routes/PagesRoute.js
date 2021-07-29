import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ABOUT_PAGE_ROUTE, MAIN_PAGE_ROUTE, PROJECTS_PAGE_ROUTE, WAY_PAGE_ROUTE } from "./const";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import WayPage from "../pages/WayPage/WayPage";
import Header from "../components/Header/Header";

const PagesRoute = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route component={MainPage} exact path={MAIN_PAGE_ROUTE}/>
                <Route component={AboutPage} exact path={ABOUT_PAGE_ROUTE}/>
                <Route component={ProjectsPage} exact path={PROJECTS_PAGE_ROUTE}/>
                <Route component={WayPage} exact path={WAY_PAGE_ROUTE}/>
            </Switch>
        </>
    );
};

export default PagesRoute;