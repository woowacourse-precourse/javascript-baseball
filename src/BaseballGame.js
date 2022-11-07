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
    Console.readLine(`${INPUT_MESSAGE}`, this.checkPlayerInput());
  }

  checkPlayerInput() {
    const playerInput = (answer) => {
      const isThreeStrike = this.gameHint.checkPlayerInput(this.randomNumbers, answer);
      if (isThreeStrike) {
        return this.gameOver();
      }
      this.getPlayerInput();
    };

    return playerInput;
  }

  gameOver() {
    printEndMessage();
    this.getGameOverInput();
  }

  getGameOverInput() {
    const playerAnswer = (answer) => {
      const convertNumberInput = Number(answer);
      if (convertNumberInput === 1) {
        return this.restartGame();
      }
      if (convertNumberInput === 2) {
        return Console.close();
      }

      throw new Error('잘못된 입력');
    };

    Console.readLine(`${END_MESSAGE}\n`, playerAnswer);
  }
}

module.exports = BaseballGame;
