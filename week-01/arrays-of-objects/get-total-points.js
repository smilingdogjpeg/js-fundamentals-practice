const teams = [
    {name: "Red Dragons", faction: "Fire", points: 42},
    { name: "Blue Herons", faction: "Water", points: 57 },
    { name: "Green Foxes", faction: "Earth", points: 42 },
    { name: "Gold Owls", faction: "Fire", points: 30 },
];

const testTeams = [{ name: "Test Team", faction: "Air", points: 1 }];

function getTotalPoints(teamList){
   return teamList.reduce((acc, currentTeam) => acc + currentTeam.points,
       0);
}

console.log(getTotalPoints(teams));
console.log(getTotalPoints(testTeams));

