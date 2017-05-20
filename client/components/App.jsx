import React from 'react';
//import { Router, Route, Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home.jsx';
import Converter from './Converter.jsx';

export default class App extends React.Component {
    onSuccess(data = {}) {
        console.log(data)
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul className="nav nav-tabs">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/markdown/1">Example 1</Link></li>
                          <li><Link to="/markdown/2">Example 2</Link></li>
                        </ul>
                        <Route exact path="/" render={(props)=><Home {...props} />} />
                        <Route path="/markdown/:id" render={(props)=><Converter onSuccess={this.onSuccess} flavor="github" {...props} />} />
                    </div>
                </Router>
            </div>
        );
    }
}
