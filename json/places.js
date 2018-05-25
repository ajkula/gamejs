class Places {
  constructor(enemiesArray) {
    this.enemiesArray = enemiesArray;
    this.places1 = [
      " in an old foggy village, there's no soul here,",
      " near a forest, the trees seem to move,",
      " on a long road between green hills and a river,",
      " in front of a castle ruin's gate,",
      " the wasteland, everything is dead and dry here,",
      " the swamp, nauseous and poisonous, full of predators,",
    ]
    
    this.places2 = [
      " there are nobody around, only the wind.",
      " it's getting dark and you can see shadows moving..",
      " all is silent, there's not even wind!",
      " you don't feel safe but have to keep going on..",
      " suddenly you feel shivers, a noise, voice or wind?",
      " many noises around you, but can't see anyone...",
    ]

    this.situation = [
      { dice: 1, context: 'chest' },
      { dice: 2, context: 'enemy' },
      { dice: 3, context: 'seller' },
      { dice: 4, context: 'ghost' },
    ];

    this.seller = [
        " a dwarf, with a bag full of goods",
        " an elf, he holds something in his hand",
        " a troll, he seems to propose an object",
      ]
    
    this.goods = [
      { item: "potions", quantity: Math.floor(Math.random() * 2) + 1, price: Math.floor(Math.random() * 15) + 5, description: "Heal 20 HP" },
      { item: "scroll", quantity: Math.floor(Math.random() * 2) + 1, price: Math.floor(Math.random() * 15) + 5, description: "40 Dammage to one enemy" },
      { item: "doll", quantity: Math.floor(Math.random() * 2), price: Math.floor(Math.random() * 15) + 5, description: "Will revive you with 30 HP" },
      { item: "key", quantity: Math.floor(Math.random() * 2 + 1), price: Math.floor(Math.random() * 15) + 5, description: "To open locks, chests" },
      { item: "coins", quantity: Math.floor(Math.random() * 5 + 1), price: 0, description: "A handful of silver and golden coins" },
      { item: "moonstone", quantity: Math.floor(Math.random() * 2 + 1), price: Math.floor(Math.random() * 15) + 5, description: "Increase your dammage by 5" },
    ]
  }
  
  RAE(array) {
    return array[Math.floor(Math.random() * (array.length - 1))]
  }

  places(stituationDice = 1) {
    const situation = this.RAE(this.situation);

    console.log(this.goods.find((e) => { return e.item === "coins" }))
    console.log()

    return { 
      place: `You are${this.RAE(this.places1)}\n${this.RAE(this.places2)}\n`,
      situation: situation,
      enemy: this.RAE(this.enemiesArray),
      seller: `There is${this.RAE(this.seller)}`,
      goods: this.RAE(this.goods)
    }
  }
}  



console.clear()
const a = new Places(require('../characters/MonstersList').Monsters)
console.log(a.places())

module.exports = Places;

console.log(Math.floor(Math.random() * 2))
console.log(Math.floor(Math.random() * 2) + 1)
console.log(Math.floor(Math.random() * 100) > 70)