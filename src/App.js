import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import './NewsItemPositions.css'
import Welcome from './containers/Welcome/Welcome';
import NewsMap from './containers/NewsMap/NewsMap';
import AppInfo from './containers/AppInfo';
import Auth from './containers/Auth';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Auth(Welcome)} />
        <Route exact path="/news" component={Auth(NewsMap)} />
        <Route exact path="/about" component={AppInfo} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
