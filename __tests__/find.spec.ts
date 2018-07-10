import teamFinder from '../src'

describe('find', () => {
  describe('Abbreviations', () => {
    describe('Anaheim', () => {
      it('should return ANA', () => {
        expect(teamFinder.find('Ducks').abbreviation).toEqual('ANA')
      })
    })

    describe('Boston', () => {
      it('should return BOS', () => {
        expect(teamFinder.find('bruins', false).abbreviation).toEqual('BOS')
      })
    })

    describe('Minnesota', () => {
      it('should return MIN', () => {
        const team = teamFinder.find('mnwild', false)
        expect(team.abbreviation).toEqual('MIN')
      })
    })
  })

  describe('City names', () => {
    describe('Chicago', () => {
      it('should return Chicago', () => {
        expect(teamFinder.find('Blackhawks').cityName).toEqual('Chicago')
      })
    })

    describe('Dallas', () => {
      it('should return Dallas', () => {
        expect(teamFinder.find('stars', false).cityName).toEqual('Dallas')
      })
    })
  })

  describe('Team names', () => {
    describe('Columbus', () => {
      it('should return Blue Jackets', () => {
        expect(teamFinder.find('Columbus').teamName).toEqual('Blue Jackets')
      })
    })

    describe('Colorado', () => {
      it('should return Avalanche', () => {
        expect(teamFinder.find('avalanche', false).teamName).toEqual('Avalanche')
      })
    })
  })

  describe('Get all teams', () => {
    it('should get Anaheim', () => {
      expect(teamFinder.getAllTeams().ANA.cityName).toEqual('Anaheim')
    })
  })
})
