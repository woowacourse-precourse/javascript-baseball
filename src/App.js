const { Random, Console } = require('./util/missionUtils');
const { MAX_LENGTH, BEGIN_NUM, END_NUM } = require('./common/constants');
const {
  START_MESSAGE,
  END_MESSAGE,
  STRIKE_MESSAGE,
  INPUT_MESSGAE,
  INVALID_NUMERIC_ERROR_MESSAGE,
  DUPLICATE_NUMERIC_ERROR_MESSAGE,
  RANGE_ERROR_MESSAGE,
} = require('./common/messages');

class App {
  constructor() {
    this.randomNumbers = [];
  }

  play() {
    this.printStartMessage();
    this.initRandomNumbers();
    this.getPlayerInput();
  }

  printStartMessage() {
    Console.print(START_MESSAGE);
  }

  initRandomNumbers() {
    this.randomNumbers = this.makeRandomNumbers();
  }

  makeRandomNumbers() {
    const pickedNumbers = [];

    while (pickedNumbers.length < MAX_LENGTH) {
      let number = Random.pickNumberInRange(BEGIN_NUM, END_NUM);
      if (!pickedNumbers.includes(number)) {
        pickedNumbers.push(number);
      }
    }

    return [...pickedNumbers];
  }

  getPlayerInput() {
    const playerInput = (answer) => {
      this.checkPlayerInput(answer);
    };

    Console.readLine(`${INPUT_MESSGAE}`, playerInput);
  }

  checkPlayerInput(playerInput) {
    const checkList = [
      this.isNumber,
      this.isValidInputLength,
      this.isValidRangeOfNumber,
      this.isUniqueNumber,
    ];

    let isValid = false;
    checkList.forEach((validInputCheckFunction) => {
      isValid = validInputCheckFunction(playerInput);
    });

    if (isValid) {
      this.printResult(playerInput);
    }
  }

  isNumber(playerInput) {
    const convertNumberPlayerInput = Number(playerInput);
    const isNoNumber = isNaN(convertNumberPlayerInput);

    if (isNoNumber) {
      throw new Error(`${INVALID_NUMERIC_ERROR_MESSAGE}`);
    }

    return true;
  }

  isValidInputLength(playerInput) {
    const convertStringPlayerInput = String(playerInput);

    if (convertStringPlayerInput.length !== MAX_LENGTH) {
      throw new Error(`${RANGE_ERROR_MESSAGE}`);
    }

    return true;
  }

  isValidRangeOfNumber(playerInput) {
    const convertStringPlayerInput = String(playerInput);
    const inputNumbers = convertStringPlayerInput.split('');

    inputNumbers.forEach((inputNumber) => {
      if (inputNumber < BEGIN_NUM) {
        throw new Error(`${INVALID_NUMERIC_ERROR_MESSAGE}`);
      }
    });

    return true;
  }

  isUniqueNumber(playerInput) {
    const convertStringPlayerInput = String(playerInput);
    const differentNumbers = [...new Set(convertStringPlayerInput)];

    if (differentNumbers.length !== MAX_LENGTH) {
      throw new Error(`${DUPLICATE_NUMERIC_ERROR_MESSAGE}`);
    }

    return true;
  }
}

const app = new App();
app.play();

module.exports = App;
