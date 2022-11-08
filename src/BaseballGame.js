const GameHint = require('./GameHint');
const { Random, Console } = require('./util/missionUtils');
const { MAX_LENGTH, BEGIN_NUM, END_NUM } = require('./common/constants');
const {
  START_MESSAGE,
  END_MESSAGE,
  GAMEOVER_MESSAGE,
  INPUT_MESSAGE,
} = require('./common/messages');

const printStartMessage = () => {
  Console.print(`${START_MESSAGE}`);
};

const printEndMessage = () => {
  Console.print(`${GAMEOVER_MESSAGE}`);
};

class BaseballGame {
  constructor() {
    this.randomNumbers = this.initRandomNumbers();
    this.gameHint = new GameHint();
  }

  startGame() {
    printStartMessage();
    this.getPlayerInput();
  }

  restartGame() {
    this.randomNumbers = this.initRandomNumbers();
    this.getPlayerInput();
  }

  initRandomNumbers() {
    const pickedNumbers = [];
    while (pickedNumbers.length < MAX_LENGTH) {
      const number = Random.pickNumberInRange(BEGIN_NUM, END_NUM);
      if (!pickedNumbers.includes(number)) {
        pickedNumbers.push(number);
      }
    }
    return [...pickedNumbers];
  }

  getPlayerInput() {
    const playerInput = (answer) => {
      const isThreeStrike = this.checkThreeStrike(answer);
      if (isThreeStrike) {
        return this.gameOver();
      }
      return this.getPlayerInput();
    };

    Console.readLine(`${INPUT_MESSAGE}`, playerInput);
  }

  checkThreeStrike(playerInput) {
    return this.gameHint.checkPlayerInput(this.randomNumbers, playerInput);
  }

  gameOver() {
    printEndMessage();
    this.getRestartAnswer();
  }

  getRestartAnswer() {
    const playerAnswer = (answer) => {
      if (answer === '1') {
        return this.restartGame();
      }
      if (answer === '2') {
        return Console.close();
      }
      throw new Error('잘못된 입력');
    };
    Console.readLine(`${END_MESSAGE}\n`, playerAnswer);
  }
}

module.exports = BaseballGame;
