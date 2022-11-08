const Computer = require("./Computer");

class Game {
  constructor() {
    this.computer = new Computer();
  }

  start() {
    this.computer.setNumber();
  }
}

module.exports = Game;
