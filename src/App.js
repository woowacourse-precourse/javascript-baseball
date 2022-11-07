const MissionUtils = require('@woowacourse/mission-utils');

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
    MissionUtils.Console.readLine(`숫자를 입력해주세요 : `, answer => {
      MissionUtils.Console.print(answer)
    });
  }

}

module.exports = App;
