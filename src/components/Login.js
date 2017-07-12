import React, {Component} from 'react';
import Form from '../components/Form'

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
        console.log(this.state.username, this.state.password);
        const user = JSON.parse(localStorage.getItem('user'));
        if(user.username === this.state.username && user.password === this.state.password){
            alert('user authenticated');
        }
        event.preventDefault();
    }
    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }
    render() {
        return ( 
            <div>
                <div><h2>Login To Portal</h2></div>
                <Form />
            </div>
            
        );
    }
}