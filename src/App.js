const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("./constants");
class App {
  constructor() {
    this.computerNum = "";
    this.userNumber = "";
    this.checkGameEnd = false;
  }
  play() {
    this.print(MESSAGE.MESSAGES.start);
    this.computerNum = this.getComputerNum();
    this.userNum = this.getUserNum();
    while (!this.checkGameEnd) {
      const message = this.getCompareResult(this.computerNum, this.userNum);
      this.print(message);
      if (message === "3스트라이크") {
        this.checkGameEnd = true;
        this.print(MESSAGE.MESSAGES.correct);
      }
    }
  }
  print(message) {
    MissionUtils.Console.print(message);
  }
  getComputerNum() {
    let computerNumArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerNumArr.join("");
  }
  getUserNum() {
    let userAnswer;
    MissionUtils.Console.readLine(MESSAGE.MESSAGES.input, (answer) => {
      this.print(MESSAGE.MESSAGES.input + answer);
      if (!this.checkValidUserNumber(answer)) {
        throw new Error(MESSAGE.MESSAGES.error);
      }
      userAnswer = answer;
    });
    return userAnswer;
  }
  checkValidUserNumber(answer) {
    const userNumberSet = new Set();
    [...answer].forEach((string) => userNumberSet.add(string));
    if (userNumberSet.size !== 3) return false;
    if (userNumberSet.has("0")) return false;
    return true;
  }
  getCompareResult(computerNum, userNum) {
    const computerArr = [...computerNum];
    const userArr = [...userNum];
    const allScore = this.getAllScore(computerArr, userArr);
    const strikeScore = this.getStrikeScore(computerArr, userArr);
    const ballScore = allScore - strikeScore;
    return this.getStringResult(strikeScore, ballScore);
  }
  getAllScore(computerArr, userArr) {
    let allScore = 0;
    computerArr.forEach((num) => {
      if (userArr.includes(num)) {
        allScore += 1;
      }
    });
    return allScore;
  }
  getStrikeScore(computerArr, userArr) {
    let strikeScore = 0;
    computerArr.forEach((num, idx) => {
      if (num === userArr[idx]) {
        strikeScore += 1;
      }
    });
    return strikeScore;
  }
  getStringResult(strikeScore, ballScore) {
    if (strikeScore + ballScore === 0) return "낫싱";
    if (strikeScore === 0) return `${ballScore}볼`;
    if (ballScore === 0) return `${strikeScore}스트라이크`;
    return `${ballScore}볼 ${strikeScore}스트라이크`;
  }
}
const app = new App();
app.play();
module.exports = App;
