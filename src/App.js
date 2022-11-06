const MissionUtils = require('@woowacourse/mission-utils');

class App {
  print(message) {
    return MissionUtils.Console.print(message);
  }
}

const app = new App();
app.play();

module.exports = App;
