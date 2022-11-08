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

  play() {
    this.user.setNumber();
    const result = this.countBallAndStrike();
    this.printResultMessage(result);
  }
}

module.exports = Game;
