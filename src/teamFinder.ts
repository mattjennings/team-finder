import Team from './Team'
import * as util from './util'

const teams: { [key: string]: Team } = {
  ANA: new Team({
    cityName: 'Anaheim',
    teamName: 'Ducks',
    abbreviation: 'ANA',
    primaryColor: '#FC4C02',
    textColor: '#FFFFFF'
  }),
  ARI: new Team({
    cityName: 'Arizona',
    teamName: 'Coyotes',
    abbreviation: 'ARI',
    primaryColor: '#862633',
    textColor: '#FFFFFF',
    terms: ['Phoenix', 'Yotes', 'ARIZ', 'AZ']
  }),
  BOS: new Team({
    cityName: 'Boston',
    teamName: 'Bruins',
    abbreviation: 'BOS',
    primaryColor: '#FFB81C',
    textColor: '#000000',
    terms: ['Bears']
  }),
  BUF: new Team({
    cityName: 'Buffalo',
    teamName: 'Sabres',
    abbreviation: 'BUF',
    primaryColor: '#041E42',
    textColor: '#FFFFFF',
    terms: ['Sabers']
  }),
  CAR: new Team({
    cityName: 'Carolina',
    teamName: 'Hurricanes',
    abbreviation: 'CAR',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Canes']
  }),
  CBJ: new Team({
    cityName: 'Columbus',
    teamName: 'Blue Jackets',
    abbreviation: 'CBJ',
    primaryColor: '#041E42',
    textColor: '#FFFFFF',
    terms: ['Jackets', 'CLB']
  }),
  CGY: new Team({
    cityName: 'Calgary',
    teamName: 'Flames',
    abbreviation: 'CGY',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['CAL']
  }),
  CHI: new Team({
    cityName: 'Chicago',
    teamName: 'Blackhawks',
    abbreviation: 'CHI',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Hawks']
  }),
  COL: new Team({
    cityName: 'Colorado',
    teamName: 'Avalanche',
    abbreviation: 'COL',
    primaryColor: '#6F263D',
    textColor: '#FFFFFF',
    terms: []
  }),
  DAL: new Team({
    cityName: 'Dallas',
    teamName: 'Stars',
    abbreviation: 'DAL',
    primaryColor: '#006341',
    textColor: '#FFFFFF',
    terms: ['Hawks']
  }),
  DET: new Team({
    cityName: 'Detroit',
    teamName: 'Red Wings',
    abbreviation: 'DET',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Wings']
  }),
  EDM: new Team({
    cityName: 'Edmonton',
    teamName: 'Oilers',
    abbreviation: 'EDM',
    primaryColor: '#00205B',
    textColor: '#FFFFFF',
    terms: ['Oil']
  }),
  FLA: new Team({
    cityName: 'Florida',
    teamName: 'Panthers',
    abbreviation: 'FLA',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Cats', 'FlaPanthers']
  }),
  LAK: new Team({
    cityName: 'Los Angeles',
    teamName: 'Kings',
    abbreviation: 'LAK',
    primaryColor: '#010101',
    textColor: '#FFFFFF',
    terms: ['LA', 'LA Kings', 'LAKings']
  }),
  MIN: new Team({
    cityName: 'Minnesota',
    teamName: 'Wild',
    abbreviation: 'MIN',
    primaryColor: '#154734',
    textColor: '#FFFFFF',
    terms: ['minny', 'mnwild']
  }),
  MTL: new Team({
    cityName: 'Montreal',
    teamName: 'Canadiens',
    abbreviation: 'MTL',
    primaryColor: '#A6192E',
    textColor: '#FFFFFF',
    terms: ['Canadians', 'Habs', 'MON']
  }),
  NJD: new Team({
    cityName: 'New Jersey',
    teamName: 'Devils',
    abbreviation: 'NJD',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: []
  }),
  NSH: new Team({
    cityName: 'Nashville',
    teamName: 'Predators',
    abbreviation: 'NSH',
    primaryColor: '#FFB81C',
    textColor: '#000000',
    terms: ['Preds']
  }),
  NYI: new Team({
    cityName: 'New York',
    teamName: 'Islanders',
    abbreviation: 'NYI',
    primaryColor: '#003087',
    textColor: '#FFFFFF',
    terms: ['Isles', 'Island']
  }),
  NYR: new Team({
    cityName: 'New York',
    teamName: 'Rangers',
    abbreviation: 'NYR',
    primaryColor: '#0033A0',
    textColor: '#FFFFFF',
    terms: ['Rags']
  }),
  OTT: new Team({
    cityName: 'Ottawa',
    teamName: 'Senators',
    abbreviation: 'OTT',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Sens']
  }),
  PHI: new Team({
    cityName: 'Philadelphia',
    teamName: 'Flyers',
    abbreviation: 'PHI',
    primaryColor: '#FA4616',
    textColor: '#FFFFFF',
    terms: []
  }),
  PIT: new Team({
    cityName: 'Pittsburgh',
    teamName: 'Penguins',
    abbreviation: 'PIT',
    primaryColor: '#FFB81C',
    textColor: '#000000',
    terms: ['Pens']
  }),
  SJS: new Team({
    cityName: 'San Jose',
    teamName: 'Sharks',
    abbreviation: 'SJS',
    primaryColor: '#006272',
    textColor: '#FFFFFF',
    terms: ['SJSharks']
  }),
  STL: new Team({
    cityName: 'St. Louis',
    teamName: 'Blues',
    abbreviation: 'STL',
    primaryColor: '#003087',
    textColor: '#FFFFFF',
    terms: ['Notes', 'St Louis Blues']
  }),
  TBL: new Team({
    cityName: 'Tampa Bay',
    teamName: 'Lightning',
    abbreviation: 'TBL',
    primaryColor: '#00205B',
    textColor: '#FFFFFF',
    terms: ['Tampa', 'Bolts', 'TB', 'tblightning']
  }),
  TOR: new Team({
    cityName: 'Toronto',
    teamName: 'Maple Leafs',
    abbreviation: 'TOR',
    primaryColor: '#00205B',
    textColor: '#FFFFFF',
    terms: ['Leafs']
  }),
  VAN: new Team({
    cityName: 'Vancouver',
    teamName: 'Canucks',
    abbreviation: 'VAN',
    primaryColor: '#00205B',
    textColor: '#FFFFFF',
    terms: ['Nucks']
  }),
  VGK: new Team({
    cityName: 'Vegas',
    teamName: 'Golden Knights',
    abbreviation: 'VGK',
    primaryColor: '#B4975A',
    textColor: '#FFFFFF',
    terms: ['Knights', 'Las Vegas']
  }),
  WPG: new Team({
    cityName: 'Winnipeg',
    teamName: 'Jets',
    abbreviation: 'WPG',
    primaryColor: '#041E42',
    textColor: '#FFFFFF',
    terms: ['WIN']
  }),
  WSH: new Team({
    cityName: 'Washington',
    teamName: 'Capitals',
    abbreviation: 'WSH',
    primaryColor: '#A6192E',
    textColor: '#FFFFFF',
    terms: ['Washington', 'Capitals', 'WSH', 'Caps']
  })
}

