const MissionUtils = require('@woowacourse/mission-utils');
const { Message, Constant } = require('./Constant');
const GameInput = require('./GameInput');
const GamePrinter = require('./GamePrinter');

class GameController {
  #baseball;

  constructor(baseball) {
    this.#baseball = baseball;
  }

  play() {
    GamePrinter.show(Message.START);
    this.gameStart();
  }

  gameStart() {
    const randomNumber = this.#baseball.getThrownBall();
    GamePrinter.show(randomNumber); // for quick testing
    GameInput.userSwing(this.isStrike.bind(this));
  }

  isStrike(numbers) {
    this.#baseball.clearScore();
    numbers.forEach((number, count) => this.setStrikeAndBall(number, count));
    this.announceScore();
  }

  // eslint-disable-next-line consistent-return
  setStrikeAndBall(swing, count) {
    const thrownBall = this.#baseball.getThrownBall();
    if (thrownBall[count] === +swing) return this.#baseball.setStrike();
    if (thrownBall.includes(+swing)) return this.#baseball.setBall();
  }

  announceScore() {
    const { strike, ball } = this.#baseball.getScore();
    GamePrinter.showResult(strike, ball);

    if (strike !== Constant.WIN) GameInput.userSwing(this.isStrike.bind(this));
    if (strike === Constant.WIN) this.reStart();
  }

  reStart() {
    GamePrinter.show(Message.WIN);
    GameInput.reStartQuestion(this.replayOrNot.bind(this));
  }

  replayOrNot(answer) {
    if (answer === Constant.OK) {
      this.#baseball.setThrwonball();
      this.gameStart();
    }
    if (answer === Constant.No) MissionUtils.Console.close();
  }
}

module.exports = GameController;
