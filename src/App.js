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

  createMyNumber() {
    MissionUtils.Console.readline("숫자를 입력해주세요 : ", (myNumbers) => {
      
    })
  }

  countBallStrike(randomNumbers, myNumbers) {
    let ball = 0;
    let strike = 0;
    for (let i = 0; i < 3; i++) {
      if (myNumbers[i] == randomNumbers[i])
        strike++;
      else if (myNumbers.includes(randomNumbers[i]))
        ball++;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
