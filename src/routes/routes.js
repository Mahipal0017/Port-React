import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../components/login';
import Home from '../components/home';
import WhatIDo from '../components/whatIDo';
import Skills from '../components/skills';
import About from '../components/about';
import Work from '../components/work';
import Contact from '../components/contact';
import LoginPage from '../components/loginForm';
import QuestionPage from '../components/questionPage';


const routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            <Route exact path='/' component={LoginPage} />
            <Route path="/home" component={Home} />
            <Route path="/whatido" component={WhatIDo} />
            <Route path="/about" component={About} />
            <Route path="/questionPage" component={QuestionPage} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route render={ () => <h1>404 Error</h1> } />
        </Switch>
    </BrowserRouter>
    );
};

export default routes;