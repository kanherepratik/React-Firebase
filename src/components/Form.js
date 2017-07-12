import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        console.log(this.state.username, this.state.password);
        const user = {
            username:this.state.username,
            password:this.state.password
        }
        if(user.username !== '' && user.password !== ''){
            localStorage.setItem('user',JSON.stringify(user));
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
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={this.state.username} onChange ={this.handleChange}></input>  
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" value={this.state.password} onChange ={this.handleChange}></input>  
                    </div>      
                    <input type="submit" value="Register"></input>          
                </form>
   
        );
    }
}