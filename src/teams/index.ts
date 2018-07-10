import Team from '../Team'
import * as util from '../util'

import ANA from './ANA'
import ARI from './ARI'
import BOS from './BOS'
import BUF from './BUF'
import CAR from './CAR'
import CBJ from './CBJ'
import CGY from './CGY'
import CHI from './CHI'
import COL from './COL'
import DAL from './DAL'
import DET from './DET'
import EDM from './EDM'
import FLA from './FLA'
import LAK from './LAK'
import MIN from './MIN'
import MTL from './MTL'
import NJD from './NJD'
import NSH from './NSH'
import NYI from './NYI'
import NYR from './NYR'
import OTT from './OTT'
import PHI from './PHI'
import PIT from './PIT'
import SJS from './SJS'
import STL from './STL'
import TBL from './TBL'
import TOR from './TOR'
import VAN from './VAN'
import VGK from './VGK'
import WPG from './WPG'
import WSH from './WSH'

const teams = {
  ANA,
  ARI,
  BOS,
  BUF,
  CAR,
  CBJ,
  CGY,
  CHI,
  COL,
  DAL,
  DET,
  EDM,
  FLA,
  LAK,
  MIN,
  MTL,
  NJD,
  NSH,
  NYI,
  NYR,
  OTT,
  PHI,
  PIT,
  SJS,
  STL,
  TBL,
  TOR,
  VAN,
  VGK,
  WPG,
  WSH
}

// Creates a JSON object where the keys are terms/names and the values are the associated team abbreviation
// ex. "Boston": "BOS"
const combinedTerms = Object.keys(teams).reduce(function(total, teamKey) {
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

export const find = (text: string, caseSensitive: boolean = true): typeof teams | null => {
  const teamKey = caseSensitive ? combinedTerms[text] : util.getByKey(combinedTerms, text)
  return teams[teamKey] !== undefined ? teams[teamKey] : null
}

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
