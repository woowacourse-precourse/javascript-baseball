const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGES } = require("./constants");

class App {
  constructor() {
    this.computerNum = "";
    this.checkGameEnd = false;
  }

  initializeGame() {
    this.computerNum = this.getComputerNum();
    this.checkGameEnd = false;
  }

  play() {
    Console.print(MESSAGES.start);
    this.playMainGame();
  }

  playMainGame() {
    this.initializeGame();
    while (!this.checkGameEnd) {
      const resultMessage = this.getCompareResult(
        this.computerNum,
        this.getUserNum()
      );
      Console.print(resultMessage);
      if (resultMessage === "3스트라이크") {
        this.checkGameEnd = true;
        Console.print(MESSAGES.end);
      }
    }
    Console.print(MESSAGES.restart);
    this.checkRestart(this.getRestartAnswer());
  }

  checkRestart(answer) {
    if (answer === "1") {
      Console.print(answer);
      this.playMainGame();
      return;
    }
    Console.print(MESSAGES.exit);
    Console.close();
  }

  getComputerNum() {
    const numSet = new Set();
    while (numSet.size !== 3) {
      numSet.add(Random.pickNumberInRange(1, 9));
    }
    return [...numSet].join("");
  }

  getUserNum() {
    let userAnswer;
    Console.readLine(MESSAGES.input, (answer) => {
      Console.print(MESSAGES.feedback(answer));
      if (!this.checkvalidUserNum(answer)) {
        throw new Error(MESSAGES.numError);
      }
      userAnswer = answer;
    });
    return userAnswer;
  }

  checkvalidUserNum(answer) {
    const userNumSet = new Set();
    [...answer].forEach((string) => userNumSet.add(string));
    if (userNumSet.size !== 3) {
      return false;
    }
    return !userNumSet.has("0");
  }

  getRestartAnswer() {
    let restartAnswer;
    Console.readLine(MESSAGES.restart, (answer) => {
      if (!this.checkValidRestartAnswer(answer)) {
        Console.close();
        throw new Error(MESSAGES.restartError);
      }
      restartAnswer = answer;
    });
    return restartAnswer;
  }

  checkValidRestartAnswer(answer) {
    return answer === "1" || answer === "2";
  }

  getCompareResult(computerNum, userNum) {
    const allScore = this.getAllScore(computerNum, userNum);
    const strikeScore = this.getStrikeScore(computerNum, userNum);
    const ballScore = allScore - strikeScore;
    return this.getResultString(strikeScore, ballScore);
  }

  getAllScore(computerNum, userNum) {
    let allScore = 0;
    [...computerNum].forEach((num) => {
      if ([...userNum].includes(num)) {
        allScore += 1;
      }
    });
    return allScore;
  }

  getStrikeScore(computerNum, userNum) {
    let strikeScore = 0;
    [...computerNum].forEach((num, index) => {
      if (num === [...userNum][index]) {
        strikeScore += 1;
      }
    });
    return strikeScore;
  }

  getResultString(strikeScore, ballScore) {
    if (strikeScore + ballScore === 0) return "낫싱";
    if (strikeScore === 0) return `${ballScore}볼`;
    if (ballScore === 0) return `${strikeScore}스트라이크`;
    return `${ballScore}볼 ${strikeScore}스트라이크`;
  }
}

module.exports = App;
