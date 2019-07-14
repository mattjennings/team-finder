import teams, { NHLTeamAbbreviation } from './teams'

export type TeamDictionary = Record<string, NHLTeamAbbreviation>

const teamDictionary = (Object.keys(teams) as NHLTeamAbbreviation[]).reduce(
  (total, teamKey) => {
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

    if (team.socialMedia) {
      if (team.socialMedia.twitter) {
        total[team.socialMedia.twitter] = team.abbreviation
      }

      if (team.socialMedia.hashTags) {
        team.socialMedia.hashTags.forEach(hashTag => {
          total[hashTag] = team.abbreviation
        })
      }
    }
    return total
  },
  {} as TeamDictionary
)

export default teamDictionary
