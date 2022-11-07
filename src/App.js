const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME_ANNOUNCEMENT_MESSAGE, WRONG_INPUT_ALERT, GAME_SCORE_WORD } = require('./constants.js');

class Score {
  constructor(ball, strike){
    this.ball = ball;
    this.strike = strike;
  }
  static makeScoreZero(){
    return new Score(0, 0);
  }
};

function initialGameSettings () {
  Console.print(GAME_ANNOUNCEMENT_MESSAGE.GAME_START);
  const answer = Random.pickUniqueNumbersInRange(1, 9, 3);
  return answer;
}

function getUserInput (answer) {
  Console.readLine(GAME_ANNOUNCEMENT_MESSAGE.INPUT, (input) => {
    checkInput(input)
    compareNumber(answer, input)
  })
}

function checkInput (input) {
  let inputArr = input.toString().split('');
  if (!Number(input)) throw WRONG_INPUT_ALERT.NOT_NUMBER
  else if (input < 0) throw WRONG_INPUT_ALERT.NOT_POSITIVE
  else if (inputArr.length !== 3) throw WRONG_INPUT_ALERT.NOT_THREE_DIGITS
  else if (new Set(inputArr).size !== 3) throw WRONG_INPUT_ALERT.NOT_UNIQUE_NUMBER
  else if (inputArr.includes('0')) throw WRONG_INPUT_ALERT.INCLUDES_ZERO
}

function compareNumber (answer, input) {
  let userScore = Score.makeScoreZero();
  let inputArr = input.split('').map(Number);
  inputArr.forEach((input,idx) => {
    if (answer.indexOf(input) === -1) "";
    else if (answer.indexOf(input) === idx) userScore.strike += 1;
    else userScore.ball += 1;
  });

  getBaseballGameResult (answer, userScore)
}

function getBaseballGameResult (answer, userScore) {
  let resultMessage = '';
  if (userScore.ball === 3) return userScore.ball + GAME_SCORE_WORD.BALL;
  else if (userScore.strike === 3) return userScore.strike + GAME_SCORE_WORD.STRIKE;
  else if (userScore.ball === 0 && userScore.strike === 0 ) return GAME_SCORE_WORD.NOTHING;
  if (userScore.ball > 0) resultMessage += (userScore.ball + GAME_SCORE_WORD.BALL);
  if (userScore.strike > 0) resultMessage += (userScore.strike + GAME_SCORE_WORD.STRIKE);
  Console.print(resultMessage)

  userScore.strike === 3 ? checkRestart() : getUserInput(answer);
}

function checkRestart () {
  Console.print(GAME_ANNOUNCEMENT_MESSAGE.GAME_OVER);
  Console.readLine(GAME_ANNOUNCEMENT_MESSAGE.REPLAY, (input) => {
    if (+input === 1) app.play();
    else if (+input === 2) Console.close();
    else throw WRONG_INPUT_ALERT.NOT_ONE_OR_TWO;
  })
}

class App {
  play() {
    let answer = initialGameSettings();
    getUserInput(answer);
  }
}

module.exports = App;