const teams = [
    { name: "Red Dragons", faction: "Fire", points: 42 },
    { name: "Blue Herons", faction: "Water", points: 57 },
    { name: "Green Foxes", faction: "Earth", points: 42 },
    { name: "Gold Owls", faction: "Fire", points: 30 },
];

console.log(teams[1].name);
console.log(teams.length);
console.log(teams.map((team) => team.name));
console.log(teams.filter((team) => team.faction === "Fire").length);
console.log(teams.filter((team) => team.points > 40).map((team) => team.name));

//prediction 1: ["Red Dragons"]
//prediction 2: 4
//prediction 3: ["Red Dragons", "Blue Herons", "Green Foxes", "Gold Owls"]
//prediction 4: 2
//prediction 5: ["Red Dragons", "Blue Herons", "Green Foxes"]
