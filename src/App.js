const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGES = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "숫자 야구 게임을 종료합니다.",
  input: "숫자를 입력해주세요 : ",
  correct: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  restart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  error: "잘못된 숫자를 입력하여 프로그램을 종료합니다.",
};
class App {
  constructor() {
    this.computerNum = "";
    this.userNumber = "";
  }
  play() {
    this.print(MESSAGES.start);
    this.computerNum = this.getComputerNum();
    this.userNumber = this.getUserNumber();
  }
  print(message) {
    MissionUtils.Console.print(message);
  }
  getComputerNum() {
    let computerNumArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerNumArr.join("");
  }
  getUserNumber() {
    let userAnswer;
    MissionUtils.Console.readLine(MESSAGES.input, (answer) => {
      this.print(MESSAGES.input + answer);
      if (!this.checkValidUserNumber(answer)) {
        throw new Error(MESSAGES.error);
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
}
module.exports = App;
