import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

import Header from './components/Header';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/blog" component={Blog} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
