const GameHint = require('./GameHint');
const { Random, Console } = require('./util/missionUtils');
const { MAX_LENGTH, BEGIN_NUM, END_NUM } = require('./common/constants');
const {
  START_MESSAGE,
  END_MESSAGE,
  GAMEOVER_MESSAGE,
  INPUT_MESSGAE,
} = require('./common/messages');

const printStartMessage = () => {
  Console.print(`${START_MESSAGE}`);
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
      const isThreeStrike = this.gameHint.checkPlayerInput(this.randomNumbers, answer);
      if (isThreeStrike) {
        return this.gameOver();
      }

      this.getPlayerInput();
    };

    Console.readLine(`${INPUT_MESSGAE}`, playerInput);
  }

  gameOver() {
    Console.print(`${GAMEOVER_MESSAGE}`);
    Console.readLine(`${END_MESSAGE}\n`, (answer) => {
      const convertNumberInput = Number(answer);
      if (convertNumberInput == 1) {
        return this.startGame();
      }
      if (convertNumberInput == 2) {
        return Console.close();
      }
    });
  }
}

module.exports = BaseballGame;
