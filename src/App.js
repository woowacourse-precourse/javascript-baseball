const MissionUtils = require('@woowacourse/mission-utils');
const Constants = require('./constant');

class App {
  async play() {
    printGameStartMsg();
    const computerNumber = createComputerNumber();
    const number = await inputNumber();
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

function input(msg) {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine(msg, resolve);
  });
}

async function inputNumber() {
  const number = await input(Constants.INPUT_NUMBER_MESSAGE);
  return [...number];
}

module.exports = App;
