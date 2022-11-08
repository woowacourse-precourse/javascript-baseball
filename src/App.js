const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const User = require("./User");
const Checker = require("./Checker");

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
    this.checker = new Checker();
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    const targetNum = this.computer.createRandomNum();
    this.guessNum(targetNum);
  }

  guessNum(targetNum) {
    Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
      const isValid = this.user.checkValidation(userNum);
      if (!isValid) {
        throw new Error("올바른 입력이 아닙니다. 프로그램을 종료합니다.");
      }
      const [ball, strike] = this.checker.checkStrikeAndBall(
        targetNum,
        userNum
      );
      Console.print(this.createResultWord(ball, strike));

      if (strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.askRestart();
      } else {
        this.guessNum(targetNum);
      }
    });
  }

  createResultWord(ball, strike) {
    if (!ball && !strike) return "낫싱";
    if (!ball) return `${strike}스트라이크`;
    if (!strike) return `${ball}볼`;
    return `${ball}볼 ${strike}스트라이크`;
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
