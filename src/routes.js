import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Showcase from './containers/showcase';
import Blog from './containers/blog';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Showcase}></IndexRoute>
        <Route path="/blog" component={Blog}></Route>
    </Route>
);

export default routes;
