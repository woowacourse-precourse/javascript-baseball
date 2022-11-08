const { Console } = require('@woowacourse/mission-utils');
const Game = require('./components/game');
const { START } = require('./constant/constant.js');

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    Console.print(START);
    this.game.start();
  }
}

const test = new App();
test.play();
module.exports = App;
