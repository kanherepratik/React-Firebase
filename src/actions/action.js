import dispatcher from '../dispatcher'
import $ from 'jquery'


export function GetMatches() {
    $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: 'GET'
    }).then(function(data) {
        console.log(data);
        dispatcher.dispatch({
            type:"GET_MATCH",
            match:data
        })
    });  
}
export function addMatch(match) {
    dispatcher.dispatch({
        type:"ADD_MATCH",
        match,
    });
} 
/*export function reloadMatch() {
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
    url: root + '/users',
    method: 'GET'
    }).then(function(data) {
        dispatcher.dispatch({
            type:"GET_MATCH",
            match:data
        })
    });  
} */
