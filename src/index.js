import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker';
import {Router, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App}></Route>
            <Route path='/Home' component={Login}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
)
registerServiceWorker();
