# Age Of Empires 2 Api

Age Of Empires 2 Api created with:

- NodeJS
- ExpressJS
- MongoDB

## Current Features

### GET requests

###   Fetch all data about civilizations
- http://localhost:3000/civilizations

###   Fetch data about selected civilization
- http://localhost:3000/civilizations/id
- Example call : http://localhost:3000/civilizations/5fe8c609a4ffb61855a7fb37
```
{
	unique_unit: [
		{
			name: "Teutonic Knight",
			img: "https://static.wikia.nocookie.net/ageofempires/images/b/b4/Teutonicknight_icon_aoe2.png",
		},
	],
	unique_tech: [{ name: "Crenellations" }],
	civilization_bonus: [
		"Monks have 2x healing range",
		"Towers can garrison 2x units (more arrows)",
		"Murder Holes is free",
		"Farms cost 33% less",
		"Town Centers have +1 attack and +5 line of sight",
	],
	_id: "5fe8c609a4ffb61855a7fb37",
	id: 16,
	name: "Teutons",
	banner: "https://static.wikia.nocookie.net/ageofempires/images/3/3f/CivIcon-Teutons.png",
	expansion: "Age of Kings",
	army_type: "Infantry",
	team_bonus: "Units are more resistant to conversion",
}
```

###   Fetch all data about structures
- http://localhost:3000/structures

###   Fetch data about selected structure
- http://localhost:3000/structures/id

###   Fetch all data about units
- http://localhost:3000/units

###   Fetch data about selected unit
- http://localhost:3000/units/id

###   Fetch all data about technologies
- http://localhost:3000/technologies

###   Fetch data about selected technology
- http://localhost:3000/technologies/id

## Future Plans

-   Add image urls to structures, units and technologies
-   Add, Edit, Delete abilities for admin roles

## Project Setup

```
npm install
```

### Start Project

```
npm start
```
