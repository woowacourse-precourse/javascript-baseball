const { print, readLine, pickUniqueNumbersInRange } = require("./Utils");

function gameStart() {
  const computerNumbers = createComputerNumbers();
  print(computerNumbers);
}

function createComputerNumbers() {
  return pickUniqueNumbersInRange(1, 9, 3);
}

module.exports.gameStart = gameStart;
