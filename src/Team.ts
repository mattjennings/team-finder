export default class Team {
  private _cityName: string
  private _teamName: string
  private _abbreviation: string
  private _terms: string

  constructor(cityName, teamName, abbreviation, terms) {
    this._cityName = cityName
    this._teamName = teamName
    this._abbreviation = abbreviation
    this._terms = terms
  }

  get cityName() {
    return this._cityName
  }

  get teamName() {
    return this._teamName
  }

  get fullName() {
    return this._cityName + ' ' + this._teamName
  }

  get abbreviation() {
    return this._abbreviation
  }

  get terms() {
    return this._terms
  }
}
