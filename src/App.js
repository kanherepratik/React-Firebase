import React, {Component} from 'react';
import './css/reset.css';
import './App.css';
import Header from './components/Header'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div>
              <Header/>
        </div> 
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