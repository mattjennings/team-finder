'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllTeams = exports.getAllTerms = exports.find = undefined;

var _util = require('../util');

var util = _interopRequireWildcard(_util);

var _ANA = require('./ANA');

var _ANA2 = _interopRequireDefault(_ANA);

var _ARI = require('./ARI');

var _ARI2 = _interopRequireDefault(_ARI);

var _BOS = require('./BOS');

var _BOS2 = _interopRequireDefault(_BOS);

var _BUF = require('./BUF');

var _BUF2 = _interopRequireDefault(_BUF);

var _CAR = require('./CAR');

var _CAR2 = _interopRequireDefault(_CAR);

var _CBJ = require('./CBJ');

var _CBJ2 = _interopRequireDefault(_CBJ);

var _CGY = require('./CGY');

var _CGY2 = _interopRequireDefault(_CGY);

var _CHI = require('./CHI');

var _CHI2 = _interopRequireDefault(_CHI);

var _COL = require('./COL');

var _COL2 = _interopRequireDefault(_COL);

var _DAL = require('./DAL');

var _DAL2 = _interopRequireDefault(_DAL);

var _DET = require('./DET');

var _DET2 = _interopRequireDefault(_DET);

var _EDM = require('./EDM');

var _EDM2 = _interopRequireDefault(_EDM);

var _FLA = require('./FLA');

var _FLA2 = _interopRequireDefault(_FLA);

var _LAK = require('./LAK');

var _LAK2 = _interopRequireDefault(_LAK);

var _MIN = require('./MIN');

var _MIN2 = _interopRequireDefault(_MIN);

var _MTL = require('./MTL');

var _MTL2 = _interopRequireDefault(_MTL);

var _NJD = require('./NJD');

var _NJD2 = _interopRequireDefault(_NJD);

var _NSH = require('./NSH');

var _NSH2 = _interopRequireDefault(_NSH);

var _NYI = require('./NYI');

var _NYI2 = _interopRequireDefault(_NYI);

var _NYR = require('./NYR');

var _NYR2 = _interopRequireDefault(_NYR);

var _OTT = require('./OTT');

var _OTT2 = _interopRequireDefault(_OTT);

var _PHI = require('./PHI');

var _PHI2 = _interopRequireDefault(_PHI);

var _PIT = require('./PIT');

var _PIT2 = _interopRequireDefault(_PIT);

var _SJS = require('./SJS');

var _SJS2 = _interopRequireDefault(_SJS);

var _STL = require('./STL');

var _STL2 = _interopRequireDefault(_STL);

var _TBL = require('./TBL');

var _TBL2 = _interopRequireDefault(_TBL);

var _TOR = require('./TOR');

var _TOR2 = _interopRequireDefault(_TOR);

var _VAN = require('./VAN');

var _VAN2 = _interopRequireDefault(_VAN);

var _VGK = require('./VGK');

var _VGK2 = _interopRequireDefault(_VGK);

var _WPG = require('./WPG');

var _WPG2 = _interopRequireDefault(_WPG);

var _WSH = require('./WSH');

var _WSH2 = _interopRequireDefault(_WSH);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var teams = {
    ANA: _ANA2.default,
    ARI: _ARI2.default,
    BOS: _BOS2.default,
    BUF: _BUF2.default,
    CAR: _CAR2.default,
    CBJ: _CBJ2.default,
    CGY: _CGY2.default,
    CHI: _CHI2.default,
    COL: _COL2.default,
    DAL: _DAL2.default,
    DET: _DET2.default,
    EDM: _EDM2.default,
    FLA: _FLA2.default,
    LAK: _LAK2.default,
    MIN: _MIN2.default,
    MTL: _MTL2.default,
    NJD: _NJD2.default,
    NSH: _NSH2.default,
    NYI: _NYI2.default,
    NYR: _NYR2.default,
    OTT: _OTT2.default,
    PHI: _PHI2.default,
    PIT: _PIT2.default,
    SJS: _SJS2.default,
    STL: _STL2.default,
    TBL: _TBL2.default,
    TOR: _TOR2.default,
    VAN: _VAN2.default,
    VGK: _VGK2.default,
    WPG: _WPG2.default,
    WSH: _WSH2.default
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
var find = exports.find = function find(text) {
    var caseSensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var teamKey = caseSensitive ? combinedTerms[text] : util.getByKey(combinedTerms, text);
    return teams[teamKey] !== undefined ? teams[teamKey] : null;
};
var getAllTerms = exports.getAllTerms = function getAllTerms() {
    return Object.keys(combinedTerms).reduce(function (total, term) {
        total.push(term);
        return total;
    }, []);
};
var getAllTeams = exports.getAllTeams = function getAllTeams() {
    return teams;
};