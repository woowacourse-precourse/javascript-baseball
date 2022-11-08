const { Console } = require("@woowacourse/mission-utils");
const baseballGame = require("./BaseballGame");

const { GAME_SENTENCE } = require("./constants");

class App {
  play() {
    Console.print(GAME_SENTENCE.START);
    baseballGame.start();
  }
}

const app = new App();
app.play();
module.exports = App;
