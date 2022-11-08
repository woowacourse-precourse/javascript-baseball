const { Console } = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const User = require("./User");

class Game {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
  }

  start() {
    this.computer.setNumber();
    this.play();
  }

  countBallAndStrike() {
    let ball = 0,
      strike = 0;
    const computerNumber = this.computer.getNumber();
    this.user.getNumber().forEach((userNumber, index) => {
      if (computerNumber[index] === userNumber) {
        strike += 1;
      } else if (computerNumber.includes(userNumber)) {
        ball += 1;
      }
    });
    return { ball, strike };
  }

  printResultMessage({ ball, strike }) {
    if (ball === 0 && strike === 0) {
      return Console.print("낫싱");
    }
    const ballText = ball ? `${ball}볼` : "";
    const strikText = strike ? `${strike}스트라이크` : "";
    Console.print(`${ballText} ${strikText}`);
  }

  checkEnd({ strike }) {
    if (strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return true;
    }
    return false;
  }

  askReplay() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        if (+input === 1) {
          return this.replay();
        } else if (+input === 2) {
          return this.exit();
        } else {
          throw new Error("잘못된 입력입니다. 게임이 종료됩니다.");
        }
      }
    );
  }

  replay() {
    this.start();
  }

  exit() {
    Console.close();
  }

  play() {
    this.user.setNumber();
    const result = this.countBallAndStrike();
    this.printResultMessage(result);
    if (this.checkEnd(result)) {
      return this.askReplay();
    }
    this.play();
  }
}

module.exports = Game;
