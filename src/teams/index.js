let util = require('../util');

let ANA = require('./ANA');
let ARI = require('./ARI');
let BOS = require('./BOS');
let BUF = require('./BUF');
let CAR = require('./CAR');
let CBJ = require('./CBJ');
let CGY = require('./CGY');
let CHI = require('./CHI');
let COL = require('./COL');
let DAL = require('./DAL');
let DET = require('./DET');
let EDM = require('./EDM');
let FLA = require('./FLA');
let LAK = require('./LAK');
let MIN = require('./MIN');
let MTL = require('./MTL');
let NJD = require('./NJD');
let NSH = require('./NSH');
let NYI = require('./NYI');
let NYR = require('./NYR');
let OTT = require('./OTT');
let PHI = require('./PHI');
let PIT = require('./PIT');
let SJS = require('./SJS');
let STL = require('./STL');
let TBL = require('./TBL');
let TOR = require('./TOR');
let VAN = require('./VAN');
let VGK = require('./VGK');
let WPG = require('./WPG');
let WSH = require('./WSH');

let teams = {
  ANA: ANA,
  ARI: ARI,
  BOS: BOS,
  BUF: BUF,
  CAR: CAR,
  CBJ: CBJ,
  CGY: CGY,
  CHI: CHI,
  COL: COL,
  DAL: DAL,
  DET: DET,
  EDM: EDM,
  FLA: FLA,
  LAK: LAK,
  MIN: MIN,
  MTL: MTL,
  NJD: NJD,
  NSH: NSH,
  NYI: NYI,
  NYR: NYR,
  OTT: OTT,
  PHI: PHI,
  PIT: PIT,
  SJS: SJS,
  STL: STL,
  TBL: TBL,
  TOR: TOR,
  VAN: VAN,
  VGK: VGK,
  WPG: WPG,
  WSH: WSH
};

// Creates a JSON object where the keys are letious names and the values are the associated team abbreviation
// ex. "Boston": "BOS"
let combinedTerms = Object.keys(teams).reduce(function(total, teamKey) {
  let team = teams[teamKey];

  total[team.cityName] = team.abbreviation;
  total[team.teamName] = team.abbreviation;
  total[team.abbreviation] = team.abbreviation;
  total[team.fullName] = team.abbreviation;

  if (team.terms.length > 0) {
    team.terms.forEach(function (term) {
      total[term] = team.abbreviation
    });
  }
  return total;
}, {});


module.exports = {
  find: function(text, caseSensitive = true) {
    let teamKey = caseSensitive ? combinedTerms[text] : util.getByKey(combinedTerms, text);
    return teams[teamKey] !== undefined ? teams[teamKey] : null;
  },
  getAllTerms: function() {
    return Object.keys(combinedTerms).reduce(function(total, term) {
      total.push(term);
      return total;
    }, []);
  },
  getAllTeams: function() {
    return teams;
  }
};