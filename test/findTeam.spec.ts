import { teams, findTeam } from '../src'

describe('findTeam', () => {
  describe('Abbreviations', () => {
    describe('Anaheim', () => {
      it('should return ANA', () => {
        expect(findTeam('Ducks')).toEqual(teams.ANA)
      })
    })

    describe('Boston', () => {
      it('should return BOS', () => {
        expect(findTeam('bruins', { caseSensitive: false })).toEqual(teams.BOS)
      })
    })

    describe('Minnesota', () => {
      it('should return MIN', () => {
        const team = findTeam('mnwild', { caseSensitive: false })
        expect(team).toEqual(teams.MIN)
      })
    })

    describe('Vancouver', () => {
      it('should return VAN', () => {
        const team = findTeam('VAN', { caseSensitive: false })
        expect(team).toEqual(teams.VAN)
      })
    })
  })

  describe('City names', () => {
    describe('Chicago', () => {
      it('should return Chicago', () => {
        expect(findTeam('Blackhawks')).toEqual(teams.CHI)
      })
    })

    describe('Dallas', () => {
      it('should return Dallas', () => {
        expect(findTeam('stars', { caseSensitive: false })).toEqual(teams.DAL)
      })
    })
  })

  describe('Team names', () => {
    describe('Columbus', () => {
      it('should return Blue Jackets', () => {
        expect(findTeam('Columbus')).toEqual(teams.CBJ)
      })
    })

    describe('Colorado', () => {
      it('should return Avalanche', () => {
        expect(findTeam('avalanche', { caseSensitive: false })).toEqual(
          teams.COL
        )
      })
    })
  })

  describe('Social Media', () => {
    describe('hash tags', () => {
      it('should return Florida Panthers', () => {
        expect(findTeam('#FlaPanthers')).toEqual(teams.FLA)
      })
    })
    describe('twitter', () => {
      it('should return Florida Panthers', () => {
        expect(findTeam('@FlaPanthers')).toEqual(teams.FLA)
      })
    })
  })

  describe('Friedman', () => {
    it('should return Calgary Flames', () => {
      expect(findTeam('CAL', { friedman: true })).toEqual(teams.CGY)
    })

    it('should not return Calgary Flames', () => {
      expect(findTeam('CAL')).toEqual(null)
    })

    it('should detect "WIN" as WPG', () => {
      expect(findTeam('WIN', { friedman: true })).toEqual(teams.WPG)
    })
  })

  describe('case sensitivity', () => {
    it('should disable case sensivity for all fields', () => {
      expect(findTeam('avalanche', { caseSensitive: false })).toEqual(teams.COL)
      expect(findTeam('avs', { caseSensitive: false })).toEqual(teams.COL)
      expect(findTeam('colorado', { caseSensitive: false })).toEqual(teams.COL)
      expect(findTeam('#goavsgo', { caseSensitive: false })).toEqual(teams.COL)
    })

    it('should disable case sensivity only for abbreviations', () => {
      const caseSensitive = {
        teamName: true,
        cityName: true,
        abbreviation: false,
        terms: true,
        socialMedia: {
          twitter: true,
          hashTags: true
        }
      }
      expect(findTeam('avalanche', { caseSensitive })).not.toEqual(teams.COL)
      expect(findTeam('col', { caseSensitive })).toEqual(teams.COL)
      expect(findTeam('colorado', { caseSensitive })).not.toEqual(teams.COL)
      expect(findTeam('#goavsgo', { caseSensitive })).not.toEqual(teams.COL)
    })

    it('should enable case sensivity only for friedmanAbbreviations', () => {
      const caseSensitive = {
        teamName: false,
        cityName: false,
        abbreviation: false,
        terms: false,
        friedmanAbbreviations: true,
        socialMedia: {
          twitter: false,
          hashTags: false
        }
      }
      expect(findTeam('nj', { caseSensitive })).not.toEqual(teams.NJD)
      expect(findTeam('new jersey', { caseSensitive })).toEqual(teams.NJD)
      expect(findTeam('devils', { caseSensitive })).toEqual(teams.NJD)
      expect(findTeam('njd', { caseSensitive })).toEqual(teams.NJD)
      expect(findTeam('@njdevils', { caseSensitive })).toEqual(teams.NJD)
      expect(findTeam('#njdevils', { caseSensitive })).toEqual(teams.NJD)
    })
  })
})
