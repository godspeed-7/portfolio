import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import ToolBar from './layout/toolbar/toolbar';

export default function AppRouter() {
  return (
    <React.Fragment>
      <ToolBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </React.Fragment>
  );
}
