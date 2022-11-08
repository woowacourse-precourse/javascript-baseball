const { Console, GAME_START_TEXT } = require('./Constant');
const BaseballGame = require('./BaseballGame');

class App {
  play() {
    Console.print(GAME_START_TEXT);
    new BaseballGame();
  }
}

module.exports = App;
