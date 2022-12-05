const GamePrinter = require('./GamePrinter');

class GameController {
  basball;

  constructor(basball) {
    this.basball = basball;
  }

  gameStart() {
    GamePrinter.show('게임을 시작합니다.');
    const randomNumber = this.basball.getThrownBall();
    // todo nextFn(randomNuber)
  }
}

module.exports = GameController;
