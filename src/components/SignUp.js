import React, { Component } from 'react';
import Form from '../components/Form'

export default class SignUp extends Component {
    constructor() {
        super();
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
            <div>
                <div><h2>Register To Portal</h2></div>
                <Form />
            </div>
            
        );
    }
}