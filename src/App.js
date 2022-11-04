const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {}
}

try {
  const app = new App();
  app.play();
} catch {
  MissionUtils.Console.close();
}

module.exports = App;
