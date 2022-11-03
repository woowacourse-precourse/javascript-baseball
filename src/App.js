const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.input;
    this.answer;
  }

  setInput(input) {
    this.input = input.split("").map((num) => parseInt(num));
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

  receiveInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.setInput(input);
    });
  }

  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    this.setAnswer();
    this.receiveInput();
  }
}

const app = new App();
app.play();

module.exports = App;
