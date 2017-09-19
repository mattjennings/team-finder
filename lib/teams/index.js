'use strict';

var util = require('../util');

var ANA = require('./ANA');
var ARI = require('./ARI');
var BOS = require('./BOS');
var BUF = require('./BUF');
var CAR = require('./CAR');
var CBJ = require('./CBJ');
var CGY = require('./CGY');
var CHI = require('./CHI');
var COL = require('./COL');
var DAL = require('./DAL');
var DET = require('./DET');
var EDM = require('./EDM');
var FLA = require('./FLA');
var LAK = require('./LAK');
var MIN = require('./MIN');
var MTL = require('./MTL');
var NJD = require('./NJD');
var NSH = require('./NSH');
var NYI = require('./NYI');
var NYR = require('./NYR');
var OTT = require('./OTT');
var PHI = require('./PHI');
var PIT = require('./PIT');
var SJS = require('./SJS');
var STL = require('./STL');
var TBL = require('./TBL');
var TOR = require('./TOR');
var VAN = require('./VAN');
var VGK = require('./VGK');
var WPG = require('./WPG');
var WSH = require('./WSH');

var teams = {
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

// Creates a JSON object where the keys are terms/names and the values are the associated team abbreviation
// ex. "Boston": "BOS"
var combinedTerms = Object.keys(teams).reduce(function (total, teamKey) {
  var team = teams[teamKey];

  total[team.cityName] = team.abbreviation;
  total[team.teamName] = team.abbreviation;
  total[team.abbreviation] = team.abbreviation;
  total[team.fullName] = team.abbreviation;

  if (team.terms.length > 0) {
    team.terms.forEach(function (term) {
      total[term] = team.abbreviation;
    });
  }
  return total;
}, {});

module.exports = {
  find: function find(text) {
    var caseSensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var teamKey = caseSensitive ? combinedTerms[text] : util.getByKey(combinedTerms, text);
    return teams[teamKey] !== undefined ? teams[teamKey] : null;
  },
  getAllTerms: function getAllTerms() {
    return Object.keys(combinedTerms).reduce(function (total, term) {
      total.push(term);
      return total;
    }, []);
  },
  getAllTeams: function getAllTeams() {
    return teams;
  }
};
