import React, {Component} from 'react';
import Input from '../components/Input'
import Button from '../components/Button'
import fire from '../fire';
import {browserHistory} from 'react-router'

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      toggleBtn: false,
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
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name
    };
    if (!user.username === '' && !user.password === '') {
      this.setState({toggleBtn: true});
    }
    const db = fire.database();
    const UserData = {
      name: user.name,
      totalScore: 0,
      ranking: 0,
      prediction: [],
      authorPic: 'picture',
      vote:{
        vote1:'',
        vote2:''
      }
    };
    var newUserKey = fire
      .database()
      .ref()
      .child('users')
      .push()
      .key;

    fire
      .auth()
      .createUserWithEmailAndPassword(user.username, user.password)
      .then((user) => {
        var updates = {};
        updates['/users/' + user.uid] = UserData;
        browserHistory.push('/');
        return fire
          .database()
          .ref()
          .update(updates);
        //console.log(user);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
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
        <form className="form-signin">
          <Input
            type="email"
            name="username"
            placeHolder="Email"
            value={this.state.username}
            handleChange
            ={this.handleChange}/>
          <Input
            type="text"
            name="name"
            placeHolder="Name"
            value={this.state.name}
            handleChange
            ={this.handleChange}/>
          <Input
            type="password"
            name="password"
            placeHolder="Password"
            className="form-control"
            value={this.state.password}
            handleChange
            ={this.handleChange}/>
          <Button
            name="Register"
            className={this.state.toggleBtn}
            handleSubmit={this.handleSubmit}/>
          <Button name="Go to Login" path="/"/>
        </form>

      </div>
    );
  }
}