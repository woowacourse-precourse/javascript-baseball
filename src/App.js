const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computer = this.createComputerNumber(1, 9, 3);
    console.log(computer);
  }
  createComputerNumber(start, end, count) {
    const numbers = [];

    while (numbers < count) {
      numbers.push(Random.pickUniqueNumbersInRange(start, end, count));
    }
    return numbers[0];
  }
}

module.exports = App;
