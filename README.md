# team-finder

Finds NHL teams that match the given term.

Take a look at the [team files](/teams) to see the terms associated with each team. Usually it will be city name, team name, abbreviation, and other nicknames.

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

// Case sensitive
findTeam('Washington').teamName // 'Capitals'
findTeam('Capitals').cityName // 'Washington'
findTeam('WSH').fullName // 'Washington Capitals'
findTeam('Caps').abbreviation // 'WSH'

// Case insensitive
findTeam('washington', { caseSensitive: false }).teamName // 'Capitals'
findTeam('capitals', { caseSensitive: false }).cityName // 'Washington'
findTeam('wsh', { caseSensitive: false }).fullName // 'Washington Capitals'
findTeam('caps', { caseSensitive: false }).abbreviation // 'WSH'
```

#### teams

Returns an object containing all teams with abbreviations as the key

```js
import { teams } from 'team-finder'

teams.ANA.cityName // 'Anaheim'
teams.BOS.fullName // 'Boston Bruins'
```

#### teamDictionary

A javascript object where the keys are terms (and social media info) and the values are team abbreviations. `findTeam` uses this under the hood, but you can use this if you need to pass the data somewhere else.

```js
import { teamDictionary } from 'team-finder'

teamDictionary['Caps'] // 'WSH'
teamDictionary['@FlaPanthers'] // 'FLA'
```

## License

[MIT](/LICENSE)
