import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class MatchStore extends EventEmitter {
  constructor() {
    super()
    this.matches = [];
  }
  addNewMatch = (match) => {
    this
      .matches
      .push(match);
    this.emit("change");
  }
  getAll = () => {
    return this.matches;
  }
  handleAction = (action) => {
    switch (action.type) {
      case "ADD_MATCH":
        {
          this.addNewMatch(action.match)
          break;
        }
      case "GET_MATCH":
        {
          this.matches = action.match;
          this.emit("change");
          break;
        }
    }
  }
}

const matchStore = new MatchStore();
dispatcher.register(matchStore.handleAction.bind(matchStore));
export default matchStore;