const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  checkType(num) {
    if (typeof num != "Number") throw -1;
  }
  checkDigit(num) {
    if (num < 123 || num > 987) throw -1;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.\n");
    MissionUtils.Console.readLine("숫자를 입력해주세요:", (num) => {
      this.checkType(num);
      this.checkDigit(num);
    });
  }
}

module.exports = App;
