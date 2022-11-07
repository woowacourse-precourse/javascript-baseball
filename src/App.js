const MissionUtils = require('@woowacourse/mission-utils');
const isNumber = require("../src/IsNumber")

class App {
  play() {
    const computer = this.computerRandomNumber();
    this.getUserInput()
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

  getUserInput() {
    MissionUtils.Console.readLine(`숫자를 입력해주세요 : `, number => {
      if(isNumber(number)) {
        MissionUtils.Console.print("숫자 입니다.")
      }
    });
  }
}

module.exports = App;
