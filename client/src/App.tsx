import React, {ReactNode} from 'react';
import './App.scss';
import {GroupDetail} from "./group/GroupDetail";
import {Route, Switch} from "react-router-dom"
import {Post} from "./post/Post";
import {StartPage} from "./startPage/StartPage";
import {Settings} from "./settings/Settings";


export default class App extends React.Component {
  render(): ReactNode {
    return (
      <div className="app">
        <Switch>
          <Route path="/groups/:name" component={GroupDetail}/>
          <Route path="/post/:name/:number?" component={Post}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/" component={StartPage}/>
        </Switch>
      </div>
    );
  }
};
