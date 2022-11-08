const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answerNumbers;
  }

  getRandomNumbers() {
    const deduplicateRandomNumbers = [];

    while (deduplicateRandomNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!deduplicateRandomNumbers.includes(randomNumber)) {
        deduplicateRandomNumbers.push(randomNumber);
      }
    }
    return deduplicateRandomNumbers;
  }

  checkValid(userInput) {
    if (Number.isNaN(userInput) || !Number.isInteger(Number(userInput))) {
      throw new Error("정수 숫자를 입력하셔야 합니다.");
    }

    if (!(userInput.length === 3)) {
      throw new Error("숫자 3개만 입력하셔야 합니다.");
    }

    if (userInput.includes("0") || Number(userInput) < 0) {
      throw new Error("1~9사이의 숫자 3개를 입력하셔야 합니다.");
    }

    if (new Set(userInput).size !== 3) {
      throw new Error("각각 다른 숫자를 입력하셔야 합니다.");
    }
  }

  play() {}
}

module.exports = App;
