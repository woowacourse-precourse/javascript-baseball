const MissionUtils = require('@woowacourse/mission-utils');
const isNumber = require("../src/IsNumber")
const checkStrike = require('../src/CountStrike')

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
        this.checkBall(computer, number)
      }
    });
  }

  checkBall(computer, user) {
    let countBall = 0;
  
    Array.from(user, Number).map((currentValue, index) => {
      if (
        computer.includes(currentValue) &&
        computer.indexOf(currentValue) !== index
      ) {
        countBall += 1;
      }
  
      return countBall;
    });
  
    return MissionUtils.Console.print(countBall);
  };
}

const app = new App()
app.play()

module.exports = App;
