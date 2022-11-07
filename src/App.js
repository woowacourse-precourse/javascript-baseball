const Controller = require("./controller/controller");

class App {
  constructor() {
    this.controller = new Controller(true);
  }

  // 게임 초기 실행
  play() {
    this.controller.init();
  }
}

module.exports = App;
