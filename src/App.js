const { Console } = require('@woowacourse/mission-utils');
const { validateGameInput, validateRestartInput } = require('./validate');
const {
  generateTargetNumber, findStrikeBall, makePhrase, printPhrase
} = require('./gameUtils');
const config = require('./config');

class App {
  constructor() {
    this.target = generateTargetNumber();
    this.isGameEnd = false;
    this.inputPhrase = config.PHRASE.INPUT;
    this.restartPhrase = config.PHRASE.RESTART;
  }

  play() {
    this.getGuessFromUser();
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

  judgeGuess(guess) {
    const { strike, ball } = findStrikeBall(this.target, guess);
    this.isGameEnd = strike === this.target.length;
    printPhrase(makePhrase(strike, ball));
  }

  restartGame() {
    this.target = generateTargetNumber();
    this.isGameEnd = false;
  }
}

module.exports = App;
