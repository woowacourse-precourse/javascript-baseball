const { Console } = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const User = require('./User');

const { ALERT, ASK } = require('./constants/message');
const { END_INPUT, RESULT } = require('./constants/game');
const { APP } = require('./constants/error');

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  play() {
    Console.print(ALERT.START_GAME);
    this.startGame();
  }

  startGame() {
    this.computer.pickRandomBaseball();
    this.requestUserGuess();
  }

  requestUserGuess() {
    Console.readLine(ASK.NUMBER, (input) => {
      const numbers = Array.from(input, Number);

      this.user.guess(numbers, this.computer);
      const result = this.user.tellResult();

      this.printResult(result);
    });
  }

  printResult(result) {
    Console.print(result);

    if (result !== RESULT.END_POINT) {
      this.requestUserGuess();
    } else {
      this.requestPlayAgain();
    }
  }

  requestPlayAgain() {
    Console.print(ALERT.GAME_END);
    Console.readLine(ASK.PLAY_AGAIN, (input) => {
      switch (input) {
        case END_INPUT.PLAY_AGAIN:
          return this.startGame();
        case END_INPUT.CLOSE_APP:
          return this.close();
        default:
          throw new Error(APP.INVALID_END_INPUT);
      }
    });
  }

  close() {
    Console.close();
  }
}

module.exports = App;
