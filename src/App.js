const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = [];
    this.inputs = [];
    this.utils = MissionUtils;
  }
  generateNumber() {
    return this.utils.Random.pickNumberInRange(1, 9);
  }
  generateAnswer() {
    const visited = Array.from({ length: 10 }, (_) => false);
    const results = [];

    while (results.length < 3) {
      let newNumber = this.generateNumber();

      while (visited[newNumber]) {
        newNumber = this.generateNumber();
      }
      visited[newNumber] = true;
      results.push(newNumber);
    }

    return results;
  }
  isRepeated(inputs) {
    const visited = Array.from({ length: 10 }, (_) => false);
    for (let i = 0; i < inputs.length; i++) {
      const curNum = inputs[i];
      if (visited[curNum]) return true;
      visited[curNum] = true;
    }
    return false;
  }
  validateInput(inputs) {
    //음수나, 9초과의 수가 입력된다면 숫자 길이에서 걸러지기 때문에 별도의 처리를 하지 않았습니다.
    if (inputs.length !== 3) throw new Error("세자리의 수를 입력해주세요.");
    if (isNaN(inputs.join(""))) throw new Error("숫자가 아닙니다.");
    if (this.isRepeated(inputs)) throw new Error("반복되는 숫자가 있습니다.");
  }
  isSameNumber(answer, input) {
    return answer === input;
  }
  compareToAnswer(answers, inputs) {
    const score = { strike: 0, ball: 0 };

    answers.forEach((answer, answerIdx) => {
      inputs.forEach((input, inputIdx) => {
        if (!this.isSameNumber(answer, input)) return;
        // 만약 수가 같을 떄, 인덱스의 값 또한 같다면
        if (this.isSameNumber(answerIdx, inputIdx)) {
          score.strike += 1;
        } else {
          score.ball += 1;
        }
      });
    });
    return score;
  }
  printScore(score) {
    const { strike, ball } = score;
    if (strike === 0 && ball === 0) this.utils.Console.print("낫싱");

    const ballStr = ball > 0 ? `${ball}볼` : "";
    const strikeStr = strike > 0 ? `${strike}스트라이크` : "";

    const str = ballStr + " " + strikeStr;
    this.utils.Console.print(str.trim());
  }
  //아래에서 부터는 유저 시나리오와 관련된 로직
  init() {
    this.answer = this.generateAnswer();
    this.utils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  input() {
    this.utils.Console.readLine("숫자를 입력해주세요: ", (inputs) => {
      this.inputs = inputs.split("").map((v) => parseInt(v));
      this.validateInput(this.inputs);

      return this.compareToAnswer(this.answer, this.inputs);
    });
  }
  process(score) {
    const { strike } = score;
    this.printScore(score);

    if (strike === 3) {
      this.utils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.restart();
    } else {
      this.input();
    }
  }
  restart() {
    this.utils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        if (input === "1") {
          this.play();
        } else if (input === "2") {
          this.utils.Console.print("게임을 종료합니다.");
          return;
        } else {
          throw new Error("예상치 못한 명령어입니다.");
        }
      }
    );
  }
  play() {
    this.init();
    this.process(this.input());
  }
}

module.exports = App;

const app = new App();
app.play();
