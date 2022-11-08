const myConsole = require('./utils/myConsole');

class Console {
  constructor() {
    this.console = myConsole;
  }

  print(message) {
    this.console.print(message);
    return this;
  }

  readLine(message, callback) {
    this.console.readLine(message, callback);
    return this;
  }

  close() {
    this.console.close();
    return this;
  }
}

module.exports = Console;
