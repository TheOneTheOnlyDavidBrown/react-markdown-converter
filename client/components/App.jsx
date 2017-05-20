import React from 'react';
//import { Router, Route, Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Converter from './Converter.jsx';

export default class App extends React.Component {
    onSuccess(data = {}){
        console.log(data)
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                      <ul>
                        <li><Link to="/">New</Link></li>
                        <li><Link to="/markdown/1">Example 1</Link></li>
                        <li><Link to="/markdown/2">Example 2</Link></li>
                      </ul>

                      <hr/>
                      <Route path="/markdown/:id" component={Converter} onSuccess={this.onSuccess} flavor="github" />
                    </div>
                </Router>
            </div>
        );
    }
}
