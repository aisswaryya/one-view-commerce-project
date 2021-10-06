import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserData from './UserData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/users">
                <UserData />
            </Route>
            <Route path="/" exact>
                <App />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();
