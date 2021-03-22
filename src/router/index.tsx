import React, { } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/login'
import App from '../pages/App'
import Test from '../pages/test'
import Blog from '@/pages/blog'
import Lifetime from '@/pages/lifetime'
import Home from '@/pages/home'
// import Test from '@/page/test'

const Router: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/lifetime' component={Lifetime} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/Login' component={Login} />
                <Route path='/home' render={() => {
                    return (
                        <Home>
                            {/* <Route exact path='/home' component={home} /> */}
                            <Route exact path='/home/Test' component={Test} />
                            <Route exact path='/home/app' component={App} />
                        </Home>
                    )
                }} />
                <Route exact path='*' component={Login} />
            </Switch>
        </BrowserRouter>
    )

}


export default Router;