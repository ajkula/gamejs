
module.exports.Monsters = [
  {
    name: "SKELETON", 
    health: Math.min(Math.floor(Math.random() * 15 + 10), 15),
    strength: 15,
    potions: Math.floor(Math.random() * 3 + 1),
    avoid: 20,
    dammage: 5,
    skill: 0
  },
  {
    name: "GOBLIN", 
    health: Math.min(Math.floor(Math.random() * 20 + 10), 20),
    strength: 10,
    potions: Math.min(Math.floor(Math.random() * 5 + 1), 2),
    avoid: 30,
    dammage: 4,
    skill: 0
  },
  {
    name: "SORCERER", 
    health: Math.min(Math.floor(Math.random() * 30 + 10), 30),
    strength: 20,
    potions: Math.min(Math.floor(Math.random() * 5 + 1), 2),
    avoid: 20,
    dammage: 6,
    skill: 0
  },
  {
    name: "ORC", 
    health: Math.min(Math.floor(Math.random() * 50 + 20), 50),
    strength: 30,
    potions: Math.min(Math.floor(Math.random() * 5 + 1), 2),
    avoid: 10,
    dammage: 8,
    skill: 0
  }
];

