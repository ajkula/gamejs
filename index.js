const { dice, range } = require('./functions/dice');
const { PlayerList, Player, Monsters, Enemy } = require('./characters')
const Places = require('./json/Places')

const avoid = (num) => { 
  const avoid = Math.floor(Math.random() * 100)
  console.log("avoid rate:", 50 - Math.ceil(num/2), 50 + Math.ceil(num/2), num)
  console.log("hit range:", avoid)
  return avoid >= 50 - Math.ceil(num/2) && avoid <= 50 + Math.ceil(num/2);
};

function RAE(array) {
  return array[Math.floor(Math.random() * (array.length - 1))]
}

function getEnemies(num = 1) {
  const rand = Math.floor(Math.random() * 2) + 1;
  const arr = new Array(rand);
  for(let i = 0; i < arr.length; i++) { arr[i] = RAE(require('./characters/MonstersList').Monsters) }
  return arr;
}

const list = []
getEnemies().forEach(enemy => {
  list.push(new Enemy(enemy));
})

console.clear()
const a = new Places(require('./characters/MonstersList').Monsters)
console.log(a.places())
console.log()
console.log(new Player(RAE(PlayerList)))

// var stdin = process.openStdin();
// console.log(``)
// process.stdout.write("?")
// stdin.addListener("data", function(data) {
    
//     const input = data.toString().trim()
//     const method = input.split(" ")
// })

console.log()
console.log(avoid(20))
console.log(range(100))