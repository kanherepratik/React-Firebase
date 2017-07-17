import dispatcher from '../dispatcher'
import $ from 'jquery'

export function GetMatches() {
  dispatcher.dispatch({type: "FETCH_DATA"});
  $
    .ajax({url: "http://localhost:3000/match", method: 'GET'})
    .then(function (data) {
      dispatcher.dispatch({type: "GET_MATCH", match: data})
    });
}
export function addMatch(match) {
  dispatcher.dispatch({type: "ADD_MATCH", match});
}