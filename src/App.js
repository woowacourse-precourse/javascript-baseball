const { Random, Console } = require('./util/missionUtils');
const { MAX_LENGTH, START_NUM, END_NUM } = require('./common/constants');
const {
  START_MESSAGE,
  END_MESSAGE,
  INPUT_MESSGAE,
  INVALID_ERROR_MESSAGE,
  DUPLICATE_ERROR_MESSAGE,
  RANGE_ERROR_MESSAGE,
} = require('./common/messages');

class App {
  constructor() {
    this.randomNumbers = [];
  }

  play() {
    this.startGame();
  }

  startGame() {
    this.printStartMessage();
    this.initRandomNumbers();
    this.getPlayerInput();
  }

  printStartMessage() {
    Console.print(START_MESSAGE);
  }

  getPlayerInput() {
    const playerInput = (answer) => {
      this.checkPlayerInput(answer);
      // this.checkGameResult(answer);
    };

    Console.readLine(`${INPUT_MESSGAE}`, playerInput);
  }

  checkPlayerInput(playerInput) {
    const convertNumberPlayerInput = Number(playerInput);
    const convertStringPlayerInput = String(playerInput);
    const differentNumbers = [...new Set(convertStringPlayerInput)];
    const isNoNumber = isNaN(convertNumberPlayerInput);

    if (isNoNumber) {
      throw `${INVALID_ERROR_MESSAGE}`;
    }

    if (convertStringPlayerInput.length !== 3) {
      throw `${RANGE_ERROR_MESSAGE}`;
    }

    if (differentNumbers.length !== 3) {
      throw `${DUPLICATE_ERROR_MESSAGE}`;
    }

    const inputNumbers = convertStringPlayerInput.split('');
    if (inputNumbers.includes('0')) {
      throw `${INVALID_ERROR_MESSAGE}`;
    }
  }

  initRandomNumbers() {
    this.randomNumbers = this.makeRandomNumbers();
  }

  makeRandomNumbers() {
    const pickedNumbers = [];

    while (pickedNumbers.length < MAX_LENGTH) {
      let number = Random.pickNumberInRange(START_NUM, END_NUM);
      if (!pickedNumbers.includes(number)) {
        pickedNumbers.push(number);
      }
    }

    return [...pickedNumbers];
  }
}

const app = new App();
app.play();

module.exports = App;
