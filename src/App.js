const MissionUtils = require('@woowacourse/mission-utils');
const Constants = require('./constant');

class App {
  play() {
    printGameStartMsg();
    const computerNumber = createComputerNumber();
  }
}

function printGameStartMsg() {
  MissionUtils.Console.print(Constants.START_MESSAGE);
}

function createComputerNumber() {
  const computerNumber = [];

  while (computerNumber.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }

  return computerNumber;
}

module.exports = App;