// Creates a JSON object where the keys are terms/names and the values are the associated team abbreviation
// ex. "Boston": "BOS"
const combinedTerms = Object.keys(teams).reduce((total, teamKey) => {
  const team = teams[teamKey]

  total[team.cityName] = team.abbreviation
  total[team.teamName] = team.abbreviation
  total[team.abbreviation] = team.abbreviation
  total[team.fullName] = team.abbreviation

  if (team.terms.length > 0) {
    team.terms.forEach(term => {
      total[term] = team.abbreviation
    })
  }
  return total
}, {})

/**
 * Finds a team by a key word or words
 * @param text The city name, team name, abbreviation, or a term associated with the team.
 * @param caseSensitive if true, the search will be done case sensitively (example: "VAN" will return the Vancouver Canucks, but "van" will not)
 */
export const findTeam = (text: string, caseSensitive: boolean = true) => {
  const teamKey = caseSensitive
    ? combinedTerms[text]
    : util.getByKey(combinedTerms, text)
  return teams[teamKey] !== undefined ? teams[teamKey] : null
}

/**
 * Deprecated. Use findTeam
 */
export const find = findTeam

/**
 * Get all terms used to identify teams
 */
export const getAllTerms = () => {
  return Object.keys(combinedTerms).reduce(
    (total, term) => {
      total.push(term)
      return total
    },
    [] as string[]
  )
}

export const getAllTeams = () => teams
