/*prediction: teams returns: [ { name: "Blue Herons", faction: "Water", points: 57 },
                               { name: "Green Foxes", faction: "Earth", points: 42 },
                               { name: "Red Dragons", faction: "Fire", points: 42 },
                               { name: "Gold Owls", faction: "Fire", points: 30 } ]

*/
const teams = [
    { name: "Red Dragons", faction: "Fire", points: 42 },
    { name: "Blue Herons", faction: "Water", points: 57 },
    { name: "Green Foxes", faction: "Earth", points: 42 },
    { name: "Gold Owls", faction: "Fire", points: 30 },
];

function getLeaderboard(teamList) {
    return teamList.toSorted((a, b) => {
        if (a.points !== b.points) {
            return b.points - a.points;
        }
        return a.name.localeCompare(b.name);
    });
}

console.log(teams);
console.log(getLeaderboard(teams));

