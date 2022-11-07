const MissionUtils = require('@woowacourse/mission-utils');
const isNumber = require("../src/IsNumber")

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
        this.checkStrike(computer, number)
      }
    });
  }

  checkStrike(computer, user) {
    let countStrike = 0;
  
    Array.from(user, Number).map((currentValue, index) => {
      if (
        computer.includes(currentValue) 
        && computer.indexOf(currentValue) === index
      ) {
        countStrike += 1;
      }
  
      return countStrike;
    });
  
    return MissionUtils.Console.print(countStrike)
  };
}

module.exports = App;
