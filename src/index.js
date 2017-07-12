import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import {Router, Route, browserHistory, IndexRoute} from "react-router";

    class Root extends React.Component {
        render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={App} >
                    <IndexRoute component={Login} />
                    <Route path={"register"} component={SignUp} />
                    <Route path={"dashboard"} component={Dashboard} />
                </Route>
            </Router>
        );
    }
    }
    
    ReactDOM.render(<Root />, document.getElementById('root'));
   
    


