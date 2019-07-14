import teams, { NHLTeamAbbreviation } from './teams'

const allTerms = (Object.keys(teams) as NHLTeamAbbreviation[]).reduce(
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
    return total
  },
  {} as Record<string, NHLTeamAbbreviation>
)

export default allTerms
