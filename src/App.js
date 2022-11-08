//@ts-check
const Controller = require("./Controller");

class App {
  constructor() {
    this._controller = new Controller();
  }
  play() {
    this._controller.start();
  }
}

module.exports = App;
