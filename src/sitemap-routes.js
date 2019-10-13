import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/servicos" />
    <Route exact path="/servicos/:id" />
    <Route exact path="/blog" />
    <Route exact path="/post/:id" />
    <Route path="*" />
  </Switch>
);
