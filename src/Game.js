const Computer = require('./Computer');

class Game {
  constructor() {
    this.computer = new Computer();
  }

  async start() {
    const answer = this.computer.makeAnswer();
    const userNumber = await this.computer.getUserNumber();
    const result = this.computer.getResult(answer, userNumber);
    this.computer.printResult(result);
  }
}

module.exports = Game;
