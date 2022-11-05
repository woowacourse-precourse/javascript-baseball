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
      this.printGameResult(playerInput);
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

  countStrike(playerPickNumbers) {
    let strike = 0;
    playerPickNumbers.forEach((number, index) => {
      if (number === this.randomNumbers[index]) {
        strike += 1;
      }
    });

    return strike;
  }

  countBall(playerPickNumbers) {
    let ball = 0;
    playerPickNumbers.forEach((number, index) => {
      if (number !== this.randomNumbers[index] && this.randomNumbers.includes(number)) {
        ball += 1;
      }
    });

    return ball;
  }

  printGameResult(playerInput) {
    console.log(`컴퓨터 숫자 : `, this.randomNumbers); // 컴퓨터 숫자 테스트용
    const playerPickNumbers = playerInput.split('').map(Number);
    const strike = this.countStrike(playerPickNumbers);
    const ball = this.countBall(playerPickNumbers);

    if (strike === 3) {
      Console.print(`${strike}스트라이크`);
      Console.print(`${STRIKE_MESSAGE}`);
      Console.readLine(`${END_MESSAGE}\n`, (answer) => {
        const convertNumberInput = Number(answer);
        if (convertNumberInput == 1) {
          this.play();
        } else if (convertNumberInput == 2) {
          return Console.close();
        }
      });
    } else if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else if (!strike && ball) {
      Console.print(`${ball}볼`);
    } else if (strike && !ball) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }

    this.getPlayerInput();
  }
}

const app = new App();
app.play();

module.exports = App;
