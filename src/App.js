const { Console } = require('@woowacourse/mission-utils');

const BaseBall = require('./BaseBall');
const RandomNumber = require('./RandomNumber');
const { Exception, BaseBallException, RestartException } = require('./Exception');

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
  #baseball;

  constructor() {
    this.#baseball = new BaseBall();
    this.#exception = new Exception();
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

      this.print(this.#baseball.getResultToString(random, input));

      this.#baseball.isStrikeOut(random, input) ? this.doNext() : this.enter(random);
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
