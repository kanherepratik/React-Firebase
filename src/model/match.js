var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = new Schema({
        team1: String,
        team2: String,
        date: String,
        time: String,
        Venue: String,
        shortName1:String,
        shortName2:String
});

module.exports = mongoose.model('match', MatchSchema);