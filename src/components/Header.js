import React, { Component } from 'react';
import IPL from '../images/IPL-Banner.jpg'

export default class Header extends Component {
    render() {
        return (
                <div className = "App-header"> <img src = {IPL} className = "App-logo" alt = "logo" /> 
                     <h2> Welcome to CI Prediction League </h2> 
                </div> 
        );
    }
}