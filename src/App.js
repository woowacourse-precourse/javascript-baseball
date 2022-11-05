const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #userInput;
  #answer;
  #correct = false;
  #finish = false;

  startMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  pickNumber() {
    const computer = [];
    while (computer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }

    this.#answer = computer.join("");
  }

  checkLength(input) {
    if (input.length === 3) return true;
    else return false;
  }

  checkIsNumber(input) {
    if (isNaN(Number(input))) return false;
    else return true;
  }

  checkDuplicate(input) {
    for (let i = 0; i < input.length; i++) {
      if (input.indexOf(input[i]) !== i) return false;
    }
    return true;
  }

  checkInput(input) {
    if (!this.checkLength(input)) throw "입력 길이 오류";
    if (!this.checkIsNumber(input)) throw "숫자가 아닌 입력";
    if (!this.checkDuplicate(input)) throw "중복 숫자 존재";
  }

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.#userInput = input;
    });
    console.log("숫자 입력값 : ", this.#userInput);
  }

  countStrike(answer, input) {
    const answerArr = answer.split("");
    const strike = answerArr.reduce(
      (acc, curr, idx) => acc + (curr === input[idx]),
      0
    );
    return strike;
  }

  countBall(answer, input) {
    const answerArr = answer.split("");
    const ball = answerArr.reduce((acc, curr, idx) => {
      const index = input.indexOf(curr);
      return acc + (index !== -1 && index !== idx);
    }, 0);
    return ball;
  }

  compareInputAnswer(answer, input) {
    const strike = this.countStrike(answer, input);
    const ball = this.countBall(answer, input);
    const ballHint = ball > 0 ? `${ball}볼` : "";
    const strikeHint = strike > 0 ? `${strike}스트라이크` : "";

    this.checkNothing(strike, ball);
    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.#correct = true;
    }
    MissionUtils.Console.print(`${ballHint} ${strikeHint}`.trim());
  }

  checkNothing(strike, ball) {
    if (strike === 0 && ball === 0) MissionUtils.Console.print("낫싱");
  }

  game() {
    this.startMessage();
    this.pickNumber();
    while (!this.#correct) {
      this.getUserInput();
      this.checkInput(this.#userInput);
      this.compareInputAnswer(this.#answer, this.#userInput);
    }
  }

  askRestart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => this.checkRestartInput(input)
    );
  }

  checkRestartInput(input) {
    console.log("재시작 입력 : ", input);
    if (!["1", "2"].includes(input)) throw "잘못된 입력값입니다.";
    if (input === "2") this.#finish = true;
  }

  play() {
    while (!this.#finish) {
      this.game();
      this.askRestart();
    }
  }
}

module.exports = App;
