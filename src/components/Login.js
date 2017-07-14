import React, {Component} from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
import {browserHistory} from 'react-router'

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
  handleSubmit = (event) => {
    event.preventDefault();
    const regUser = JSON.parse(localStorage.getItem('user'));
    for (let i = 0; i < regUser.length; i++) {
      if (this.state.username === regUser[i].username && this.state.password === regUser[i].password) {
          browserHistory.push('/Dashboard')}
    }
  }
  handleChange = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }
  render() {

    return (
      <div className="App-Login">
        <div>
          <h2>Login To Portal</h2>
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
        </form>
        <Button name="Login" path="" handleSubmit={this.handleSubmit}/>
        <Button name="Register" path="/Register"/>
      </div>

    );
  }
}