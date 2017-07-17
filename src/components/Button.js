import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Button extends Component {
  
  render() {
    return (
      <Link to={this.props.path} className="btn btn-primary" onClick={this.props.handleSubmit}>{this.props.name}</Link>
    );
  }
}