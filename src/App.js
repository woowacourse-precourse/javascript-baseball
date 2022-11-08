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
      const result = this.getResult(computer, gameUser);
      Console.print(result);

      if (result !== "3스트라이크") {
        this.discUser(computer);
      } else {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        Console.close();
      }
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
  countExist(computer, gameUser) {
    const computerSet = new Set(computer);
    const exists = gameUser.filter((disc) => computerSet.has(disc));
    return exists.length;
  }
  countStrike(computer, gameUser) {
    const strikes = gameUser.filter((disc, i) => disc === computer[i]);
    return strikes.length;
  }
  getResult(computer, gameUser) {
    const exist = this.countExist(computer, gameUser);
    const strike = this.countStrike(computer, gameUser);
    const ball = exist - strike;

    if (exist === 0) {
      return "낫싱";
    } else if (strike === 0) {
      return `${ball}볼`;
    } else if (ball === 0) {
      return strike + "스트라이크";
    }
    return `${ball}볼 ${strike} 스트라이크`;
  }
  againGame() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    Console.readLine("", (input) => {
      switch (input) {
        case "1":
          return this.play();
        case "2":
          return Console.close();
        default:
          throw new Error("게임을 종료합니다.");
      }
    });
  }
}

module.exports = App;
