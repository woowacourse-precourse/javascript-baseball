const { Console, Random } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');

class App {
  computerNumber;

  constructor() {
    this.initComputerNumber();
    Console.print(Messages.PLAY);
  }

  play() {
    Console.readLine(Messages.QUERY, (userGuess) => {
      if (!this.isValidNumber(userGuess)) {
        throw new Error(Messages.ERROR_WHILE_GUESS);
      }
      this.progress(userGuess);
    });
  }

  progress(userGuess) {
    const { strike, ball } = this.calcGuessResult(this.computerNumber, userGuess);
    this.printGuessResult(strike, ball);

    if (strike === 3) {
      this.gameOver();
    } else {
      this.play();
    }
  }

  gameOver() {
    Console.print(Messages.GAME_OVER);
    Console.readLine(Messages.REPLAY, (keyPress) => {
      switch (keyPress) {
        case '1':
          this.replay();
          return;
        case '2':
          this.quit();
          return;
        default:
          throw new Error(Messages.ERROR_WHILE_REPLAY);
      }
    });
  }

  replay() {
    this.initComputerNumber();
    this.play();
  }

  quit() {
    Console.close();
  }

  initComputerNumber() {
    this.computerNumber = this.createComputerNumber();
  }

  printGuessResult(strike, ball) {
    Console.print(Messages.RESULT_MESSAGE(strike, ball));
  }

  createComputerNumber() {
    const computerNumber = new Set();

    while (computerNumber.size < 3) {
      computerNumber.add(Random.pickNumberInRange(1, 9));
    }

    return [...computerNumber];
  }

  isValidNumber(guessNumber) {
    if (guessNumber.length !== 3) {
      return false;
    }
    if (new Set(guessNumber).size !== 3) {
      return false;
    }
    if (!/^[1-9]{3}$/.test(guessNumber)) {
      return false;
    }
    return true;
  }

  calcGuessResult(computerNumber, userGuess) {
    return userGuess.split('').map(Number).reduce((acc, curr, idx) => {
      if (curr === computerNumber[idx]) {
        acc.strike += 1;
        return acc;
      }
      if (computerNumber.indexOf(curr) > -1) {
        acc.ball += 1;
        return acc;
      }
      return acc;
    }, { strike: 0, ball: 0 });
  }
}

module.exports = App;
