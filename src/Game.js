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

  play() {
    this.user.setNumber();
  }
}

module.exports = Game;
