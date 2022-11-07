const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME_ANNOUNCEMENT_MESSAGE } = require('./constants.js');

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
  let userScore = Score.makeScoreZero();
  return [answer,userScore];
}

function getUserInput() {
}

function checkInput () {
}

function compareNumber () {
}

function getBaseballGameResult () {
}

function checkRestart () {
}

class App {
  play() {
    initialGameSettings();
  }
}

module.exports = App;