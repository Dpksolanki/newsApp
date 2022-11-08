
import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  c = 'Deepak'
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        
        <Switch>
          <Route exact path="/" element = {<News key="General" pageSize={5} country="in" category="General"/>} />
          <Route exact path="/Business" element = {<News key="Business" pageSize={5} country="in" category="Business"/>} />
          <Route exact path="/Entertainment" element = {<News key="Entertainment" pageSize={5} country="in" category="Entertainment"/>} />
          <Route exact path="/General" element = {<News key="General" pageSize={5} country="in" category="General"/>} />
          <Route exact path="/Health" element = {<News key="Health" pageSize={5} country="in" category="Health"/>} />
          <Route exact path="/Science" element = {<News key="Science" pageSize={5} country="in" category="Science"/>} />
          <Route exact path="/Sports" element = {<News key="Sport" pageSize={5} country="in" category="Sports"/>} />
          <Route exact path="/Technology" element = {<News key="Technology" pageSize={5} country="in" category="Technology"/>} />
        </Switch>
        </Router>
      </div>
    )
  }
}
