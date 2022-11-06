const Message = require('./Message');
const Input = require('./Input');
const Count = require('./Count');
const createRandomNumbers = require('./createRandomNumbers');

class App {
  constructor() {}

  play() {
    Message.printStart();
    App.start();
  }

  static computerNumbers = [];

  static start() {
    App.computerNumbers = createRandomNumbers();
    Message.requestInput(App.handleInput);
  }

  static handleInput(input) {
    const userNumbers = Input.toNumbers(input);
    if (!Input.isValid(userNumbers)) {
      return Message.throwError();
    }
    const ballCount = Count.ball(App.computerNumbers, userNumbers);
    const strikeCount = Count.strike(App.computerNumbers, userNumbers);
    Message.printResult(ballCount, strikeCount);
    if (strikeCount === 3) {
      Message.printEnd();
      return Message.requestRestart(App.handleRestart);
    }
    Message.requestInput(App.handleInput);
  }
}

module.exports = App;
