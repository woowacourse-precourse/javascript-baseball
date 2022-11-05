const MissionUtils = require("@woowacourse/mission-utils");
const checkInput = require("./validation");

class App {
  #userInput;
  #answer;
  #correct;
  #finish;

  startMessage() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  pickNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    this.#answer = computer.join("");
  }

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.#userInput = input;
      MissionUtils.Console.close();
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

    this.checkNothing(strike, ball);
    this.printHint(strike, ball);
    this.checkCorrect(strike);
  }

  checkNothing(strike, ball) {
    if (strike === 0 && ball === 0) MissionUtils.Console.print("낫싱");
  }

  checkCorrect(strike) {
    if (strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.#correct = true;
    }
  }

  printHint(strike, ball) {
    const ballHint = ball > 0 ? `${ball}볼` : "";
    const strikeHint = strike > 0 ? `${strike}스트라이크` : "";

    if (strike > 0 || ball > 0)
      MissionUtils.Console.print(`${ballHint} ${strikeHint}`.trim());
  }

  game() {
    this.pickNumber();
    while (!this.#correct) {
      this.getUserInput();
      checkInput(this.#userInput);
      this.compareInputAnswer(this.#answer, this.#userInput);
    }
  }

  askRestart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        this.checkRestartInput(input);
        MissionUtils.Console.close();
      }
    );
  }

  checkRestartInput(input) {
    if (!["1", "2"].includes(input)) throw "1 또는 2를 입력하세요.";
    if (input === "1") this.#correct = false;
    if (input === "2") this.#finish = true;
  }

  play() {
    this.startMessage();
    while (!this.#finish) {
      this.game();
      this.askRestart();
    }
  }
}

// const app = new App();
// app.play();

module.exports = App;
