'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Team = function () {
  function Team(cityName, teamName, abbreviation, terms) {
    _classCallCheck(this, Team);

    this._cityName = cityName;
    this._teamName = teamName;
    this._abbreviation = abbreviation;
    this._terms = terms;
  }

  _createClass(Team, [{
    key: 'cityName',
    get: function get() {
      return this._cityName;
    }
  }, {
    key: 'teamName',
    get: function get() {
      return this._teamName;
    }
  }, {
    key: 'fullName',
    get: function get() {
      return this._cityName + ' ' + this._teamName;
    }
  }, {
    key: 'abbreviation',
    get: function get() {
      return this._abbreviation;
    }
  }, {
    key: 'terms',
    get: function get() {
      return this._terms;
    }
  }]);

  return Team;
}();

module.exports = Team;
