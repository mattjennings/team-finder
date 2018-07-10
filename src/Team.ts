export default class Team {
  public cityName: string
  public teamName: string
  public abbreviation: string
  public terms: string[]

  public primaryColor: string
  public textColor: string

  constructor({
    cityName,
    teamName,
    abbreviation,
    terms,
    primaryColor,
    textColor
  }: {
    cityName: string
    teamName: string
    abbreviation: string
    terms?: string[]
    primaryColor: string
    textColor: string
  }) {
    this.cityName = cityName
    this.teamName = teamName
    this.abbreviation = abbreviation
    this.terms = terms || []
    this.primaryColor = primaryColor
    this.textColor = textColor
  }

  get fullName() {
    return this.cityName + ' ' + this.teamName
  }
}
