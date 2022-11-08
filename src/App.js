const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./data/constants');
const Baseball = require('./components/Baseball');

class App {
  constructor() {
    this.baseball = new Baseball();
  }

  play() {
    Console.print(MESSAGE.START);
    this.baseball.gameStart();
  }
}

const app = new App();
app.play();

module.exports = App;
