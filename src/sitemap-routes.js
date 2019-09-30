import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/servicos" />
    <Route exact path="/servicos/:id" />
    <Route exact path="/blog" />
    <Route exact path="/login" />
    <Route exact path="/panel" />
    <Route exact path="/forgot" />
    <Route exact path="/reset" />
    <Route exact path="/user/create" />
    <Route exact path="/post/:id" />
    <Route path="*" />
  </Switch>
);
