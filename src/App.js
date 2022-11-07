const { Console } = require('@woowacourse/mission-utils');
const MESSAGES = require('./Constants');

class App {
  play() {
    Console.print(MESSAGES.START);
  }
}

const app = new App();
app.play();

module.exports = App;