const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.correctAnswer = false;
    this.init();
  }

  init() {
    this.print(TEXT.START_MESSAGE);
  }

  play() {}

  print(message) {
    return MissionUtils.Console.print(message);
  }

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }
}

const app = new App();
app.play();

module.exports = App;
