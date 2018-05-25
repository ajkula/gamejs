class AbstractFighter {
  constructor(objet) {
    this.name = objet.name;
    this.health = objet.health;
    this.fullHealth = objet.health;
    this.strength = objet.strength;
    this.msg = "";
    this.lost = false;
    this.avoid = objet.avoid;
    this.potions = objet.potions
  }
  setLife(value) { 
    this.health += value;
    this.health >= 1 ? null : this.lost = true;
  }
  getState() {
    return { name: this.name, health: this.health, lost: this.lost, strength: this.strength, potions: this.potions } 
  }
}

class Enemy extends AbstractFighter {
  constructor(objet) {
    super(objet);
  }

  attack(enemy) {
    enemy.setLife(this.dammage);
    const {life, lost} = enemy.getLife();
    this.msg = lost ? this.name + " won!" : "hit: " + life + " life remaining!"
  } 
}

class Player extends AbstractFighter {
  constructor(objet) {
    super(objet);
  }

  attack(enemy) {
    enemy.setLife(this.dammage);
    const {life, lost} = enemy.getLife();
    this.msg = lost ? this.name + " won!" : "hit: " + life + " life remaining!"
  } 
}

module.exports = { Enemy, Player };