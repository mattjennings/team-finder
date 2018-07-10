export default class Team {
    private _cityName;
    private _teamName;
    private _abbreviation;
    private _terms;
    constructor(cityName: any, teamName: any, abbreviation: any, terms: any);
    readonly cityName: string;
    readonly teamName: string;
    readonly fullName: string;
    readonly abbreviation: string;
    readonly terms: string[];
}
