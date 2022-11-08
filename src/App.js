const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./assets/Message");

class App {
  play() {
    Console.print(MESSAGE.START);
  }
}

const app = new App();
app.play();

module.exports = App;
