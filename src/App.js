const MissionUtils = require("@woowacourse/mission-utils");
const validateInput = require("./ValidateInput");
const { getStrikeAndBall, getStrikeAndBallText } = require("./StrikeAndBall");

const {
  START_MESSAGE,
  END_MESSAGE,
  INPUT_NUMBER_MESSAGE,
  INPUT_RESTART_OR_END_MESSAGE,
  WRONG_INPUT_ERROR_MESSAGE,
} = require("./constants/Messeages");
const { MIN_NUMBER, MAX_NUMBER, NUMBER_LENGTH, RESTART_INPUT, END_INPUT } = require("./constants/ConstantValues");

class App {
  constructor() {
    MissionUtils.Console.print(START_MESSAGE);
  }

  play() {
    this.threeRandomNumbers = this.drawThreeRandomNumbers();

    this.startPlayerTurn();
  }

  drawThreeRandomNumbers() {
    const threeRandomNumber = new Set();
    while (threeRandomNumber.size < NUMBER_LENGTH) {
      const newNumber = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
      threeRandomNumber.add(newNumber);
    }

    return [...threeRandomNumber].join("");
  }

  startPlayerTurn() {
    MissionUtils.Console.readLine(INPUT_NUMBER_MESSAGE, (input) => {
      if (!validateInput(input)) {
        MissionUtils.Console.close();
        throw new Error(WRONG_INPUT_ERROR_MESSAGE);
      }

      const [strikeCount, ballCount] = getStrikeAndBall(this.threeRandomNumbers, input);
      const resultOutput = getStrikeAndBallText(strikeCount, ballCount);

      MissionUtils.Console.print(resultOutput);

      if (strikeCount === NUMBER_LENGTH) {
        this.endPlayerTurn();
      }
      if (strikeCount !== NUMBER_LENGTH) {
        this.startPlayerTurn();
      }
    });
  }

  endPlayerTurn() {
    MissionUtils.Console.print(END_MESSAGE);
    MissionUtils.Console.readLine(INPUT_RESTART_OR_END_MESSAGE, (input) => {
      if (input !== RESTART_INPUT && input !== END_INPUT) {
        MissionUtils.Console.close();
        throw new Error(WRONG_INPUT_ERROR_MESSAGE);
      }
      if (input === RESTART_INPUT) {
        this.play();
      }
      if (input === END_INPUT) {
        MissionUtils.Console.close();
      }
    });
  }
}

// const app = new App();
// app.play();

module.exports = App;
