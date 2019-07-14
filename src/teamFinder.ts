import * as util from './util'

export type NHLTeamAbbreviation =
  | 'ANA'
  | 'ARI'
  | 'BOS'
  | 'BUF'
  | 'CAR'
  | 'CBJ'
  | 'CGY'
  | 'CHI'
  | 'COL'
  | 'DAL'
  | 'DET'
  | 'EDM'
  | 'FLA'
  | 'LAK'
  | 'MIN'
  | 'MTL'
  | 'NJD'
  | 'NSH'
  | 'NYI'
  | 'NYR'
  | 'OTT'
  | 'PHI'
  | 'PIT'
  | 'SJS'
  | 'STL'
  | 'TBL'
  | 'TOR'
  | 'VAN'
  | 'VGK'
  | 'WPG'
  | 'WSH'

export interface Team {
  cityName: string
  teamName: string
  fullName: string
  abbreviation: string
  primaryColor: string
  textColor: string
  terms?: string[]
  socialMedia?: {
    twitter?: string
    hashTags?: string[]
  }
}

export type Teams = Record<NHLTeamAbbreviation, Team>

const teams: Teams = {
  ANA: {
    cityName: 'Anaheim',
    teamName: 'Ducks',
    fullName: 'Anaheim Ducks',
    abbreviation: 'ANA',
    primaryColor: '#FC4C02',
    textColor: '#FFFFFF',
    socialMedia: {
      twitter: '@AnaheimDucks',
      hashTags: ['#NHLDucks', '#LetsGoDucks']
    }
  },
  ARI: {
    cityName: 'Arizona',
    teamName: 'Coyotes',
    fullName: 'Arizona Coyotes',
    abbreviation: 'ARI',
    primaryColor: '#862633',
    textColor: '#FFFFFF',
    terms: ['Phoenix', 'Yotes', 'ARIZ', 'AZ', '@ArizonaCoyotes'],
    socialMedia: {
      twitter: '@ArizonaCoyotes',
      hashTags: []
    }
  },
  BOS: {
    cityName: 'Boston',
    teamName: 'Bruins',
    fullName: 'Boston Bruins',
    abbreviation: 'BOS',
    primaryColor: '#FFB81C',
    textColor: '#000000',
    terms: ['Bears'],
    socialMedia: {
      twitter: '@NHLBruins',
      hashTags: ['#LetsGoBruins']
    }
  },
  BUF: {
    cityName: 'Buffalo',
    teamName: 'Sabres',
    fullName: 'Buffalo Sabres',
    abbreviation: 'BUF',
    primaryColor: '#041E42',
    textColor: '#FFFFFF',
    terms: ['Sabers'],
    socialMedia: {
      twitter: '@BuffaloSabres',
      hashTags: ['#LetsGoBuffalo']
    }
  },
  CAR: {
    cityName: 'Carolina',
    teamName: 'Hurricanes',
    fullName: 'Carolina Hurricanes',
    abbreviation: 'CAR',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Canes'],
    socialMedia: {
      twitter: '@NHLCanes',
      hashTags: []
    }
  },
  CBJ: {
    cityName: 'Columbus',
    teamName: 'Blue Jackets',
    fullName: 'Columbus Blue Jackets',
    abbreviation: 'CBJ',
    primaryColor: '#041E42',
    textColor: '#FFFFFF',
    terms: ['Jackets', 'CLB'],
    socialMedia: {
      twitter: '@BlueJacketsNHL',
      hashTags: ['#CBJ']
    }
  },
  CGY: {
    cityName: 'Calgary',
    teamName: 'Flames',
    fullName: 'Calgary Flames',
    abbreviation: 'CGY',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['CAL'],
    socialMedia: {
      twitter: '@NHLFlames',
      hashTags: []
    }
  },
  CHI: {
    cityName: 'Chicago',
    teamName: 'Blackhawks',
    fullName: 'Chicago Blackhawks',
    abbreviation: 'CHI',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Hawks'],
    socialMedia: {
      twitter: '@NHLBlackhawks',
      hashTags: ['#OneGoal']
    }
  },
  COL: {
    cityName: 'Colorado',
    teamName: 'Avalanche',
    fullName: 'Colorado Avalanche',
    abbreviation: 'COL',
    primaryColor: '#6F263D',
    textColor: '#FFFFFF',
    terms: [],
    socialMedia: {
      twitter: '',
      hashTags: []
    }
  },
  DAL: {
    cityName: 'Dallas',
    teamName: 'Stars',
    fullName: 'Dallas Stars',
    abbreviation: 'DAL',
    primaryColor: '#006341',
    textColor: '#FFFFFF',
    terms: ['Hawks'],
    socialMedia: {
      twitter: '@DallasStars',
      hashTags: []
    }
  },
  DET: {
    cityName: 'Detroit',
    teamName: 'Red Wings',
    fullName: 'Detroit Red Wings',
    abbreviation: 'DET',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Wings'],
    socialMedia: {
      twitter: '@DetroitRedWings',
      hashTags: ['#LGRW']
    }
  },
  EDM: {
    cityName: 'Edmonton',
    teamName: 'Oilers',
    fullName: 'Edmonton Oilers',
    abbreviation: 'EDM',
    primaryColor: '#00205B',
    textColor: '#FFFFFF',
    terms: ['Oil'],
    socialMedia: {
      twitter: '@EdmontonOilers',
      hashTags: ['#OilCountry']
    }
  },
  FLA: {
    cityName: 'Florida',
    teamName: 'Panthers',
    fullName: 'Florida Panthers',
    abbreviation: 'FLA',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Cats'],
    socialMedia: {
      twitter: '@FlaPanthers',
      hashTags: ['#FlaPanthers', '#OneTerritory']
    }
  },
  LAK: {
    cityName: 'Los Angeles',
    teamName: 'Kings',
    fullName: 'Los Angeles Kings',
    abbreviation: 'LAK',
    primaryColor: '#010101',
    textColor: '#FFFFFF',
    terms: ['LA', 'LA Kings', 'LAKings'],
    socialMedia: {
      twitter: '@LAKings',
      hashTags: []
    }
  },
  MIN: {
    cityName: 'Minnesota',
    teamName: 'Wild',
    fullName: 'Minnesota Wild',
    abbreviation: 'MIN',
    primaryColor: '#154734',
    textColor: '#FFFFFF',
    terms: ['minny', 'mnwild'],
    socialMedia: {
      twitter: '@mnwild',
      hashTags: ['#OurIce']
    }
  },
  MTL: {
    cityName: 'Montréal',
    teamName: 'Canadiens',
    fullName: 'Montréal Canadiens',
    abbreviation: 'MTL',
    primaryColor: '#A6192E',
    textColor: '#FFFFFF',
    terms: ['Canadians', 'Habs', 'MON', 'Montreal'],
    socialMedia: {
      twitter: '@CanadiensMTL',
      hashTags: ['#GoHabsGo']
    }
  },
  NJD: {
    cityName: 'New Jersey',
    teamName: 'Devils',
    fullName: 'New Jersey Devils',
    abbreviation: 'NJD',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: [],
    socialMedia: {
      twitter: '@NJDevils',
      hashTags: ['#NJDevils']
    }
  },
  NSH: {
    cityName: 'Nashville',
    teamName: 'Predators',
    fullName: 'Nashville Predators',
    abbreviation: 'NSH',
    primaryColor: '#FFB81C',
    textColor: '#000000',
    terms: ['Preds'],
    socialMedia: {
      twitter: '@PredsNHL',
      hashTags: ['#Smashville']
    }
  },
  NYI: {
    cityName: 'New York',
    teamName: 'Islanders',
    fullName: 'New York Islanders',
    abbreviation: 'NYI',
    primaryColor: '#003087',
    textColor: '#FFFFFF',
    terms: ['Isles', 'Island'],
    socialMedia: {
      twitter: '@NYIslanders',
      hashTags: ['#Isles']
    }
  },
  NYR: {
    cityName: 'New York',
    teamName: 'Rangers',
    fullName: 'New York Rangers',
    abbreviation: 'NYR',
    primaryColor: '#0033A0',
    textColor: '#FFFFFF',
    terms: ['Rags'],
    socialMedia: {
      twitter: '@NYRangers',
      hashTags: []
    }
  },
  OTT: {
    cityName: 'Ottawa',
    teamName: 'Senators',
    fullName: 'Ottawa Senators',
    abbreviation: 'OTT',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    terms: ['Sens'],
    socialMedia: {
      twitter: '@Senators',
      hashTags: []
    }
  },
  PHI: {
    cityName: 'Philadelphia',
    teamName: 'Flyers',
    fullName: 'Philadelphia Flyers',
    abbreviation: 'PHI',
    primaryColor: '#FA4616',
    textColor: '#FFFFFF',
    terms: [],
    socialMedia: {
      twitter: '@NHLFlyers',
      hashTags: []
    }
  },
  PIT: {
    cityName: 'Pittsburgh',
    teamName: 'Penguins',
    fullName: 'Pittsburgh Penguins',
    abbreviation: 'PIT',
    primaryColor: '#FFB81C',
    textColor: '#000000',
    terms: ['Pens'],
    socialMedia: {
      twitter: '@penguins',
      hashTags: ['#LetsGoPens']
    }
  },
  SJS: {
    cityName: 'San Jose',
    teamName: 'Sharks',
    fullName: 'San Jose Sharks',
    abbreviation: 'SJS',
    primaryColor: '#006272',
    textColor: '#FFFFFF',
    terms: ['SJSharks'],
    socialMedia: {
      twitter: '@SanJoseSharks',
      hashTags: []
    }
  },
  STL: {
    cityName: 'St. Louis',
    teamName: 'Blues',
    fullName: 'St. Louis Blues',
    abbreviation: 'STL',
    primaryColor: '#003087',
    textColor: '#FFFFFF',
    terms: ['Notes', 'St Louis Blues'],
    socialMedia: {
      twitter: '@StLouisBlues',
      hashTags: ['#stlblues', '#WeAllBleedBlue']
    }
  },
  TBL: {
    cityName: 'Tampa Bay',
    teamName: 'Lightning',
    fullName: 'Tampa Bay Lightning',
    abbreviation: 'TBL',
    primaryColor: '#00205B',
    textColor: '#FFFFFF',
    terms: ['Tampa', 'Bolts', 'TB'],
    socialMedia: {
      twitter: '@TBLightning',
      hashTags: ['#GoBolts']
    }
  },
  TOR: {
    cityName: 'Toronto',
    teamName: 'Maple Leafs',
    fullName: 'Toronto Maple Leafs',
    abbreviation: 'TOR',
    primaryColor: '#00205B',
    textColor: '#FFFFFF',
    terms: ['Leafs'],
    socialMedia: {
      twitter: '@MapleLeafs',
      hashTags: ['#LeafsForever']
    }
  },
  VAN: {
    cityName: 'Vancouver',
    teamName: 'Canucks',
    fullName: 'Vancouver Canucks',
    abbreviation: 'VAN',
    primaryColor: '#00205B',
    textColor: '#FFFFFF',
    terms: ['Nucks'],
    socialMedia: {
      twitter: '@Canucks',
      hashTags: ['#WeAreAllCanucks']
    }
  },
  VGK: {
    cityName: 'Vegas',
    teamName: 'Golden Knights',
    fullName: 'Vegas Golden Knights',
    abbreviation: 'VGK',
    primaryColor: '#B4975A',
    textColor: '#FFFFFF',
    terms: ['Knights', 'Las Vegas'],
    socialMedia: {
      twitter: '@GoldenKnights',
      hashTags: ['#VegasBorn']
    }
  },
  WPG: {
    cityName: 'Winnipeg',
    teamName: 'Jets',
    fullName: 'Winnipeg Jets',
    abbreviation: 'WPG',
    primaryColor: '#041E42',
    textColor: '#FFFFFF',
    terms: ['WIN'],
    socialMedia: {
      twitter: '@NHLJets',
      hashTags: ['#GoJetsGo']
    }
  },
  WSH: {
    cityName: 'Washington',
    teamName: 'Capitals',
    fullName: 'Washington Capitals',
    abbreviation: 'WSH',
    primaryColor: '#A6192E',
    textColor: '#FFFFFF',
    terms: ['Washington', 'Capitals', 'WSH', 'Caps'],
    socialMedia: {
      twitter: '@Capitals',
      hashTags: ['#ALLCAPS']
    }
  }
}

// Creates a JSON object where the keys are terms/names and the values are the associated team abbreviation
// ex. "Boston": "BOS"
const combinedTerms = Object.keys(teams).reduce((total, teamKey) => {
  const team = teams[teamKey]

  total[team.cityName] = team.abbreviation
  total[team.teamName] = team.abbreviation
  total[team.abbreviation] = team.abbreviation
  total[team.fullName] = team.abbreviation

  if (team.terms && team.terms.length > 0) {
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
