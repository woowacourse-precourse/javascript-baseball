const MissionUtils = require('@woowacourse/mission-utils');
const GameInput = require('./GameInput');
const GamePrinter = require('./GamePrinter');

class GameController {
  #baseball;

  constructor(baseball) {
    this.#baseball = baseball;
  }

  play() {
    GamePrinter.show('게임을 시작합니다.');
    this.gameStart();
  }

  gameStart() {
    const randomNumber = this.#baseball.getThrownBall();
    GamePrinter.show(randomNumber); // for quick testing
    GameInput.userSwing(this.isStrikeOrBall.bind(this));
  }

  isStrikeOrBall(numbers) {
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

    if (strike !== 3) GameInput.userSwing(this.isStrikeOrBall.bind(this));
    if (strike === 3) this.reStart();
  }

  reStart() {
    GamePrinter.show('3스트라이크입니다 게임종료.');
    GameInput.reStartQuestion(this.replayOrNot.bind(this));
  }

  replayOrNot(answer) {
    if (answer === '1') {
      this.#baseball.setThrwonball();
      this.gameStart();
    }
    if (answer === '2') MissionUtils.Console.close();
  }
}

module.exports = GameController;
