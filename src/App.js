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
    this.endPhrase = this.target.length + config.PHRASE.END;
    this.restartPhrase = config.PHRASE.RESTART;
  }

  play() {
    this.getGuessFromUser();
  }

  getGuessFromUser() {
    Console.readLine(this.inputPhrase, (input) => {
      validateGameInput(input);
      this.judgeGuess(input);
      if (this.isGameEnd) {
        printPhrase(this.endPhrase);
        this.getRestartFromUser();
      } else {
        this.getGuessFromUser();
      }
    });
  }

  getRestartFromUser() {
    Console.readLine(this.restartPhrase, (input) => {
      validateRestartInput(input);
      if (input === config.RESTART_INPUT.RESTART) {
        this.restartGame();
        this.play();
      } else {
        Console.close();
      }
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

const app = new App();
app.play();

module.exports = App;
