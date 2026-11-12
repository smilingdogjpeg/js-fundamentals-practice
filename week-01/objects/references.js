const team = { name: "Red Dragons", points: 42 };
const sameTeam = team;
const copyTeam = { ...team };

sameTeam.points = 0;
copyTeam.points = 99;

console.log(team.points);
console.log(sameTeam === team);
console.log(copyTeam === team);
console.log(copyTeam.points);

//prediction 1: 0
//prediction 2: true
//prediction 3: false
//prediction 4: 99