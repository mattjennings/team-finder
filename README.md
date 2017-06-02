# team-finder

Finds NHL teams that match the given term.

Take a look at the [team files](/teams) to see the terms associated with each team. Usually it will be city name, team name, abbreviation, and other nicknames.


## Install

```
$ npm install team-finder
```

## Usage

```js
var teamFinder = require('team-finder')
 
teamFinder.find('Capitals').fullName // 'Washington Capitals'

```

## API

### Find
.find(term, caseSensitive = true)

#### Description
Returns a Team object if a team is found, or null if not

```js
// Case sensitive
teamFinder.find('Washington').teamName // 'Capitals'
teamFinder.find('Capitals').cityName // 'Washington'
teamFinder.find('WSH').fullName // 'Washington Capitals'
teamFinder.find('Caps').abbreviation // 'WSH'
 
// Case insensitive
teamFinder.find('washington', false).teamName // 'Capitals'
teamFinder.find('capitals', false).cityName // 'Washington'
teamFinder.find('wsh', false).fullName // 'Washington Capitals'
teamFinder.find('caps', false).abbreviation // 'WSH'

```

## Models

### Team
Contains details of a team

#### Properties
> cityName

Name of the city (ex. "Washington")

> teamName

Name of the team (ex. "Capitals")

> fullName

cityName and fullName together (ex. "Washington Capitals")

> abbreviation

Abbreviation of the team (ex. "WSH")

> terms

Array of other terms that the team might go by (ex. "Caps") 


