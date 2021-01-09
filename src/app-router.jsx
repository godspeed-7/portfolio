import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
}
