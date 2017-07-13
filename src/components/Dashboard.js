import React, {Component} from 'react';
import VS from '../images/Vs.png'
import SRH from '../images/SRH.png'
import RCB from '../images/RCB.png'
import '../css/dashboard.css'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [
        {
          "name": "Match 1",
          "team1": "Sunrisers Hyderabad",
          "team2": "Royal Challengers Bangalore",
          "date": "14/07/2017",
          "type": "normal",
          "win_score": "10",
          "lose_score": "-5"
        }, {
          "name": "Match 2",
          "team1": "Rising Pune Supergiant",
          "team2": "Mumbai Indians",
          "date": "14/07/2017",
          "type": "powerplay",
          "win_score": "25",
          "lose_score": "-10"
        }, {
          "name": "Match 3",
          "team1": "Gujarat Lions",
          "team2": "Kolkata Knight Riders",
          "date": "15/07/2017",
          "type": "freehit",
          "win_score": "50",
          "lose_score": "0"
        }, {
          "name": "Match 4",
          "team1": "Kings XI Punjab",
          "team2": "Rising Pune Supergiant",
          "date": "12/07/2017",
          "type": "googly",
          "win_score": "0",
          "lose_score": "0"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        {this
          .state
          .matches
          .map(function (obj, i) {
            if (obj.date === new Date().toLocaleDateString()) {
              return (
                <div key={i}>
                  <div className="team1">
                    <p><img src={SRH} className="vs-img img-circle" alt=""/></p>{obj.team1}</div><img src={VS} className="vs-img" alt=""/>
                  <div className="team2">
                    <p><img src={RCB} className="vs-img img-circle" alt=""/></p>{obj.team2}</div>
                    <span className="clearfix"></span>
                </div>
              )
            }
            return(true)
          })
        }
      </div>
    );
  }
}