const team = { name: "Red Dragons", points: 42, faction: "Fire" };
const key = "faction";

console.log(team.points);
console.log(team[key]);
console.log(team.key);
console.log(team.colour);

team.points = team.points + 8;
team.colour = "red";
console.log(team);

//prediction 1: 42
//prediction 2: Fire
//prediction 3: undefined
//prediction 4: undefined

