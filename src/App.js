const { Console, Random } = require("@woowacourse/mission-utils");

class Computer {
  createRandomNum() {
    const random3 = Random.pickUniqueNumbersInRange(1, 9, 3);
    return random3.join("");
  }
}

class User {
  guessNum() {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      return input;
    });
  }
}

class App {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    const targetNum = this.computer.createRandomNum();
  }
}

module.exports = App;
