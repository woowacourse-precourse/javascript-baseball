//@ts-check
const Controller = require("./Controller");

class App {
  play() {
    const controller = new Controller();
    controller.start();
  }
}

module.exports = App;
