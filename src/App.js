class App {
  play() { }
}

function printMessage(sentence) {
  return Console.print(sentence)
}

function generateAnswer() {
  let numsArr = [];
  while (numsArr.length < 3) {
    let num = Random.pickNumberInRange(1, 9);
    if (!numsArr.includes(num)) numsArr.push(num);
  }
  return numsArr.join('')
}

module.exports = App;
