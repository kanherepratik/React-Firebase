import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="main">
          <div className="App-Login">
              {this.props.children}
          </div>
          <div className="clearFix"></div>
        </div>
      </div>
    );
  }
}

export default App;