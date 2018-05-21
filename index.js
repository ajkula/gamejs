const dice = require('./functions/dice').dice;
const range = require('./functions/dice').range;
const Enemy = require('./characters/Characters').Enemy;
const Player = require('./characters/Characters').Player;
const PlayerList = require('./characters/PlayerList').PlayerList;

function getEnemies(num = 1) {
  const rand = Math.floor(Math.random() * 3) + 1;
  const arr = new Array(rand);
  for(let i = 0; i < arr.length; i++) { arr[i] = require('./characters/MonstersList').Monsters[Math.floor(Math.random() * 4)] }
  return arr;
}

const list = []
console.log(list)

getEnemies().forEach(enemy => {
  list.push(new Enemy(enemy));
})

console.log(dice(2))
console.log(list)
console.log(PlayerList)

// var stdin = process.openStdin();
// console.log(``)
// process.stdout.write("?")
// stdin.addListener("data", function(data) {
    
//     const input = data.toString().trim()
//     const method = input.split(" ")
// })

const avoid = (num) => { 
  const avoid = Math.floor(Math.random() * 100)
  console.log("avoid rate:", 50 - Math.ceil(num/2), 50 + Math.ceil(num/2), num)
  console.log("hit range:", avoid)
  return avoid >= 50 - Math.ceil(num/2) && avoid <= 50 + Math.ceil(num/2);
};

console.log(avoid(20))
console.log(avoid(30))
console.log(avoid(40))
console.log(avoid(10))
console.log(avoid(50))