import React, { Component } from 'react';
import '../css/header.css'

export default class Header extends Component {
    render() {
        return (       
                    <div className="container">
                        <p className='user'>Welcome {this.props.user}<i className="fa fa-2x fa-user user-ico" aria-hidden="true"></i></p>
                        <p className="clearfix"></p>
                    </div>   
        );
    }
}