const MissionUtils = require("@woowacourse/mission-utils");

const MESSAGE = {
  GAME_START: "숫자 야구 게임을 시작합니다.",
  IM_GAME: "숫자를 입력해주세요 :",
  GAME_OVER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  REGAME: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요 :",
  GAME_CLOSE: "게임을 종료합니다.",

  ERROR: {
    TYPE: "정수 숫자를 입력하셔야 합니다.",
    LENGTH: "숫자 3개만 입력하셔야 합니다.",
    RANGE: "1~9사이의 숫자 3개를 입력하셔야 합니다.",
    DUPLICATE: "각각 다른 숫자를 입력하셔야 합니다.",
    VALUE: "1또는 2를 입력하셔야 합니다.",
  },
};

class App {
  constructor() {
    this.answerNumbers;
  }

  play() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
    this.answerNumbers = this.getRandomNumbers();
    this.getUserInput();
  }

  getUserInput() {
    MissionUtils.Console.readLine(`${MESSAGE.IM_GAME}`, (userInput) => {
      this.checkValid(userInput);
      this.checkResult(this.getStats(userInput, this.answerNumbers));
    });
  }

  checkResult(stat) {
    if (stat.strike === 3) {
      MissionUtils.Console.print(`${stat.strike}스트라이크\n${MESSAGE.GAME_OVER}`);
      this.askRestart();
    } else {
      MissionUtils.Console.print(this.getHint(stat));
      this.getUserInput();
    }
  }

  askRestart() {
    MissionUtils.Console.readLine(`${MESSAGE.REGAME}`, (userInput) => {
      this.checkRestart(userInput);
    });
  }

  checkRestart(userInput) {
    if (userInput === "1") {
      this.answerNumbers = this.getRandomNumbers();
      this.getUserInput();
    } else if (userInput === "2") {
      MissionUtils.Console.print(MESSAGE.GAME_CLOSE);
      MissionUtils.Console.close();
      return;
    } else {
      throw new Error(`${MESSAGE.ERROR.VALUE}\n${MESSAGE.GAME_CLOSE}`);
    }
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
      throw new Error(MESSAGE.ERROR.TYPE);
    }

    if (!(userInput.length === 3)) {
      throw new Error(MESSAGE.ERROR.LENGTH);
    }

    if (userInput.includes("0") || Number(userInput) < 0) {
      throw new Error(MESSAGE.ERROR.RANGE);
    }

    if (new Set(userInput).size !== 3) {
      throw new Error(MESSAGE.ERROR.DUPLICATE);
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
}

module.exports = App;
