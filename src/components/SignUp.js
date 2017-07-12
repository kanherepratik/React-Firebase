import React, { Component } from 'react';
import {Link} from  "react-router";

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            toggleMsg:false,
            username: '',
            name:'',
            password: ''
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        const user = {
            username:this.state.username,
            name:this.state.name,
            password:this.state.password
        }
        if(user.username !== '' && user.password !== '' && user.name !== ''){
            localStorage.setItem('user',JSON.stringify(user));
            this.setState({toggleMsg:true});
        }
        event.preventDefault();
    }
    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }
    render() {
        return (
            <div>
                <div><h2>Register To Portal</h2></div>
                {this.state.toggleMsg ? <h3 >User registered successfully</h3> : null}
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={this.state.username} onChange ={this.handleChange}></input>  
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={this.state.name} onChange ={this.handleChange}></input>  
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={this.state.password} onChange ={this.handleChange}></input>  
                    </div>       
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Register</button>   
                    <Link to="/">Go to Login</Link>     
                </form>
            </div> 
        );
    }
}