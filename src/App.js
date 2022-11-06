const MissionUtils = require("@woowacourse/mission-utils");
const wRandom = MissionUtils.Random;
const wConsole = MissionUtils.Console;

class App {
  constructor() {
    this.baseLine = null;
  }

  getBaseLine() {
    return this.baseLine;
  }

  setBaseLine() {
    let nextBaseLine = new Set();
    while (nextBaseLine.size < 3) {
      nextBaseLine.add(wRandom.pickNumberInRange(1, 9));
    }
    nextBaseLine = Array.from(nextBaseLine);
    this.baseLine = nextBaseLine;
  }

  inputToTestData(input) {
    if (input.length != 3) throw new Error();
    let data = input.split("").map((num) => {
      if (isNaN(num)) throw new Error();
      return parseInt(num);
    });
    if (new Set(data).size != 3) throw new Error();
    return data;
  }

  compare(testCase) {
    const baseLine = this.getBaseLine();
    let ball = 0;
    let strike = 0;
    testCase.map((num, i) => {
      if (baseLine.includes(num)) {
        baseLine[i] === num ? strike++ : ball++;
      }
    });
    let text = "";
    if (ball != 0) text += `${ball}볼`;
    if (strike != 0) text += `${text != "" ? " " : ""}${strike}스트라이크`;
    if (text === "") text = "낫싱";
    wConsole.print(text);
    return strike === 3;
  }

  continueAnswer(input) {
    switch (input) {
      case "1":
        this.setBaseLine();
        this.progress();
        break;
      case "2":
        break;
      default:
        throw new Error();
    }
  }

  continueQuestion() {
    wConsole.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        this.continueAnswer(input);
      }
    );
  }

  nextProgress(end) {
    if (end) {
      wConsole.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.continueQuestion();
    } else {
      this.progress();
    }
  }

  progress() {
    wConsole.readLine("숫자를 입력해주세요. : ", (input) => {
      const testCase = this.inputToTestData(input);
      const end = this.compare(testCase);
      this.nextProgress(end);
    });
  }

  play() {
    this.setBaseLine();
    wConsole.print("숫자 야구 게임을 시작합니다.");

    try {
      this.progress();
    } catch (error) {
      throw new Error();
    }
  }
}

module.exports = App;
