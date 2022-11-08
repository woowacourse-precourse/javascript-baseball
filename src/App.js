const { Console } = require('@woowacourse/mission-utils');

const BaseBall = require('./BaseBall');

const RandomNumber = require('./RandomNumber');

const Exception = require('./exception');
const BaseBallException = require('./exception/BaseBall');
const NextException = require('./exception/Next');

const { COMMAND } = require('./utils/constants');

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

  play() {
    this.print(COMMAND.START_MESSAGE);
    this.#enter(RandomNumber.makeNew());
  }

  #enter(random) {
    Console.readLine(COMMAND.QUESTION, (input) => {
      this.#exception.checkErrorFor(new BaseBallException(input));
      this.print(this.#baseball.getResultToString(random, input));

      if (this.#baseball.isStrikeOut(random, input)) this.#doNext();
      this.#enter(random);
    });
  }

  #doNext() {
    Console.readLine(`${COMMAND.NEXT_QUESTION}\n`, (input) => {
      this.print(COMMAND.STRIKEOUT);
      this.#exception.checkErrorFor(new NextException(input));

      if (input === COMMAND.RESTART) this.#enter(RandomNumber.makeNew());
      this.end();
    });
  }
}

module.exports = App;
