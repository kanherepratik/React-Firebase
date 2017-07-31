import React, {Component} from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
import {browserHistory} from 'react-router'
import fire from '../fire'
import {Link} from 'react-router';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }
  componentDidMount() {}

  handleSubmit = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(function () {
        fire
          .auth()
          .onAuthStateChanged(user => {
            browserHistory.replace('/dashboard');
          });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
        alert(errorMessage);
        browserHistory.push('/');

      });
  }
  handleChange = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }
  render() {
    return (
      <div className="App-Login">
        <div>
          <h2>SIGN IN</h2>
        </div>
        <form className="form-signin" action="">
          <Input
            type="text"
            name="username"
            value={this.state.username}
            placeHolder="Username"
            handleChange={this.handleChange}/>
          <Input
            type="password"
            name="password"
            value={this.state.password}
            placeHolder="Password"
            handleChange={this.handleChange}/>
          <div>
            <Link to="/forgot">Forgot Password?</Link>
          </div>
          <div>
            <Button name="Register" path="/Register"/>
            <Button name="Login" path="" handleSubmit={this.handleSubmit}/>
          </div>
        </form>

      </div>

    );
  }
}