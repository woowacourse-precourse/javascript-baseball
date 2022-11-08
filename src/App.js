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

  getStats(userInput, answerNumbers) {
    const userNumbers = userInput.split("").map((el) => Number(el));
    const stat = {
      ball: 0,
      strike: 0,
    };

    userNumbers.forEach((userNumber, userNumberIndex) => {
      if (answerNumbers.includes(userNumber)) {
        userNumber === answerNumbers[userNumberIndex] ? (stat.strike += 1) : (stat.ball += 1);
      }
    });

    return stat;
  }

  getHint(stat) {
    let hintMessage = "";
    if (stat.ball === 0 && stat.strike === 0) hintMessage += "낫싱";
    else if (stat.ball > 0 && stat.strike > 0) hintMessage += `${stat.ball}볼 ${stat.strike}스트라이크`;
    else if (stat.strike === 0) hintMessage += `${stat.ball}볼`;
    else hintMessage += `${stat.strike}스트라이크`;

    return hintMessage;
  }

  play() {}
}

module.exports = App;
