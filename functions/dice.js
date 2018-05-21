
const dice = (num = 1) => {
  if(num === 1) return (Math.floor(Math.random() * 6)) + 1;
  if(num > 1) {
    let result = 0;
    for(let i = 1; i <= num; i++) {
      let ran = (Math.floor(Math.random() * 6)) + 1;
      result += ran
      console.log("jet:", ran)
    }
    return result;
  }
}

const range = (num = 1) => {
  if(num === 1) return (Math.floor(Math.random() * 6)) + 1;
  if(num > 1) {
    return (Math.floor(Math.random() * num)) + 1;
  }
}

module.exports = { dice, range };