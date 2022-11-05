const { Random, Console } = require('./util/missionUtils');
const { MAX_LENGTH, BEGIN_NUM, END_NUM } = require('./common/constants');
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
    };

    Console.readLine(`${INPUT_MESSGAE}`, playerInput);
  }

  checkPlayerInput(playerInput) {
    const checkList = [
      this.isNotANumber,
      this.isValidInputLength,
      this.isValidRangeOfNumber,
      this.isDuplicateNumber,
    ];

    let isValid;
    checkList.forEach((validInputCheckFunction) => {
      isValid = validInputCheckFunction(playerInput);
    });

    if (isValid) {
      // 결과를 체크할 함수 호출
    }
  }

  isNotANumber(playerInput) {
    const convertNumberPlayerInput = Number(playerInput);
    const isNoNumber = isNaN(convertNumberPlayerInput);

    if (isNoNumber) {
      throw new Error(`${INVALID_ERROR_MESSAGE}`);
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
        throw new Error(`${INVALID_ERROR_MESSAGE}`);
      }
    });

    return true;
  }

  isDuplicateNumber(playerInput) {
    const convertStringPlayerInput = String(playerInput);
    const differentNumbers = [...new Set(convertStringPlayerInput)];

    if (differentNumbers.length !== MAX_LENGTH) {
      throw new Error(`${DUPLICATE_ERROR_MESSAGE}`);
    }

    return true;
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
}

const app = new App();
app.play();

module.exports = App;
