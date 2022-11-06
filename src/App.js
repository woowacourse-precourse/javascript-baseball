const MissionUtils = require("@woowacourse/mission-utils");
class App {
  randomNumber = [];
  userInputNumber = [];

  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  play() {
    this.makeRandomNumber();
    this.makeUserInputNumber();
  }

  makeRandomNumber() {
    let arr = new Set();

    while (arr.size < 3) {
      arr.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    this.randomNumber = Array.from(arr);
  }

  makeUserInputNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      this.userInputNumber = [...inputNumber].map(Number);
    });
  }
}

module.exports = App;
