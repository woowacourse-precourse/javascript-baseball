const Output = require("../view/OutputView");

const Controller = {
  async stringToNumber(numbers) {
    let newNumbers = numbers.split("");
    return await newNumbers.map((newNumber) => Number(newNumber));
  },

  validate(numbers) {
    const redundantNumbers = new Set(numbers);
    for (number of numbers) {
      if (isNaN(Number(number))) {
        throw new Error();
      }
      if (redundantNumbers.size !== 3) {
        throw new Error();
      }
      if (1 > Number(number) || Number(number) > 9) {
        throw new Error();
      }
    }
    return numbers;
  },

  makeResultString({ countBall, countStrike }) {
    if (countStrike === 3) {
      return `${countStrike}스트라이크\n${countStrike}개의 숫자를 모두 맞히혔습니다! 게임 종료`;
    }
    if (0 < countStrike && countBall === 0) {
      return `${countStrike}스트라이크`;
    }
    if (0 < countBall && countStrike === 0) {
      return `${countBall}볼`;
    }
    if (0 < countBall && 0 < countStrike) {
      return `${countBall}볼 ${countStrike}스트라이크`;
    }
    if (0 === countBall && 0 === countStrike) {
      return `낫싱`;
    }
  },

  validateRegame(isRegame) {
    if (Number(isRegame) === 1 || Number(isRegame) === 2) {
      return Number(isRegame);
    } else {
      throw new Error();
    }
  },
};

module.exports = Controller;
