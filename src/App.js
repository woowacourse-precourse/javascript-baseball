const Message = require('./Message');
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
}

module.exports = App;
