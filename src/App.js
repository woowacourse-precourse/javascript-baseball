const MissionUtils = require("@woowacourse/mission-utils");
// const validateInput = require("./ValidateInput");
// const getStrikeAndBall = require("./StrikeAndBall");
// const getStrikeAndBallText = require("./StrikeAndBallText");
// const throwError = require("./ThrowError");
// const { 3, "2", "1", 1, 9 } = require("./constants/constantValues");
// const {
//   숫자 야구 게임을 시작합니다.,
//   "숫자를 입력해주세요 : ",
//   END_MESSAGE,
//   "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
// } = require("./constants/messages");

class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.threeRandomNumbers = this.getThreeRandomNumbers();
  }

  play() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.validateInput(input)) {
        this.throwError();
      }

      const [strikeCount, ballCount] = this.getStrikeAndBall(this.threeRandomNumbers, input);
      MissionUtils.Console.print(this.getStrikeAndBallText(strikeCount, ballCount));

      if (strikeCount === 3) {
        this.end();
        return;
      }

      this.play();
    });
  }

  end() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (input) => {
      if (input !== "1" && input !== "2") {
        this.throwError();
      }
      if (input === "1") {
        this.threeRandomNumbers = this.getThreeRandomNumbers();
        this.play();
        return;
      }
      if (input === "2") {
        MissionUtils.Console.close();
        return;
      }
    });
  }

  getThreeRandomNumbers() {
    const threeRandomNumber = new Set();
    while (threeRandomNumber.size < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      threeRandomNumber.add(newNumber);
    }

    return [...threeRandomNumber].join("");
  }

  getBallCount(answer, input) {
    let ballCount = 0;
    input.split("").forEach((eachNumber, index) => {
      if (answer.includes(eachNumber) && answer.indexOf(eachNumber) !== index) {
        ballCount++;
      }
    });

    return ballCount;
  }

  getStrikeCount(answer, input) {
    let strikeCount = 0;
    input.split("").forEach((eachNumber, index) => {
      if (answer.includes(eachNumber) && answer.indexOf(eachNumber) === index) {
        strikeCount++;
      }
    });

    return strikeCount;
  }

  getStrikeAndBall(answer, input) {
    return [this.getStrikeCount(answer, input), this.getBallCount(answer, input)];
  }

  validateInputLength(input) {
    return input.length !== 3;
  }

  validateInputDuplication(input) {
    return new Set(input.split("")).size !== 3;
  }

  validateInputIsNaN(input) {
    let NaN = false;
    input.split("").forEach((eachChar) => {
      if (isNaN(eachChar)) NaN = true;
    });

    return NaN;
  }

  validateInput(input) {
    if (this.validateInputLength(input)) return false;
    if (this.validateInputDuplication(input)) return false;
    if (this.validateInputIsNaN(input)) return false;

    return true;
  }
  getStrikeAndBallText(strike, ball) {
    if (strike === 0 && ball === 0) return "낫싱";
    const output = (ball ? `${ball}볼 ` : ``) + (strike ? `${strike}스트라이크` : ``);

    return output.trim();
  }
  throwError() {
    throw new Error("WRONG_INPUT_ERROR");
  }
}

module.exports = App;
