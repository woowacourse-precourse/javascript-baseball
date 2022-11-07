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
  compareAnswerAndInput(answer, userInput) {
    const [strike, ball] = this.getStrikeBall(answer, userInput);
    this.printCompareResult(strike, ball);

    if (this.isAnswer(strike, ball)) this.restartGame();
    else this.getInput(answer);
  }
  getStrikeBall(answer, userInput) {
    const result = [0, 0];
    answer = [...answer];
    userInput = [...userInput];

    answer.forEach((value, idx) => {
      if (value === userInput[idx]) result[STRIKE]++;
      else if (userInput.includes(value) && value != userInput[idx])
        result[BALL]++;
    });
    return result;
  }

  printCompareResult(strike, ball) {
    if (strike === 0 && ball === 0) MissionUtils.Console.print("낫싱");
    else if (strike === 0 && 1 <= ball && ball <= 3)
      MissionUtils.Console.print(`${ball}볼`);
    else if (1 <= strike && strike <= 2 && ball === 0)
      MissionUtils.Console.print(`${strike}스트라이크`);
    else if (1 <= strike && strike <= 2 && 1 <= ball && ball <= 2)
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    else if (strike === 3 && ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }

  isAnswer(strike, ball) {
    if (strike === 3 && ball === 0) return 1;
    else return 0;
  }
  restartGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
      (userInput) => {
        if (userInput === "1") {
          const answer = this.getAnswer();
          this.getInput(answer);
        } else if (userInput === "2") {
          MissionUtils.Console.close();
        } else {
          throw new Error("유효하지 않은 값이 입력되었습니다.");
        }
      }
    );
  }

  detectInputError(userInput) {
    userInput = this.removeRepeatInputValue(userInput);
    if (this.isInputValueError(userInput))
      throw new Error("유효하지 않은 값이 입력되었습니다.");

    if (userInput.length != 3)
      throw new Error("유효하지 않은 값이 입력되었습니다.");

    return 0;
  }

  isInputValueError(userInput) {
    [...userInput].forEach((value) => {
      if (value < "1" || value > "9") {
        return 1;
      }
    });

    return 0;
  }

  removeRepeatInputValue(userInput) {
    const userInputSet = new Set([...userInput]);
    return [...userInputSet];
  }
}

const game = new App();
game.play();

module.exports = App;
