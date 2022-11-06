const { Console } = require('@woowacourse/mission-utils');

const BaseBall = require('./BaseBall');
const RandomNumber = require('./RandomNumber');

const { COMMAND } = require('./utils/constants');
const { Exception, BaseBallException, RestartException } = require('./Exception');

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
