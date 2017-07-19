import React, {Component} from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
import fire from '../fire';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      toggleMsg: false,
      username: '',
      name: '',
      password: '',
      users: []
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleSubmit = (event) => {
    const user = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name
    };
    if (user.username !== '' && user.password !== '' && user.name !== '') {
      this
        .state
        .users
        .push(user);
      localStorage.setItem('user', JSON.stringify(this.state.users));
      this.setState({toggleMsg: true});
    }
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(user.username, user.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage,errorCode);
    });
  }
  handleChange = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }
  render() {
    return (
      <div className="App-SignUp">
        <div>
          <h2>Register To Portal</h2>
        </div>
        {this.state.toggleMsg
          ? <h3 >User registered successfully</h3>
          : null}
        <form className="form-signin">
          <Input
            type="text"
            name="username"
            placeHolder="Username"
            value={this.state.username}
            handleChange
            ={this.handleChange} />
          <Input
            type="text"
            name="name"
            placeHolder="Name"
            value={this.state.name}
            handleChange
            ={this.handleChange} />
          <Input
            type="password"
            name="password"
            placeHolder="Password"
            className="form-control"
            value={this.state.password}
            handleChange
            ={this.handleChange} />
        </form>
        <Button name="Register" path=""  handleSubmit={this.handleSubmit}/> 
        <Button name="Go to Login" path="/"/> 
      </div>
    );
  }
}