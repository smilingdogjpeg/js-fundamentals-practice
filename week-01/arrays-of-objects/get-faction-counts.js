const teams = [
    { name: "Red Dragons", faction: "Fire", points: 42 },
    { name: "Blue Herons", faction: "Water", points: 57 },
    { name: "Green Foxes", faction: "Earth", points: 42 },
    { name: "Gold Owls", faction: "Fire", points: 30 },
];

function getFactionCounts(teamList){
    return teamList.reduce((acc, currentTeam) => {
        const faction = currentTeam.faction;
        const currentFaction = acc[faction] !== undefined ? acc[faction] : 0;
        acc[faction] = currentFaction + 1;
        return acc;
        }, {});
}

console.log(getFactionCounts(teams));