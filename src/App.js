const { Random, Console } = require('@woowacourse/mission-utils');
const { Exception, BaseBallException, RestartException } = require('./Exception');

const RANDOMLIST = Object.freeze({
  STARTPOINT: 1,
  ENDPOINT: 9,
});

const BASEBALL = Object.freeze({
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
});

const COMMAND = Object.freeze({
  START_MESSAGE: '숫자 야구 게임을 시작합니다.',
  QUESTION: '숫자를 입력해주세요 : ',
  NEXT_QUESTION: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요',
  STRIKEOUT: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  CLOSE: '게임 종료',
  RESTART: '1',
  EXIT: '2',
});

class App {
  #random;
  #exception;

  constructor() {
    this.#random = this.#makeRandomNumber();
    this.#exception = new Exception();
  }

  get3RandomNumbers() {
    return this.#random;
  }

  #makeRandomNumber() {
    const result = [];

    while (result.length < 3) {
      const randomNum = Random.pickNumberInRange(RANDOMLIST.STARTPOINT, RANDOMLIST.ENDPOINT);
      !result.includes(randomNum) && result.push(randomNum);
    }

    return result;
  }

  isStrike(randomItem, inputItem) {
    return randomItem === inputItem;
  }

  countStrike(random, input) {
    return input.filter((inputItem, index) => this.isStrike(random[index], inputItem)).length;
  }

  isBall(random, input, numberIndex) {
    const randomItem = random[numberIndex];
    const inputItem = input[numberIndex];

    return !this.isStrike(randomItem, inputItem) && random.includes(inputItem);
  }

  countBall(random, input) {
    return input.filter((_, index) => this.isBall(random, input, index)).length;
  }

  getStrikeToString(strikeCount) {
    return strikeCount > 0 ? `${strikeCount}${BASEBALL.STRIKE}` : '';
  }

  getBallToString(ballCount) {
    return ballCount > 0 ? `${ballCount}${BASEBALL.BALL}` : '';
  }

  getResultToString(random, input) {
    const ball = this.countBall(random, input);
    const strike = this.countStrike(random, input);

    if (ball === 0 && strike === 0) return `${BASEBALL.NOTHING}`;

    return [this.getBallToString(ball), this.getStrikeToString(strike)].join(' ').trim();
  }

  isStrikeOut(random, input) {
    return this.countStrike(random, input) === 3;
  }

  print(message) {
    Console.print(message);
  }

  end() {
    this.print(COMMAND.CLOSE);
    Console.close();
  }

  enter(random) {
    Console.readLine(COMMAND.QUESTION, (input) => {
      this.#exception.checkErrorFor(new BaseBallException(input));

      input = input.split('').map((inputItem) => +inputItem);

      this.print(this.getResultToString(random, input));

      this.isStrikeOut(random, input) ? this.doNext() : this.enter(random);
    });
  }

  doNext() {
    Console.readLine(`${COMMAND.NEXT_QUESTION}\n`, (input) => {
      this.print(COMMAND.STRIKEOUT);
      this.#exception.checkErrorFor(new RestartException(input));

      input === COMMAND.RESTART ? this.enter(this.#makeRandomNumber()) : this.end();
    });
  }

  play() {
    this.enter(this.get3RandomNumbers());
  }
}

const app = new App();
app.play();

module.exports = App;
