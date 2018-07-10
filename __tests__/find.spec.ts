let assert = require('assert')
let teamFinder = require('../lib/index.js')

describe('find', () => {
  describe('Abbreviations', () => {
    describe('Anaheim', () => {
      it('should return ANA', () => {
        assert.equal('ANA', teamFinder.find('Ducks').abbreviation)
      })
    })

    describe('Boston', () => {
      it('should return BOS', () => {
        assert.equal('BOS', teamFinder.find('bruins', false).abbreviation)
      })
    })

    describe('Minnesota', () => {
      it('should return MIN', () => {
        const team = teamFinder.find('mnwild', false)
        assert.equal('MIN', team.abbreviation)
      })
    })
  })

  describe('City names', () => {
    describe('Chicago', () => {
      it('should return Chicago', () => {
        assert.equal('Chicago', teamFinder.find('Blackhawks').cityName)
      })
    })

    describe('Dallas', () => {
      it('should return Dallas', () => {
        assert.equal('Dallas', teamFinder.find('stars', false).cityName)
      })
    })
  })

  describe('Team names', () => {
    describe('Columbus', () => {
      it('should return Blue Jackets', () => {
        assert.equal('Blue Jackets', teamFinder.find('Columbus').teamName)
      })
    })

    describe('Colorado', () => {
      it('should return Avalanche', () => {
        assert.equal('Avalanche', teamFinder.find('avalanche', false).teamName)
      })
    })
  })

  describe('Get all teams', () => {
    it('should get Anaheim', () => {
      assert.equal('Anaheim', teamFinder.getAllTeams().ANA.cityName)
    })
  })
})
