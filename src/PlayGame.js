const MissionUtils = require("@woowacourse/mission-utils");
const validateInput = require("./ValidateInput");
const { getStrikeAndBall, getStrikeAndBallText } = require("./StrikeAndBall");
const { NUMBER_LENGTH } = require("./constants/ConstantValues");
const { WRONG_INPUT_ERROR_MESSAGE } = require("./constants/Messeages");

function playGame(input) {
  if (!validateInput(input)) {
    throwError();
  }

  const [strikeCount, ballCount] = getStrikeAndBall(this.threeRandomNumbers, input);
  const resultOutput = getStrikeAndBallText(strikeCount, ballCount);

  MissionUtils.Console.print(resultOutput);

  if (strikeCount === NUMBER_LENGTH) {
    this.end();
  }

  this.play();
}

function throwError() {
  MissionUtils.Console.close();
  throw new Error(WRONG_INPUT_ERROR_MESSAGE);
}

module.exports = playGame;
