const Message = require('./components/Message');
const Input = require('./components/Input');
const Count = require('./components/Count');
const createRandomNumbers = require('./utils/createRandomNumbers');

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

  static handleRestart(input) {
    if (input === '1') {
      return App.start();
    }
    if (input === '2') {
      return Message.close();
    }
    Message.requestRestart(App.handleRestart);
  }
}

module.exports = App;
