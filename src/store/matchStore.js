import { EventEmitter } from "events";
 import dispatcher from "../dispatcher";

class MatchStore extends EventEmitter {
    constructor() {
        super()
        this.matches = [
        {
          team1: "Delhi Daredevils",
          team2: "Gujrat Lions",
          date: "7/17/2017",
          time: "4:30 PM",
          Venue: "Delhi",
          shortName1: 'DD',
          shortName2: 'GL'

        }, {
          team1: "Mumbai Indians",
          team2: "Royal Challengers Banglore",
          date: "7/17/2017",
          time: "8:30 PM",
          Venue: "Mumbai",
          shortName1: 'MI',
          shortName2: 'RCB'
        }, {
          team1: "Delhi Daredevils",
          team2: "Gujrat Lions",
          date: "17/07/2017",
          time: "4:30 PM",
          Venue: "Delhi",
          shortName1: 'DD',
          shortName2: 'GL'
        }
      ];
    }
    addNewMatch = (match) => {
        this.matches.push(match);
        this.emit("change");
    }
    getAll = () => {
        return this.matches;
    }
    handleAction = (action) => {
        switch(action.type) {
            case "ADD_MATCH": {
                this.addNewMatch(action.match)
                break;
            }
            case "GET_MATCH": {
                console.log("match Recieved")
                this.emit("change");
                break;
            }
            default: {
                console.log("default");
            }
        }
    }
}

const matchStore = new MatchStore;
dispatcher.register(matchStore.handleAction.bind(matchStore));
window.dispatcher = dispatcher;
export default matchStore;