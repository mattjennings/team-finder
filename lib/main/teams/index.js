"use strict";

var __importStar = undefined && undefined.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
};
var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util = __importStar(require("../util"));
var ANA_1 = __importDefault(require("./ANA"));
var ARI_1 = __importDefault(require("./ARI"));
var BOS_1 = __importDefault(require("./BOS"));
var BUF_1 = __importDefault(require("./BUF"));
var CAR_1 = __importDefault(require("./CAR"));
var CBJ_1 = __importDefault(require("./CBJ"));
var CGY_1 = __importDefault(require("./CGY"));
var CHI_1 = __importDefault(require("./CHI"));
var COL_1 = __importDefault(require("./COL"));
var DAL_1 = __importDefault(require("./DAL"));
var DET_1 = __importDefault(require("./DET"));
var EDM_1 = __importDefault(require("./EDM"));
var FLA_1 = __importDefault(require("./FLA"));
var LAK_1 = __importDefault(require("./LAK"));
var MIN_1 = __importDefault(require("./MIN"));
var MTL_1 = __importDefault(require("./MTL"));
var NJD_1 = __importDefault(require("./NJD"));
var NSH_1 = __importDefault(require("./NSH"));
var NYI_1 = __importDefault(require("./NYI"));
var NYR_1 = __importDefault(require("./NYR"));
var OTT_1 = __importDefault(require("./OTT"));
var PHI_1 = __importDefault(require("./PHI"));
var PIT_1 = __importDefault(require("./PIT"));
var SJS_1 = __importDefault(require("./SJS"));
var STL_1 = __importDefault(require("./STL"));
var TBL_1 = __importDefault(require("./TBL"));
var TOR_1 = __importDefault(require("./TOR"));
var VAN_1 = __importDefault(require("./VAN"));
var VGK_1 = __importDefault(require("./VGK"));
var WPG_1 = __importDefault(require("./WPG"));
var WSH_1 = __importDefault(require("./WSH"));
var teams = {
    ANA: ANA_1.default,
    ARI: ARI_1.default,
    BOS: BOS_1.default,
    BUF: BUF_1.default,
    CAR: CAR_1.default,
    CBJ: CBJ_1.default,
    CGY: CGY_1.default,
    CHI: CHI_1.default,
    COL: COL_1.default,
    DAL: DAL_1.default,
    DET: DET_1.default,
    EDM: EDM_1.default,
    FLA: FLA_1.default,
    LAK: LAK_1.default,
    MIN: MIN_1.default,
    MTL: MTL_1.default,
    NJD: NJD_1.default,
    NSH: NSH_1.default,
    NYI: NYI_1.default,
    NYR: NYR_1.default,
    OTT: OTT_1.default,
    PHI: PHI_1.default,
    PIT: PIT_1.default,
    SJS: SJS_1.default,
    STL: STL_1.default,
    TBL: TBL_1.default,
    TOR: TOR_1.default,
    VAN: VAN_1.default,
    VGK: VGK_1.default,
    WPG: WPG_1.default,
    WSH: WSH_1.default
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
exports.find = function (text) {
    var caseSensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var teamKey = caseSensitive ? combinedTerms[text] : util.getByKey(combinedTerms, text);
    return teams[teamKey] !== undefined ? teams[teamKey] : null;
};
exports.getAllTerms = function () {
    return Object.keys(combinedTerms).reduce(function (total, term) {
        total.push(term);
        return total;
    }, []);
};
exports.getAllTeams = function () {
    return teams;
};