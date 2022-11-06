const { Console } = require('@woowacourse/mission-utils');

const RandomNumber = require('./RandomNumber');
const { Exception, BaseBallException, RestartException } = require('./Exception');

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
  #exception;

  constructor() {
    this.#exception = new Exception();
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

      input === COMMAND.RESTART ? this.enter(RandomNumber.makeNew()) : this.end();
    });
  }

  play() {
    this.enter(RandomNumber.makeNew());
  }
}

module.exports = App;
