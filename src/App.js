const Message = require('./Message');

class App {
  constructor() {}

  play() {
    Message.printStart();
    App.start();
  }
}

module.exports = App;
