const { Console } = require('@woowacourse/mission-utils');
const { validateGameInput, validateRestartInput } = require('./validate');
const config = require('./config');

class App {
  constructor() {
    this.inputPhrase = config.PHRASE.INPUT;
    this.restartPhrase = config.PHRASE.RESTART;
  }

  getGuessFromUser() {
    Console.readLine(this.inputPhrase, (input) => {
      validateGameInput(input);
    });
  }

  getRestartFromUser() {
    Console.readLine(this.restartPhrase, (input) => {
      validateRestartInput(input);
    });
  }
}

module.exports = App;
