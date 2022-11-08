const MissionUtils = require("@woowacourse/mission-utils");
const {
  GAME_ANNOUNCEMENT_MESSAGE,
  WRONG_INPUT_ALERT,
  GAME_SCORE_WORD,
} = require("./constants.js");

class Score {
  constructor(ball, strike) {
    this.ball = ball;
    this.strike = strike;
  }
  static makeScoreZero() {
    return new Score(0, 0);
  }
}

function initialGameSettings() {
  MissionUtils.Console.print(GAME_ANNOUNCEMENT_MESSAGE.GAME_START);
  const answer = [];
  while (answer.length < 3) {
    const ranNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(ranNum)) answer.push(ranNum);
  }

  return answer;
}

function getUserInput(answer) {
  MissionUtils.Console.readLine(GAME_ANNOUNCEMENT_MESSAGE.INPUT, (input) => {
    checkInput(input);
    compareNumber(answer, input);
  });
}

function checkInput(input) {
  let inputArr = input.toString().split("");
  if (isNaN(input) || !Number(input)) throw WRONG_INPUT_ALERT.NOT_NUMBER;
  else if (input < 0) throw WRONG_INPUT_ALERT.NOT_POSITIVE;
  else if (inputArr.length !== 3) {
    throw WRONG_INPUT_ALERT.NOT_THREE_DIGITS;
  } else if (new Set(inputArr).size !== 3)
    throw WRONG_INPUT_ALERT.NOT_UNIQUE_NUMBER;
  else if (inputArr.includes("0")) throw WRONG_INPUT_ALERT.INCLUDES_ZERO;
}

function compareNumber(answer, input) {
  let userScore = Score.makeScoreZero();
  let inputArr = input.split("").map(Number);
  inputArr.forEach((input, idx) => {
    if (answer.indexOf(input) === -1) return;
    else if (answer.indexOf(input) === idx) userScore.strike += 1;
    else userScore.ball += 1;
  });
  getBaseballGameResult(answer, userScore);
}

function getBaseballGameResult(answer, userScore) {
  let resultMessage = "";
  if (userScore.ball === 3)
    resultMessage += userScore.ball + GAME_SCORE_WORD.BALL;
  else if (userScore.ball === 0 && userScore.strike === 0) {
    resultMessage += GAME_SCORE_WORD.NOTHING;
  }

  const messages = [];

  if (userScore.ball > 0) {
    resultMessage += userScore.ball + GAME_SCORE_WORD.BALL;
    messages.push(userScore.ball + GAME_SCORE_WORD.BALL);
  }

  if (userScore.strike > 0) {
    resultMessage += userScore.strike + GAME_SCORE_WORD.STRIKE;
    messages.push(userScore.strike + GAME_SCORE_WORD.STRIKE);
  }
  MissionUtils.Console.print(
    messages.length > 0 ? messages.join(" ") : resultMessage
  );
  userScore.strike === 3 ? checkRestart() : getUserInput(answer);
}

function checkRestart() {
  MissionUtils.Console.print(GAME_ANNOUNCEMENT_MESSAGE.GAME_OVER);
  MissionUtils.Console.readLine(GAME_ANNOUNCEMENT_MESSAGE.REPLAY, (input) => {
    if (+input === 1) {
      app.play();
      return;
    } else if (+input === 2) {
      MissionUtils.Console.close();
      return;
    }
    throw WRONG_INPUT_ALERT.NOT_ONE_OR_TWO;
  });
}

class App {
  play() {
    let answer = initialGameSettings();
    getUserInput(answer);
  }
}

const app = new App();
app.play();

module.exports = App;