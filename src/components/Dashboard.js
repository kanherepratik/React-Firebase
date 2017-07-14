import React, {Component} from 'react';
import LeaderBoard from '../components/LeaderBoard'
import Chart from '../components/Chart'
import NewsFeed from '../components/NewsFeed'
import Popup from 'react-popup';
import VS from '../images/Vs.png'
import SRH from '../images/SRH.png'
import RCB from '../images/RCB.png'
import '../css/dashboard.css'
import '../css/popupStyles.css'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
      /*this.state = {
         matches :[
          {
            "name": "Match 1",
            "team1": "Sunrisers Hyderabad",
            "team2": "Royal Challengers Bangalore",
            "date":  "7/14/2017",
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
      }*/
      this.voteNow = this.voteNow.bind(this);
  }

  voteNow = () => {
    Popup.create({
          className: 'prompt',
          noOverlay: true,
          position: {x: 0, y: 0},
          closeOnOutsideClick: true,
          buttons: {
              right: ['ok']
          }
        });
  }
  render() {
    return (
      <div>
        <Popup />
        <div className="row">
            <div className="col-sm-12"> 
              <div className="container">
                <h3>LeaderBoard</h3>
                <LeaderBoard></LeaderBoard> 
              </div>    
            </div>
            <div className="col-sm-12">
              <div className="container">
                  <h3>Chart Comparison</h3>
                  <Chart></Chart> 
              </div>    
            </div>
            <div className="col-sm-12">
              <div className="container">
                <h3>News Feed</h3>
                <NewsFeed></NewsFeed> 
              </div>  
            </div>
        </div>
      </div>
    );
  }
}