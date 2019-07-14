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
})
