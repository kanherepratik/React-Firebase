import React, { Component } from 'react';
import IPL from '../images/IPL-Banner.jpg'
import '../css/header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="bg-success">
                    <p className='user'><i className="fa fa-2x fa-user user-ico" aria-hidden="true"></i><i className="fa fa-2x fa-sign-out" aria-hidden="true"></i>SignOut</p>
                    <p className="clearfix"></p>
                </div>
                <div className = "App-header">
                <div className="container">
                    <img src = {IPL} className = "App-logo" alt = "logo" /> 
                    <h2> Welcome to CI Prediction League </h2> 
                </div> 
            </div>
            </div>
            
              
        );
    }
}