const utilFun = require("./utils/utils");

class App {
  constructor() {
    this.computerRandomThreeNumber = 0;
  }

  init() {
    this.computerRandomThreeNumber = utilFun.computerUniqueThreeNumbers();
  }

  play() {
    this.init();
    this.getUserNumbers();
  }
}

module.exports = App;
