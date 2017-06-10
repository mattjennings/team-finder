let assert = require('assert');
var teamFinder = require('../index.js');

describe('find', function() {
  describe('Abbreviations', function() {
    describe('Anaheim', function() {
      it('should return ANA', function() {
        assert.equal('ANA', teamFinder.find('Ducks').abbreviation);
      })
    })

    describe('Boston', function() {
      it('should return BOS', function() {
        assert.equal('BOS', teamFinder.find('bruins', false).abbreviation);
      })
    })
  })

  describe('City names', function() {
    describe('Chicago', function() {
      it('should return Chicago', function() {
        assert.equal('Chicago', teamFinder.find('Blackhawks').cityName);
      })
    })

    describe('Dallas', function() {
      it('should return Dallas', function() {
        assert.equal('Dallas', teamFinder.find('stars', false).cityName);
      })
    })
  })


  describe('Team names', function() {
    describe('Columbus', function() {
      it('should return Blue Jackets', function() {
        assert.equal('Blue Jackets', teamFinder.find('Columbus').teamName);
      })
    })

    describe('Colorado', function() {
      it('should return Avalanche', function() {
        assert.equal('Avalanche', teamFinder.find('avalanche', false).teamName);
      })
    })
  })
});