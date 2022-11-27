//@ts-check
const BaseballGame = require("./controller/BaseballGame");

class App {
  play() {
    const controller = new BaseballGame();
    controller.start();
  }
}

module.exports = App;
