const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computer = this.createComputerNumber(1, 9, 3);
    this.user(computer);
  }
  createComputerNumber(start, end, count) {
    const numbers = [];

    while (numbers < count) {
      numbers.push(Random.pickUniqueNumbersInRange(start, end, count));
    }
    return numbers[0];
  }
  user(computer) {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.discUser(input)) {
        throw new Error("1부터 9까지 서로 다른 숫자 3자리를 입력해주세요.");
      }
      const gameUser = Array.from(input, Number);
    });
  }
  discUser(input) {
    if (input.length !== 3) return false;

    const inputNumbers = Array.from(input, Number);
    if (inputNumbers.some((number) => !Number.isInteger(number))) return false;
    if (inputNumbers.some((number) => number === 0)) return false;
    if (inputNumbers.some((number) => number > 9)) return false;

    const inputNumberSet = new Set(inputNumbers);
    if (inputNumberSet.size !== 3) return false;

    return true;
  }
}

module.exports = App;
