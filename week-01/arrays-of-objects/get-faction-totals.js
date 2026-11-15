const teams = [
    { name: "Red Dragons", faction: "Fire", points: 42 },
    { name: "Blue Herons", faction: "Water", points: 57 },
    { name: "Green Foxes", faction: "Earth", points: 42 },
    { name: "Gold Owls", faction: "Fire", points: 30 },
];

function getFactionTotals(team) {
    return team.reduce((acc, team) => {
        acc[team.faction] =
        (acc[team.faction] !== undefined ? acc[team.faction] : 0)
        + team.points;

        return acc;
    }, {});
}

console.log(getFactionTotals(teams));