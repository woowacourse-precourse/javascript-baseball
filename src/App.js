const MissionUtils = require("@woowacourse/mission-utils");
const getThreeRandomNumbers = require("./ThreeRandomNumbers");
const playGame = require("./PlayGame");
const { END_INPUT, RESTART_INPUT } = require("./constants/ConstantValues");
const {
  START_MESSAGE,
  INPUT_NUMBER_MESSAGE,
  WRONG_INPUT_ERROR_MESSAGE,
  END_MESSAGE,
  INPUT_RESTART_OR_END_MESSAGE,
} = require("./constants/Messeages");

class App {
  constructor() {
    this.threeRandomNumbers = getThreeRandomNumbers();
    MissionUtils.Console.print(START_MESSAGE);
  }

  play() {
    MissionUtils.Console.readLine(INPUT_NUMBER_MESSAGE, playGame.bind(this));
  }

  end() {
    MissionUtils.Console.print(END_MESSAGE);
    MissionUtils.Console.readLine(INPUT_RESTART_OR_END_MESSAGE, this.endGame.bind(this));
  }

  throwError() {
    MissionUtils.Console.close();
    throw new Error(WRONG_INPUT_ERROR_MESSAGE);
  }

  endGame(input) {
    if (input !== RESTART_INPUT && input !== END_INPUT) {
      this.throwError();
    }

    if (input === RESTART_INPUT) {
      this.threeRandomNumbers = getThreeRandomNumbers();
      this.play();
    }
    if (input === END_INPUT) {
      MissionUtils.Console.close();
    }
  }
}

// const app = new App();
// app.play();

module.exports = App;
