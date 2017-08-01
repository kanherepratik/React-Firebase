import React, {Component} from 'react';
import '../css/header.css'
import Button from '../components/Button'

export default class VoteModal extends Component {

  render() {
    return (
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Vote For Today's Match</h4>
            </div>
            <div className="modal-body">
              {this
                .props
                .match
                .map((item, index) => {
                  return (
                    <form key={index}>
                      <div className="radio">
                        <label><input
                          type="radio"
                          value={item.team1}
                          name={item.Venue}
                          onChange={this.props.recordVote}/>{item.team1}</label>
                      </div>
                      <div className="radio">
                        <label><input
                          type="radio"
                          value={item.team2}
                          name={item.Venue}
                          onChange={this.props.recordVote}/>{item.team2}</label>
                      </div>
                    </form>
                  )
                })
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              <Button name="Vote" handleSubmit={this.props.submitVote}></Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
