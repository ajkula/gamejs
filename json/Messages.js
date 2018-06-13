
class Messages {
  constructor() {
    this.list = []
  }
  push(message) {
    this.list.push(message)
    if (this.list.length > 3) this.list.shift()
  }
  display() {
    for(let i = 0; i < 3; i++) { console.log(this.list[i]) }
  }
}

module.exports = { Messages }