import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/login'
import App from '../pages/App'
import Home from '../pages/home'
// import Test from '@/page/test'

const Router: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/Login' component={Login} />
                <Route exact path='/home' component={Home} />
                <Route exact path='*' component={Login} />
            </Switch>

        </BrowserRouter>
    )

}

export default Router;