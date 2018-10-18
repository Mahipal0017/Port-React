import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../components/app';
import Skills from '../components/skills';
import About from '../components/about';
import Work from '../components/work';
import Contact from '../components/contact';
import Login from '../components/loginForm';

const routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/app" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/work" component={Work}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    </BrowserRouter>
    );
};

export default routes;