import React, {Component} from 'react';

export default class Input extends Component {

  render() {
    return (
        <input
            type={this.props.type}
            name={this.props.name}
            className="form-control"
            required=""
            autoFocus=""
            value={this.props.value}
            placeholder={this.props.placeHolder}
            onChange
            ={this.props.handleChange}></input>
    );
  }
}