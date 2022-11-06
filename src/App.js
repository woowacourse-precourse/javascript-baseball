const MissionUtils = require("@woowacourse/mission-utils");
class App {
  answer;
  constructor() {
    this.answer = [];
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getRandomNum();
    this.getUserAnswer();
  }

  getRandomNum() {
    while (this.answer.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(NUMBER)) {
        this.answer.push(NUMBER);
      }
    }
  }

  getUserAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (
        answer.length !== 3 ||
        [...new Set(answer.split(""))].length !== 3 ||
        !/^\d+$/.test(answer)
      )
        throw new Error();

      const RESULT = this.validateAnswer(answer);
      this.showResult(RESULT);

      if (RESULT.strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.askRetry();
      } else {
        this.getUserAnswer();
      }
    });
  }

  validateAnswer(answer) {
    const RESULT = {
      ball: 0,
      strike: 0,
    };

    const USER_ANSWER = answer.split("");
    USER_ANSWER.forEach((number, index) => {
      if (this.answer[index] === +number) RESULT.strike += 1;
      else if (this.answer.includes(+number)) RESULT.ball += 1;
    });

    return RESULT;
  }

  showResult(result) {
    let result_sentence = [];

    if (result.ball > 0) result_sentence.push(result.ball + "볼");
    if (result.strike > 0) result_sentence.push(result.strike + "스트라이크");
    if (result.ball + result.strike === 0) result_sentence.push("낫싱");

    MissionUtils.Console.print(result_sentence.join(" "));
  }

  askRetry() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
      (answer) => {
        if (answer === "1") {
          this.answer = [];
          this.getRandomNum();
          this.getUserAnswer();
        } else if (answer === "2") {
          MissionUtils.Console.close();
        } else {
          throw new Error();
        }
      },
    );
  }
}

const app = new App();
app.play();

module.exports = App;
