import Team from '../Team';
export declare const find: (text: string, caseSensitive?: boolean) => Team;
export declare const getAllTerms: () => string[];
export declare const getAllTeams: () => {
    [key: string]: Team;
};
