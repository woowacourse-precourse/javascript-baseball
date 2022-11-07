const MissionUtils = require('@woowacourse/mission-utils');
const isNumber = require("../src/IsNumber")
const checkStrike = require('../src/CountStrike')
const checkBall = require('../src/CountBall')

class App {
  play() {
    const computer = this.computerRandomNumber();
    this.getUserInput(computer)
  }

  computerRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }

  getUserInput(computer) {
    MissionUtils.Console.readLine(`숫자를 입력해주세요 : `, number => {
      if(isNumber(number)) {
        checkStrike(computer, number)
        checkBall(computer, number)
      }
    });
  }
}

const app = new App()
app.play()

module.exports = App;
