import * as util from './util'
import teams, { NHLTeamAbbreviation } from './teams'
import teamDictionary from './teamDictionary'

export interface FindTeamOptions {
  caseSensitive?: boolean
}
/**
 * Finds a team by a key word or words
 * @param text The city name, team name, abbreviation, or a term associated with the team.
 * @param caseSensitive if true, the search will be done case sensitively (example: "VAN" will return the Vancouver Canucks, but "van" will not)
 */
export default function findTeam(text: string, options: FindTeamOptions = {}) {
  const { caseSensitive = true } = options
  const teamKey: NHLTeamAbbreviation = caseSensitive
    ? teamDictionary[text]
    : util.getByKey(teamDictionary, text)

  return teams[teamKey] !== undefined ? teams[teamKey] : null
}
