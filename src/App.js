const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computerRandomNumbers = this.generateComputerRandomNumbers();
  }

  play() {

  }

  printStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  createRandomNumber() {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 10);
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  }
}

const app = new App();
app.play();

module.exports = App;
