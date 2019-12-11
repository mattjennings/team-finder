import teams, { NHLTeamAbbreviation, Team } from './teams'

export interface FindTeamOptions {
  /**
   * Configure case sensitivity for each field, or pass a boolean for all properties.   
      @default
        {
          teamName: false,
          cityName: false,
          fullName: false,
          abbreviation: true,
          terms: false,
          friedmanAbbreviations: true,
          socialMedia: {
            twitter: false,
            hashTags: false
          }
        }
   */
  caseSensitive?:
    | boolean
    | {
        cityName?: boolean
        teamName?: boolean
        fullName?: boolean
        abbreviation?: boolean
        friedmanAbbreviations?: boolean
        socialMedia?: {
          twitter?: boolean
          hashTags?: boolean
        }
        terms?: boolean
      }

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
  teamKey?: string,
  parentKey?: string
): string {
  const caseSensitive =
    typeof options.caseSensitive === 'boolean'
      ? options.caseSensitive
      : {
          teamName: false,
          cityName: false,
          fullName: false,
          abbreviation: true,
          terms: false,
          friedmanAbbreviations: true,
          ...(typeof options.caseSensitive === 'object'
            ? options.caseSensitive
            : {}),
          socialMedia: {
            twitter: false,
            hashTags: false,
            ...(options.caseSensitive?.socialMedia
              ? options.caseSensitive.socialMedia
              : {})
          }
        }

  const keys = Object.keys(object)

  for (const key of keys) {
    if (key === 'friedmanAbbreviations' && !options.friedman) {
      continue
    }

    const fullKey = parentKey ? `${parentKey}.${key}` : key
    const isCaseSensitive = getCaseSensitivity(fullKey, caseSensitive)
    const objVal = object[key]

    if (typeof objVal === 'object') {
      if (Array.isArray(objVal)) {
        // compare values of array (assuming they are strings for now)
        const foundInArray = objVal.find(val => {
          if (!isCaseSensitive) {
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
        if (findValue(objVal, value, options, teamKey || key, fullKey)) {
          return teamKey || key
        }
      }
    }
    // compare strings
    else if (typeof objVal === 'string') {
      const isEqual =
        (isCaseSensitive && value === objVal) ||
        (!isCaseSensitive && value.toLowerCase() === objVal.toLowerCase())

      if (isEqual) {
        return teamKey || key
      }
    }
  }

  return null
}

function getCaseSensitivity(
  key: string, // will be a full key in dot notation. ex. CHI.socialMedia.twitter
  caseSensitive: FindTeamOptions['caseSensitive']
) {
  if (typeof caseSensitive === 'boolean' || !caseSensitive) {
    return !!caseSensitive
  }

  const keyWithoutTeam = key
    .split('.')
    .slice(1)
    .join('.')

  switch (keyWithoutTeam) {
    case 'teamName':
    case 'cityName':
    case 'fullName':
    case 'abbreviation':
    case 'friedmanAbbreviations':
    case 'terms':
      return caseSensitive[keyWithoutTeam] ?? true
    case 'socialMedia.twitter':
      return caseSensitive.socialMedia?.twitter ?? true
    case 'socialMedia.hashTags':
      return caseSensitive.socialMedia?.hashTags ?? true
  }

  return false
}
