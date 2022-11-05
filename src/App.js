const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #userInput;
  #answer;
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
    if (
      this.checkLength(input) &&
      this.checkIsNumber(input) &&
      this.checkDuplicate(input)
    ) {
      return true;
    } else return false;
  }

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.#userInput = input;
    });
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

    MissionUtils.Console.print(`${ballHint} ${strikeHint}`.trim());
    if (strike === 3) this.correctMessage();
  }

  correctMessage() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.#finish = true;
  }

  game() {
    this.startMessage();
    this.pickNumber();
    while (!this.#finish) {
      this.getUserInput();
      if (!this.checkInput(this.#userInput)) throw "잘못된 입력값입니다.";
      this.compareInputAnswer(this.#answer, this.#userInput);
    }
  }

  play() {
    this.game();
  }
}

module.exports = App;
