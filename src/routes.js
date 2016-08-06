import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './components/home';
import Blog from './components/Blog';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/blog" component={Blog}></Route>
    </Route>
);

export default routes;
