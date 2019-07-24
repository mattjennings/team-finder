[![npm package](https://img.shields.io/npm/v/team-finder.svg?style=for-the-badge)](https://www.npmjs.com/package/team-finder)
[![npm downloads](https://img.shields.io/npm/dm/team-finder.svg?style=for-the-badge)](https://www.npmjs.com/package/team-finder)

# team-finder

Finds NHL teams that match the given term.

## Install

```
$ npm install team-finder
```

## Usage

```js
import { findTeam } from 'team-finder'

findTeam('Capitals').fullName // 'Washington Capitals'
```

## API

#### findTeam

Returns a [Team](/src/teams.ts) if a team is found, or null if not

```js
import { findTeam } from 'team-finder'

findTeam('Washington').teamName // 'Capitals'
findTeam('Capitals').cityName // 'Washington'
findTeam('WSH').fullName // 'Washington Capitals'
findTeam('Caps').abbreviation // 'WSH'

// Case insensitive
findTeam('washington', { caseSensitive: false }).teamName // 'Capitals'

// Elliotte Friedman mode for his stubborn use of wrong abbreviations
findTeam('CAL', { friedman: true }).abbreviation // 'CGY'
```

#### teams

Returns an object containing all teams with abbreviations as the key

```js
import { teams } from 'team-finder'

teams.ANA.cityName // 'Anaheim'
teams.BOS.fullName // 'Boston Bruins'
```

#### teamDictionary

An object where the keys are the terms/names/social media values, and the values are team abbreviations. `findTeam` used to use this under the hood. Will probably be removed in a later major version (3.x).

(note: this does not include `friedmanAbbreviations` of teams)

```js
import { teamDictionary } from 'team-finder'

teamDictionary['Caps'] // 'WSH'
teamDictionary['@FlaPanthers'] // 'FLA'
```

## License

[MIT](/LICENSE)
