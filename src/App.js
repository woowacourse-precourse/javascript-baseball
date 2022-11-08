const MissionUtils = require("@woowacourse/mission-utils");
// const validateInput = require("./ValidateInput");
// const getStrikeAndBall = require("./StrikeAndBall");
// const getStrikeAndBallText = require("./StrikeAndBallText");
// const throwError = require("./ThrowError");
const { NUMBER_LENGTH, END_INPUT, RESTART_INPUT, MIN_NUMBER, MAX_NUMBER } = require("./constants/constantValues");
const {
  START_MESSAGE,
  INPUT_NUMBER_MESSAGE,
  END_MESSAGE,
  INPUT_RESTART_OR_END_MESSAGE,
} = require("./constants/messages");

class App {
  constructor() {
    MissionUtils.Console.print(START_MESSAGE);
    this.threeRandomNumbers = this.getThreeRandomNumbers();
  }

  play() {
    MissionUtils.Console.readLine(INPUT_NUMBER_MESSAGE, (input) => {
      if (!this.validateInput(input)) {
        this.throwError();
      }

      const [strikeCount, ballCount] = this.getStrikeAndBall(this.threeRandomNumbers, input);
      MissionUtils.Console.print(this.getStrikeAndBallText(strikeCount, ballCount));

      if (strikeCount === NUMBER_LENGTH) {
        this.end();
        return;
      }

      this.play();
    });
  }

  end() {
    MissionUtils.Console.print(END_MESSAGE);
    MissionUtils.Console.readLine(INPUT_RESTART_OR_END_MESSAGE, (input) => {
      if (input !== RESTART_INPUT && input !== END_INPUT) {
        this.throwError();
      }
      if (input === RESTART_INPUT) {
        this.threeRandomNumbers = this.getThreeRandomNumbers();
        this.play();
        return;
      }
      if (input === END_INPUT) {
        MissionUtils.Console.close();
        return;
      }
    });
  }

  getThreeRandomNumbers() {
    const threeRandomNumber = new Set();
    while (threeRandomNumber.size < NUMBER_LENGTH) {
      const newNumber = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
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
    return input.length !== NUMBER_LENGTH;
  }

  validateInputDuplication(input) {
    return new Set(input.split("")).size !== NUMBER_LENGTH;
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
    throw new Error(WRONG_INPUT_ERROR_MESSAGE);
  }
}

module.exports = App;
