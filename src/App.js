const MissionUtils = require("@woowacourse/mission-utils");

const print = require("./print.js");

class App {
  constructor() {}
  play() {
    print.start();
  }
}

const app = new App();
app.play();

module.exports = App;
