
module.exports.Monsters = [
  { 
    name: "SKELETON", 
    health: Math.min(Math.floor(Math.random() * 15 + 10), 15),
    strength: 15,
    potions: Math.floor(Math.random() * 3 + 1),
    avoid: 20
  },
  { 
    name: "GOBLIN", 
    health: Math.min(Math.floor(Math.random() * 20 + 10), 20),
    strength: 10,
    potions: Math.min(Math.floor(Math.random() * 5 + 1), 2),
    avoid: 30
  },
  { 
    name: "SORCERER", 
    health: Math.min(Math.floor(Math.random() * 30 + 10), 30),
    strength: 20,
    potions: Math.min(Math.floor(Math.random() * 5 + 1), 2),
    avoid: 20
  },
  { 
    name: "ORC", 
    health: Math.min(Math.floor(Math.random() * 50 + 20), 50),
    strength: 30,
    potions: Math.min(Math.floor(Math.random() * 5 + 1), 2),
    avoid: 10
  }
];

