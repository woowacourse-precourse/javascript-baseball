const MissionUtils = require("@woowacourse/mission-utils");
const NumberUtils = require("./Utils/Number");

class App {
  constructor() {
    this.NumberUtil = new NumberUtils();
    this.computerNumber = 0;
  }

  userInputNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      this.NumberUtil.isBaseballNumber(number);
      console.log(this.computerNumber);
      const result = this.compareNumber(number);
      MissionUtils.Console.print(result);
      if (result !== "3스트라이크") {
        this.userInputNumber();
      }
      if (result === "3스트라이크") {
        this.isReStart();
      }
    });
  }

  compareNumber(userNumber) {
    const userNumberArray = this.NumberUtil.NumberToArray(userNumber);
    const computerNumberArray = this.NumberUtil.NumberToArray(
      this.computerNumber
    );
    let ball = 0;
    let strike = 0;
    const total =
      6 - new Set([...userNumberArray, ...computerNumberArray]).size;

    if (total === 0) return `낫싱`;

    for (let index = 0; index < 3; index++) {
      if (userNumberArray[index] === computerNumberArray[index]) {
        strike += 1;
      }
    }
    ball = total - strike;
    if (ball === 0) return `${strike}스트라이크`;
    if (strike === 0) return `${ball}볼`;
    return `${ball}볼 ${strike}스트라이크`;
  }

  isReStart() {
    MissionUtils.Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (number) => {
        number = Number(number);
        if (number === 1) this.game();
        else if (number === 2) MissionUtils.Console.close();
        else throw "1또는 2만 입력해주세요.";
      }
    );
  }

  game() {
    this.computerNumber = this.NumberUtil.getRandomBaseballNumber();
    this.userInputNumber();
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.game();
  }
}

module.exports = App;

const app = new App();
app.play();
