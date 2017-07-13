import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <div className="row">
        <div className="col-sm-12">
          <Header/>
        </div>
       </div> 
        <div className="row App-Login">
          <div className="col-sm-12">
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;