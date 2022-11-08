const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("./constants/string.js");
const SETTING = require("./constants/setting.js");

class App {
  constructor() {
    this.answerNumbers;
  }

  play() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
    this.startGame();
  }

  startGame() {
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
    if (stat.strike === SETTING.STRIKE_OUT_COUNT) {
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
    if (userInput === SETTING.RESTART) {
      this.startGame();
    } else if (userInput === SETTING.GAME_CLOSE) {
      this.closeGame();
    } else {
      throw new Error(`${MESSAGE.ERROR.VALUE}\n${MESSAGE.GAME_CLOSE}`);
    }
  }

  closeGame() {
    MissionUtils.Console.print(MESSAGE.GAME_CLOSE);
    MissionUtils.Console.close();
    return;
  }

  getRandomNumbers() {
    const deduplicateRandomNumbers = [];

    while (deduplicateRandomNumbers.length < SETTING.MAX_NUMBER_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(SETTING.FROM_NUMBER, SETTING.TO_NUMBER);
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

    if (!(userInput.length === SETTING.MAX_NUMBER_LENGTH)) {
      throw new Error(MESSAGE.ERROR.LENGTH);
    }

    if (userInput.includes("0") || Number(userInput) < 0) {
      throw new Error(MESSAGE.ERROR.RANGE);
    }

    if (new Set(userInput).size !== SETTING.MAX_NUMBER_LENGTH) {
      throw new Error(MESSAGE.ERROR.DUPLICATE);
    }
  }

  getStats(userInput, answerNumbers) {
    const userNumbers = [...userInput].map((el) => Number(el));
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
