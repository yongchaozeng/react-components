import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import App from '../pages/App'
// import Test from '@/page/test'

const Router: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/app' component={App} />
            </Switch>

        </BrowserRouter>
    )

}

export default Router;