export interface Team {
  /**
   * Name of city the team belongs to
   */
  cityName: string

  /**
   * Name of team
   */
  teamName: string

  /**
   * Name of city + team
   */
  fullName: string

  /**
   * Abbreviation for the team
   */
  abbreviation: NHLTeamAbbreviation

  /**
   * Primary color of the team
   */
  primaryColor: string

  /**
   * A contrasting color to primaryColor for text
   */
  textColor: string

  /**
   * Other terms the team might go by
   */
  terms?: string[]

  /**
   * Mispelt abbreviations used by Elliotte Friedman
   */
  friedmanAbbreviations?: string[]

  /**
   * Social media information for the team
   */
  socialMedia?: {
    twitter?: string
    hashTags?: string[]
  }
}

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
  | 'SEA'
  | 'SJS'
  | 'STL'
  | 'TBL'
  | 'TOR'
  | 'VAN'
  | 'VGK'
  | 'WPG'
  | 'WSH'

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
      hashTags: ['#NHLDucks', '#LetsGoDucks', '#Ducks', '#AnaheimDucks']
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
      hashTags: ['#ArizonaCoyotes', '#Yotes']
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
      hashTags: ['#LetsGoBruins', '#BostonBruins', '#Bruins']
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
      hashTags: ['#LetsGoBuffalo', '#BuffaloSabres', '#Sabres']
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
      hashTags: ['#Canes', '#CarolinaHurricanes']
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
      hashTags: ['#CBJ', '#ColumbusBlueJackets', '#BlueJackets']
    }
  },
  CGY: {
    cityName: 'Calgary',
    teamName: 'Flames',
    fullName: 'Calgary Flames',
    abbreviation: 'CGY',
    primaryColor: '#C8102E',
    textColor: '#FFFFFF',
    friedmanAbbreviations: ['CAL'],
    socialMedia: {
      twitter: '@NHLFlames',
      hashTags: ['#CalgaryFlames', '#Flames']
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
      hashTags: ['#OneGoal', '#ChicagoBlackhawks', '#Blackhawks']
    }
  },
  COL: {
    cityName: 'Colorado',
    teamName: 'Avalanche',
    fullName: 'Colorado Avalanche',
    abbreviation: 'COL',
    primaryColor: '#6F263D',
    textColor: '#FFFFFF',
    terms: ['Avs'],
    socialMedia: {
      twitter: '@Avalanche',
      hashTags: ['#GoAvsGo', '#Avs', '#ColoradoAvalanche', '#Avalanche']
    }
  },
  DAL: {
    cityName: 'Dallas',
    teamName: 'Stars',
    fullName: 'Dallas Stars',
    abbreviation: 'DAL',
    primaryColor: '#006341',
    textColor: '#FFFFFF',
    terms: ['Stars'],
    socialMedia: {
      twitter: '@DallasStars',
      hashTags: ['#GoStars', '#Stars', '#DallasStars']
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
      hashTags: ['#LGRW', '#Wings', '#DetroitRedWings', '#RedWings']
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
      hashTags: ['#OilCountry', '#Oilers', '#EdmontonOilers']
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
      hashTags: [
        '#FlaPanthers',
        '#OneTerritory',
        '#Panthers',
        '#FloridaPanthers'
      ]
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
      hashTags: ['#Kings', '#LAKings']
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
      hashTags: ['#OurIce', '#MinnesotaWild', '#mnwild']
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
      hashTags: [
        '#GoHabsGo',
        '#Habs',
        '#MontrealCanadiens',
        '#MontrealCanadians',
        '#Canadians',
        '#Canadiens'
      ]
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
    friedmanAbbreviations: ['NJ'],
    socialMedia: {
      twitter: '@NJDevils',
      hashTags: ['#NJDevils', '#Devils', '#NewJerseyDevils']
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
    friedmanAbbreviations: ['NASH'],
    socialMedia: {
      twitter: '@PredsNHL',
      hashTags: ['#Smashville', '#Preds', '#NashvillePredators']
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
      hashTags: [
        '#Isles',
        '#Islanders',
        '#NYIslanders',
        '#NewYorkIslanders',
        '#NYI'
      ]
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
      hashTags: ['#Rangers', '#NYR', '#NYRangers', '#NewYorkRangers']
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
      hashTags: ['#Sens', '#OttawaSenators', '#Senators']
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
      hashTags: ['#Flyers', '#PhiladelphiaFlyers']
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
      hashTags: ['#LetsGoPens', '#Pens', '#PittsburghPenguins', '#Penguins']
    }
  },
  SEA: {
    cityName: 'Seattle',
    teamName: 'Kraken',
    fullName: 'Seattle Kraken',
    abbreviation: 'SEA',
    primaryColor: '#001628',
    textColor: '#FFFFFF',
    socialMedia: {
      twitter: '@SeattleKraken',
      hashTags: ['#Kraken', '#SeaKraken']
    }
  },
  SJS: {
    cityName: 'San Jose',
    teamName: 'Sharks',
    fullName: 'San Jose Sharks',
    abbreviation: 'SJS',
    primaryColor: '#006272',
    textColor: '#FFFFFF',
    terms: [],
    friedmanAbbreviations: ['SJ'],
    socialMedia: {
      twitter: '@SanJoseSharks',
      hashTags: ['#SJSharks', '#Sharks', '#SanJoseSharks']
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
      hashTags: ['#stlblues', '#WeAllBleedBlue', '#Blues', '#StLouisBlues']
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
      hashTags: ['#GoBolts', '#Lightning', '#TampaBayLightning']
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
      hashTags: ['#LeafsForever', '#Leafs', '#MapleLeafs', '#TorontoMapleLeafs']
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
    friedmanAbbreviations: ['VCR'],
    socialMedia: {
      twitter: '@Canucks',
      hashTags: ['#WeAreAllCanucks', '#Canucks', '#VancouverCanucks']
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
    friedmanAbbreviations: ['LV'],
    socialMedia: {
      twitter: '@GoldenKnights',
      hashTags: [
        '#VegasBorn',
        '#GoldenKnights',
        '#VegasGoldenKnights',
        '#Knights'
      ]
    }
  },
  WPG: {
    cityName: 'Winnipeg',
    teamName: 'Jets',
    fullName: 'Winnipeg Jets',
    abbreviation: 'WPG',
    primaryColor: '#041E42',
    textColor: '#FFFFFF',
    friedmanAbbreviations: ['WIN'],
    socialMedia: {
      twitter: '@NHLJets',
      hashTags: ['#GoJetsGo', '#Jets', '#WPGJets', '#WinnipegJets']
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
      hashTags: ['#ALLCAPS', '#Capitals', '#Caps', '#WashingtonCapitals']
    }
  }
}

export default teams
