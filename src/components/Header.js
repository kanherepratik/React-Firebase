import React, {Component} from 'react';
import '../css/header.css'

export default class Header extends Component {

  render() {
    return (
      <div className="container">
        <div className="dropdown user">
          Welcome {this.props.user}<i className="fa fa-user user-ico" aria-hidden="true"></i>
          <i className="fa fa-caret-down" aria-hidden="true" data-toggle="dropdown"></i>
          <ul className="dropdown-menu dropdown-menu-right">
            <li>
              <a onClick={this.props.logout}>logout</a>
            </li>
             <li>
              <a>Profile</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}