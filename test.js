var readline = require('readline');
const { PlayerList, Player, Monsters, Enemy } = require('./characters')
const { Decision, Places, Messages } = require('./json')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.write("Type 'help' for commands\n");
// rl.write("Square numbers:\n");

// function createPayer(number, callback){
//     rl.question("Enter player " + number + " name? ", function(answer) {
//         var player = { name: answer }

//         // Call the callback function once the player is created.
//         callback(player);
//     });
// }

// createPayer(1, function(player1){
//     createPayer(2, function(player2){
//       console.log("logging name after making players " + player1.name);
//       console.log("logging name after making players " + player2.name);
//       rl.close()
//         // Then call player logic you have from in here.
//     })
// })

function upFirst(str) {
  str = str.split("")
  str[0] = str[0].toUpperCase()
  return str.join("")
}

function select (PlayerList = [], cb) {
  for (let i = 0; i < PlayerList.length; i++) console.log(PlayerList[i].name)
  rl.question("Select hero: ", function(char) {
    const player = PlayerList.find(e => { return e.name === upFirst(char) })
    cb(new Player(player));
  })
}

function RAE(array) {
  return array[Math.floor(Math.random() * (array.length - 1))]
}

select(PlayerList, function(player) {
  const M = new Messages()
  const enemy = new Enemy(RAE(Monsters))
  const PlacesInstance = new Places(Monsters)
  const place = PlacesInstance.places();
  console.log(place)
  // console.log(player)
  // console.log(enemy)
  // player.attack(enemy)
  console.log(enemy)
  const a = new Decision(enemy, player)
  a.rooting(a.tree)
  console.log(player)
})

function ready(PlacesInstance) {
  rl.question("Type ok to start the adventure!", function(start) {
    const place = PlacesInstance.places();
    
  })
}

function chest() {
  
}
function enemy(obj) {
  const enemy = new Enemy(obj.enemy)
  
}
function seller() {

}