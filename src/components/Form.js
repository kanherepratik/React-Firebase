import React, { Component } from 'react';
import {Link} from 'react-router';

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
        const user = {
            username:this.state.username,
            password:this.state.password
        }
        this.props.sendData(user);
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
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={this.state.username} onChange ={this.handleChange}></input>  
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" value={this.state.password} onChange ={this.handleChange}></input>  
                    </div>   
                    <Link to="/" onClick={this.handleSubmit}>Login</Link>    
                    <Link to="/Register">Register</Link>        
                </form>
              </div>  
        );
    }
}