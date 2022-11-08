const NumberBaseball = require("./NumberBaseball");

class App {
  play() {
    this.numberBaseball = new NumberBaseball();
    this.numberBaseball.gameStart();
  }
}

module.exports = App;
