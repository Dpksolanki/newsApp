
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
  pageSize = 5;
  country = 'US'
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        
        <Switch>
          <Route exact path="/" element = {<News key="General" pageSize={this.pageSize} country={this.country} category="General"/>} />
          <Route exact path="/Business" element = {<News key="Business" pageSize={this.pageSize} country={this.country} category="Business"/>} />
          <Route exact path="/Entertainment" element = {<News key="Entertainment" pageSize={this.pageSize} country={this.country} category="Entertainment"/>} />
          <Route exact path="/General" element = {<News key="General" pageSize={this.pageSize} country={this.country} category="General"/>} />
          <Route exact path="/Health" element = {<News key="Health" pageSize={this.pageSize} country={this.country} category="Health"/>} />
          <Route exact path="/Science" element = {<News key="Science" pageSize={this.pageSize} country={this.country} category="Science"/>} />
          <Route exact path="/Sports" element = {<News key="Sport" pageSize={this.pageSize} country={this.country} category="Sports"/>} />
          <Route exact path="/Technology" element = {<News key="Technology" pageSize={this.pageSize} country={this.country} category="Technology"/>} />
        </Switch>
        </Router>
      </div>
    )
  }
}
