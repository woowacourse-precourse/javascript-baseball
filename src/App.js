const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.input;
    this.answer;
  }

  setInput(input) {
    input = input.split("").map((num) => parseInt(num));
    if (this.isBadInput(input)) {
      this.close();
    }
    this.input = input;
  }

  setAnswer() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  print(message) {
    MissionUtils.Console.print(message);
  }

  close() {
    MissionUtils.Console.close();
  }

  isBadInput(input) {
    if (input.includes(NaN)) {
      this.print("한글, 영어, 특수문자 등을 제외한 숫자만 입력하세요.");
      return true;
    }
    if (input.includes(0)) {
      this.print("1~9 사이의 숫자만 입력하세요.");
      return true;
    }
  }

  receiveInputFromConsole() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.setInput(input);
    });
  }

  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    this.setAnswer();
    this.receiveInputFromConsole();
  }
}

const app = new App();
app.play();

module.exports = App;
