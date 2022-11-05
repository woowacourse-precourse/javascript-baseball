const Validator = require('./Validator');
const { Random, Console } = require('./util/missionUtils');
const { MAX_LENGTH, BEGIN_NUM, END_NUM } = require('./common/constants');
const {
  START_MESSAGE,
  END_MESSAGE,
  GAMEOVER_MESSAGE,
  INPUT_MESSGAE,
} = require('./common/messages');

class App {
  constructor() {
    this.randomNumbers = this.initRandomNumbers();
  }

  play() {
    this.printStartMessage();
    this.initRandomNumbers();
    this.getPlayerInput();
  }

  printStartMessage() {
    Console.print(`${START_MESSAGE}`);
  }

  initRandomNumbers() {
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
      Validator.isNumber,
      Validator.isValidInputLength,
      Validator.isValidRangeOfNumber,
      Validator.isUniqueNumber,
    ];

    let isValid = false;
    checkList.forEach((validatorFunction) => {
      isValid = validatorFunction(playerInput);
    });

    if (isValid) {
      this.printGameResult(playerInput);
    }
  }

  countStrike(playerPickedNumbers) {
    let strike = 0;
    playerPickedNumbers.forEach((number, index) => {
      if (number === this.randomNumbers[index]) {
        strike += 1;
      }
    });

    return strike;
  }

  countBall(playerPickedNumbers) {
    let ball = 0;
    playerPickedNumbers.forEach((number, index) => {
      if (number !== this.randomNumbers[index] && this.randomNumbers.includes(number)) {
        ball += 1;
      }
    });

    return ball;
  }

  printGameResult(playerInput) {
    const playerPickedNumbers = playerInput.split('').map(Number);
    const strike = this.countStrike(playerPickedNumbers);
    const ball = this.countBall(playerPickedNumbers);

    if (strike === 3) {
      Console.print(`${strike}스트라이크`);
      this.gameOver();
    } else {
      this.printStrikeBall(strike, ball);
    }

    this.getPlayerInput();
  }

  gameOver() {
    Console.print(`${GAMEOVER_MESSAGE}`);
    Console.readLine(`${END_MESSAGE}\n`, (answer) => {
      const convertNumberInput = Number(answer);
      if (convertNumberInput == 1) {
        return this.play();
      }
      if (convertNumberInput == 2) {
        return Console.close();
      }
    });
  }

  printStrikeBall(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else if (!strike && ball) {
      Console.print(`${ball}볼`);
    } else if (strike && !ball) {
      Console.print(`${strike}스트라이크`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
