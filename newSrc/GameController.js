const GamePrinter = require('./GamePrinter');

class GameController {
  basball;

  constructor(basball) {
    this.basball = basball;
  }

  gameStart() {
    const randomNumber = this.basball.getThrownBall();
    GamePrinter.show('게임을 시작합니다.');
    GamePrinter.show(randomNumber);
  }
}

module.exports = GameController;
