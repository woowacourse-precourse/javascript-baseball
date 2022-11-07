const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME_ANNOUNCEMENT_MESSAGE, WRONG_INPUT_ALERT, } = require('./constants.js');

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
}

function getBaseballGameResult () {
}

function checkRestart () {
}

class App {
  play() {
    let answer = initialGameSettings();
    getUserInput(answer);
  }
}

module.exports = App;