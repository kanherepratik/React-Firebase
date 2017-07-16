import React, {Component} from 'react';
import '../css/header.css'

export default class Vote extends Component {
  render() {
    return (
      <div className="clearfix vote">
        <div className="team1 col-sm-6"><figure><span className={this.props.shortName1}></span><figcaption>{this.props.team1}</figcaption></figure></div>
        <div className="team2 col-sm-6"><figure><span className={this.props.shortName2}></span><figcaption>{this.props.team2}</figcaption></figure></div>
      </div>

    );
  }
}