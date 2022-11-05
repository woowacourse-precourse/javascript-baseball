const User = require('./User');
const GameInitMessage = require('./GameInitMessage');
const Computer = require('./Computer');

class App {
  play() {
    const gameInitMessage = new GameInitMessage();
    gameInitMessage.initPrint();

    const computer = new Computer();
    const computerNumbers = computer.getComputerNumbers();

    const user = new User(computerNumbers);
    user.userInputStart();
  }
}

module.exports = App;
