const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.input;
    this.answer;
    this.hint = {
      ball: 0,
      strike: 0,
      nothing: 0,
    };
  }

  setInput(input) {
    input = input.split("").map((num) => parseInt(num));
    if (!this.isBadInput(input)) {
      this.input = input;
    }
    this.compareInputToAnswer();
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
    if (input.includes(NaN))
      throw new Error("문자를 제외한 숫자만 입력하세요.");
    if (input.includes(0)) throw new Error("1~9 사이의 숫자만 입력하세요.");
    if (!(input.length === 3)) throw new Error("3개의 숫자만 입력하세요.");
    if (!(input.length === new Set(input).size))
      throw new Error("서로 다른 숫자를 입력하세요.");
    return false;
  }

  receiveInputFromConsole() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.setInput(input);
    });
  }

  success() {
    this.print("3스트라이크");
    this.print(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
  }

  resetHint() {
    for (const key in this.hint) {
      this.hint[key] = 0;
    }
  }

  compareInputToAnswer() {
    this.resetHint();
    if (JSON.stringify(this.input) === JSON.stringify(this.answer)) {
      this.success();
    }
    this.input.forEach((num, index) => {
      if (this.answer[index] === num) {
        this.hint["strike"] += 1;
      }
      if (this.answer.includes(num) && this.answer[index] !== num) {
        this.hint["ball"] += 1;
      }
      if (!this.answer.includes(num)) {
        this.hint["nothing"] += 1;
      }
    });
    this.makeHint();
    this.receiveInputFromConsole();
  }

  makeHint() {
    if (this.hint["nothing"] === 3) return this.print("낫싱");
    if (this.hint["strike"] === 0) return this.print(`${this.hint["ball"]}볼`);
    if (this.hint["ball"] === 0)
      return this.print(`${this.hint["strike"]}스트라이크`);
    return this.print(
      `${this.hint["ball"]}볼 ${this.hint["strike"]}스트라이크`
    );
  }

  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    this.setAnswer();
    this.print(this.answer);
    this.receiveInputFromConsole();
  }
}

const app = new App();
app.play();

module.exports = App;
