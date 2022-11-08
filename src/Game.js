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


  play() {
    this.user.setNumber();
    const result = this.countBallAndStrike();
  }
}

module.exports = Game;
