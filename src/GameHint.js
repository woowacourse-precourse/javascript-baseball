const Validator = require('./Validator');
const { Console } = require('./util/missionUtils');

class GameHint {
  checkPlayerInput(randomNumbers, playerInput) {
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
      return this.isThreeStrike(randomNumbers, playerInput);
    }
  }

  countStrike(randomNumbers, playerPickedNumbers) {
    let strike = 0;
    playerPickedNumbers.forEach((number, index) => {
      if (number === randomNumbers[index]) {
        strike += 1;
      }
    });

    return strike;
  }

  countBall(randomNumbers, playerPickedNumbers) {
    let ball = 0;
    playerPickedNumbers.forEach((number, index) => {
      if (number !== randomNumbers[index] && randomNumbers.includes(number)) {
        ball += 1;
      }
    });

    return ball;
  }

  isThreeStrike(randomNumbers, playerInput) {
    const playerPickedNumbers = playerInput.split('').map(Number);
    const strike = this.countStrike(randomNumbers, playerPickedNumbers);
    const ball = this.countBall(randomNumbers, playerPickedNumbers);

    if (strike === 3) {
      Console.print(`${strike}스트라이크`);
      return true;
    } else {
      this.printStrikeBall(strike, ball);
      return false;
    }
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

module.exports = GameHint;
