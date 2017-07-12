import React, {Component} from 'react';
import Form from '../components/Form'

export default class Login extends Component {
   constructor() {
    super();
    this.getData = this.getData.bind(this);
  }
  getData = (val) => {
    console.log(val);
  }
    render() {
        return ( 
            <div>
                <div><h2>Login To Portal</h2></div>
                <Form sendData={this.getData}/> 
            </div>
            
        );
    }
}