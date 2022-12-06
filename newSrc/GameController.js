const GameInput = require('./GameInput');
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
    GameInput.userSwing(this.strikeOrBall.bind(this));
  }

  strikeOrBall(number) {
    console.log('유저넘버 : ', number);
  }
}

module.exports = GameController;
