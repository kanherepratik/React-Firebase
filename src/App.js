import React, {Component} from 'react';
import './css/reset.css';
import './App.css';
global.jQuery = require('jquery');
require('bootstrap');
class App extends Component {
  render() {
    return (
      <div className="App"> 
        <div className="">
            <div className="col-sm-12">
                {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}

export default App;