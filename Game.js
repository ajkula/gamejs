const { PlayerList, Player, Monsters, Enemy } = require('./characters')
const { Places, Decision } = require('./json')
var readline = require('readline');

class Game {
  constructor(PlayerList, Monsters, Places) {
    this.monsters = Monsters;
    this.places = new Places(this.monsters);
    this.room = {};
    this.context = null;
    this.player = {};
    this.npc = {};
    this.commands = {
      go: [
        "walk", "go", "leave", "next"
      ],
      attack: [
        "att", "attack"
      ],
      useSkill: [
        "skill", "spell", "useSkill"
      ],
      use: [
        "use"
      ]
    }
    this.roomObjects = [
      { label: "chest", method: "use", required: "key" },
      { label: "enemy", method: "attack", required: null },
      { label: "seller", method: "talk", required: null },
    ];
  }

  newPlace() {
    this.places = new Places(this.monsters).places();
  }

  upFirst(str) {
    str = str.split("")
    str[0] = str[0].toUpperCase()
    return str.join("")
  }

  newGame() {
    const that = this;
    that.newPlace()
    console.clear()
    console.log("You open your eyes and get up, covered in mud..")
    console.log("It's a full moon night and the thunder is raging.")
    console.log("you are a...")

    for (let i = 0; i < PlayerList.length; i++) {
      process.stdout.write(`${PlayerList[i].name}${i < PlayerList.length - 1 ? "," : ""} `)
    }
    console.log()
    var stdin = process.openStdin();
    process.stdout.write("?")
    stdin.addListener("data", function(data) {
      const input = that.upFirst(data.toString().trim())

      // if (data.toString().trim() === "go") stdin.
      const char = PlayerList.find(e => { return e.name === input });
      if (char) console.log("You are a " + char.name)
      for (let attr in char) {
        if (attr !== "name") console.log(attr + ": " + char[attr])
      }
      this.player = new Player(char);

      console.log("...Enter [go] to start your adventure.");
      process.stdout.write("?")
      if (data.toString().trim() === "go") console.log(that.places);
    })
  }

  newRoom(place) {
    // this.room = new Places()
    this.room = place;
    this.context = this.room.context;
    
  }
}

const g = new Game(PlayerList, Monsters, Places);
g.newGame()

// places = { 
//   place: 'You are in an old foggy village, there\'s no soul here,\n there are nobody around, only the wind.\n',
//   context: 'enemy',
//   enemy: { name: 'GOBLIN', health: 20, strength: 10, potions: 2, avoid: 30 },
//   seller: 'There is an elf, he holds something in his hand',
//   goods: { 
//     inventory: {
//       item: 'coins',
//       quantity: 5,
//       price: 0,
//       description: 'A handful of silver and copper coins' 
//     },
//     item: { 
//       item: 'key',
//       quantity: 2,
//       price: 18,
//       description: 'To open locks, chests' 
//     }
//   } 
// }

// Player = {
//   name: 'Paladin',
//   health: 31,
//   fullHealth: 31,
//   strength: 10,
//   msg: '',
//   lost: false,
//   avoid: 20,
//   potions: 1,
//   scroll: null,
//   doll: null,
//   key: null,
//   coins: null,
//   moonstone: null }