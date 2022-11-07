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
    while (true) {
      if (this.checkComplete(targetNum)) break;
    }
    this.sayCorrect();
    this.askRestart();
  }

  checkComplete(targetNum) {
    const userNum = this.user.guessNum();
    if (targetNum === userNum) return true;
  }

  sayCorrect() {
    Console.print("3스트라이크");
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  askRestart() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    Console.readLine("", (isRestart) => {
      if (isRestart === "1") return this.startGame();
      if (isRestart === "2") return this.endGame();
      this.sayError();
    });
  }

  endGame() {
    Console.print("게임을 종료합니다.");
    Console.close();
  }

  sayError() {
    throw new Error("적절한 입력이 아닙니다. 게임을 종료합니다.");
  }
}

module.exports = App;
