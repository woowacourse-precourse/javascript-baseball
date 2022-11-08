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
    checkList.forEach((validatorFunction) => {
      validatorFunction(playerInput);
    });
    return this.isThreeStrike(randomNumbers, playerInput);
  }

  countStrike(randomNumbers, playerPickedNumbers) {
    let strike = 0;
    playerPickedNumbers.forEach((playerNumber, index) => {
      if (playerNumber === randomNumbers[index]) {
        strike += 1;
      }
    });
    return strike;
  }

  countBall(randomNumbers, playerPickedNumbers) {
    let ball = 0;
    playerPickedNumbers.forEach((playerNumber, index) => {
      if (playerNumber !== randomNumbers[index] && randomNumbers.includes(playerNumber)) {
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
    }
    this.printStrikeBall(strike, ball);
    return false;
  }

  printStrikeBall(strike, ball) {
    if (!strike && !ball) {
      return Console.print('낫싱');
    }
    if (!strike && ball) {
      return Console.print(`${ball}볼`);
    }
    if (strike && !ball) {
      return Console.print(`${strike}스트라이크`);
    }
    return Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

module.exports = GameHint;
