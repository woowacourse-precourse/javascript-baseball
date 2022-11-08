const { Console, Random } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');

class App {
  computerNumber;

  constructor() {
    this.setComputerNumber();
    Console.print(Messages.PLAY);
  }

  play() {
    Console.readLine(Messages.QUERY, (userGuess) => {
      if (!this.isValidGuess(userGuess)) {
        throw new Error(Messages.ERROR_WHILE_INPUT);
      }
      this.progress(userGuess);
    });
  }

  progress(userGuess) {
    const { strike, ball } = this.calcHit(this.computerNumber, userGuess);
    Console.print(Messages.RESULT_MESSAGE(strike, ball));

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
    this.setComputerNumber();
    this.play();
  }

  quit() {
    Console.close();
  }

  setComputerNumber() {
    this.computerNumber = this.createComputerNumber();
  }

  createComputerNumber() {
    const computerNumber = new Set();

    while (computerNumber.size < 3) {
      computerNumber.add(Random.pickNumberInRange(1, 9));
    }

    return [...computerNumber];
  }

  isValidGuess(guessNumber) {
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

  calcHit(computerNumber, userGuess) {
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
