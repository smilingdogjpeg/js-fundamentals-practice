const team = {
    name: "Red Dragons",
    points: 42,
    players: ["Ana", "Ben"]
};

const copyTeam = {...team, players: [...team.players]};

copyTeam.points = 99;
copyTeam.players.push("Cara");

console.log(team.points);
console.log(team.players);
console.log(copyTeam.players === team.players);
console.log(copyTeam.players)

//prediction 1: 42
//prediction 2: ["Ana", "Ben"]
//prediction 3: false
//prediction 4: ["Ana", "Ben", "Cara"]