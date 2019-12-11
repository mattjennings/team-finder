import teams, { NHLTeamAbbreviation } from './teams'

export interface FindTeamOptions {
  /**
   * Enables case sensitivity if true (default)
   */
  caseSensitive?: boolean

  /**
   * If you want to consider Elliote Friedman's goofed up abbreviations...
   * at least his frequent ones (WIN for WPG, CAL for CGY, etc)
   */
  friedman?: boolean
}

/**
 * Finds a team by a key word or words
 * @param text The city name, team name, abbreviation, or a term associated with the team.
 * @param caseSensitive if true, the search will be done case sensitively (example: "VAN" will return the Vancouver Canucks, but "van" will not)
 */
export default function findTeam(text: string, options: FindTeamOptions = {}) {
  const teamAbbreviation = findValue(
    teams,
    text,
    options
  ) as NHLTeamAbbreviation

  return teams[teamAbbreviation] || null
}

/**
 * Recursively searches through a Team object and returns the team key (abbreviation) if a value is found
 * @param object
 * @param value
 * @param options
 * @param teamKey
 */
function findValue(
  object: Record<string, any>,
  value: any,
  options: FindTeamOptions = {},
  teamKey?: string
): string {
  const keys = Object.keys(object)

  for (const key of keys) {
    if (key === 'friedmanAbbreviations' && !options.friedman) {
      continue
    }

    const objVal = object[key]

    if (typeof objVal === 'object') {
      if (Array.isArray(objVal)) {
        // compare values of array (assuming they are strings for now)
        const foundInArray = objVal.find(val => {
          // friedman abbreviations don't count for case-sensitivity because they can be real words (win, la)
          if (!options.caseSensitive && key !== 'friedmanAbbreviations') {
            return val.toLowerCase() === value.toLowerCase()
          } else {
            return val === value
          }
        })

        if (foundInArray) {
          return teamKey || key
        }
      } else {
        // recursively search
        if (findValue(objVal, value, options, teamKey || key)) {
          return teamKey || key
        }
      }
    }
    // compare strings
    else if (typeof objVal === 'string') {
      const isEqual =
        (options.caseSensitive && value === objVal) ||
        (!options.caseSensitive && value.toLowerCase() === objVal.toLowerCase())

      if (isEqual) {
        return teamKey || key
      }
    }
  }

  return null
}
