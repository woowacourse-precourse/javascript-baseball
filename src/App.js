const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNumber();
    this.userInput();
  }

  createRandomNumber() {
    this.computerNumber = [];
    while (this.computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(number)) {
        this.computerNumber.push(number);
      }
    }
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (value) => {
      this.checkValidate(value);
      this.checkAnswer();
    });
  }

  checkValidate(value) {
    if (value.length !== 3) throw "잘못된 입력값 입니다.";
    if (value.includes("0")) throw "잘못된 입력값 입니다.";

    this.userNumber = [...value].map((elem) => parseInt(elem));
    if (this.userNumber.includes(NaN)) throw "잘못된 입력값 입니다.";

    const isDuplicated = this.userNumber.some((elem) => {
      return (
        this.userNumber.indexOf(elem) !== this.userNumber.lastIndexOf(elem)
      );
    });
    if (isDuplicated) throw "잘못된 입력값 입니다.";
  }

  checkAnswer() {
    let strikeNum = 0;
    let ballNum = 0;

    this.userNumber.map((elem, idx) => {
      if (this.computerNumber[idx] === elem) {
        strikeNum++;
      } else {
        this.computerNumber.includes(elem) ? ballNum++ : ballNum;
      }
    });

    this.getResult(strikeNum, ballNum);
  }

  getResult(strikeNum, ballNum) {
    if (strikeNum === 0 && ballNum === 0) {
      MissionUtils.Console.print("낫싱");
    } else if (!ballNum) {
      MissionUtils.Console.print(`${strikeNum}스트라이크`);
    } else {
      MissionUtils.Console.print(`${ballNum}볼 ${strikeNum}스트라이크`);
    }

    if (strikeNum === 3) {
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      this.gameClear();
    } else {
      this.userInput();
    }
  }

  gameClear() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (value) => {
        this.gameResultValidate(value);
      }
    );
  }

  gameResultValidate(value) {
    if (value === "1") {
      app.play();
    } else if (value === "2") {
      MissionUtils.Console.close();
    } else {
      throw "잘못된 입력입니다.";
    }
  }
}
const app = new App();
app.play();
module.exports = App;
