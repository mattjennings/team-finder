import { findTeam } from '../src'

describe('findTeam', () => {
  describe('Abbreviations', () => {
    describe('Anaheim', () => {
      it('should return ANA', () => {
        expect(findTeam('Ducks').abbreviation).toEqual('ANA')
      })
    })

    describe('Boston', () => {
      it('should return BOS', () => {
        expect(
          findTeam('bruins', { caseSensitive: false }).abbreviation
        ).toEqual('BOS')
      })
    })

    describe('Minnesota', () => {
      it('should return MIN', () => {
        const team = findTeam('mnwild', { caseSensitive: false })
        expect(team.abbreviation).toEqual('MIN')
      })
    })
  })

  describe('City names', () => {
    describe('Chicago', () => {
      it('should return Chicago', () => {
        expect(findTeam('Blackhawks').cityName).toEqual('Chicago')
      })
    })

    describe('Dallas', () => {
      it('should return Dallas', () => {
        expect(findTeam('stars', { caseSensitive: false }).cityName).toEqual(
          'Dallas'
        )
      })
    })
  })

  describe('Team names', () => {
    describe('Columbus', () => {
      it('should return Blue Jackets', () => {
        expect(findTeam('Columbus').teamName).toEqual('Blue Jackets')
      })
    })

    describe('Colorado', () => {
      it('should return Avalanche', () => {
        expect(
          findTeam('avalanche', { caseSensitive: false }).teamName
        ).toEqual('Avalanche')
      })
    })
  })
})
