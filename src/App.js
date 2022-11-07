const MissionUtils = require("@woowacourse/mission-utils");
const STRIKE = 0;
const BALL = 1;
class App {
  constructor() {}

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const answer = this.getAnswer();
    this.getInput(answer);
  }
  getAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(randomNumber)) {
        answer.push(randomNumber);
      }
    }

    return answer.join("");
  }
  getInput(answer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const isInputError = this.detectInputError(userInput);
      if (!isInputError) {
        this.compareAnswerAndInput(answer, userInput);
      }
    });
  }
  compareAnswerAndInput(answer, userInput) {}
  getStrikeBall(answer, userInput) {}

  printCompareResult(strike, ball) {}

  isAnswer(strike, ball) {}
  restartGame() {}

  detectInputError(userInput) {}

  isInputValueError(userInput) {}

  removeRepeatInputValue(userInput) {}
}

const game = new App();
game.play();

module.exports = App;
