const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    printGameStartMsg();
    const computerNumber = createComputerNumber();
  }
}

function printGameStartMsg() {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
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
