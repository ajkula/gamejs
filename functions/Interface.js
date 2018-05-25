class Interface {
  constructor(places, enemies = []) {
    this.places = places;
    this.enemies = enemies;
  }

  render() {
    console.clear()
    console.log()
    console.log("*****************************************************************")
    console.log()
    console.log(" " + this.places.place)
    console.log()
    console.log("*****************************************************************")
    

  }
}

const places = { place: 'You are near a forest, the trees seem to move,\n all is silent, there\'s not even wind!\n',
situation: { dice: 2, context: 'enemies' } };

const i = new Interface(places);
i.render()