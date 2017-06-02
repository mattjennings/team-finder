var ANA = require('./ANA.js');
var BOS = require('./BOS.js');

var teams = {
  ANA: ANA,
  BOS: BOS
};

// Creates a JSON object where the keys are various names and the values are the associated team abbreviation
// ex. "Boston": "BOS"
var combinedTerms = Object.keys(teams).reduce(function(total, teamKey) {
  teams[teamKey].names.forEach(function(name) {
    total[name] = teams[teamKey].abbreviation
  });
  return total;
}, {});

console.log(combinedTerms)


module.exports = {
  getTeam: function(text) {
    if (combinedTerms[text] !== undefined) {
      return teams[combinedTerms[text]];
    } else {
      return null;
    }
  }
};