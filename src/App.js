import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Header from './components/Header'

class App extends Component {
  render() {
    return ( 
          <div className = "App"> 
              <Header />
              <div className = "App-Login"> <Login /> 
              </div> 
              <div className = "App-Register"><SignUp /></div> 
          </div>
        );
    }
}

export default App;