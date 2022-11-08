const { Console, Random } = require("@woowacourse/mission-utils");


class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.computer = [];
    this.computerRandomNumber();
  }

  computerRandomNumber() {
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

}

module.exports = App;
