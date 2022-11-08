const Message = require('./Message.js');

const RESTART = '1';
const END = '2';

class Counter {
  getStrikeAndBall() {
    return [this.strike, this.ball];
  }

  checkGameResult(computerAnswerArray, userAnswerArray) {
    this.resetStrikeAndBall().countResult(computerAnswerArray, userAnswerArray);

    return this.isRunningGame();
  }

  resetStrikeAndBall() {
    this.strike = 0;
    this.ball = 0;

    return this;
  }

  countResult(computerAnswerArray, userAnswerArray) {
    this.strike = this.countStrike(computerAnswerArray, userAnswerArray);
    this.ball = this.countBall(computerAnswerArray, userAnswerArray);

    return this;
  }

  countStrike(computerAnswerArray, userAnswerArray) {
    return computerAnswerArray.filter(this.checkSameValueInSamePlace, {
      userAnswerArray,
    }).length;
  }

  checkSameValueInSamePlace(computerAnswerValue, i) {
    return this.userAnswerArray.indexOf(computerAnswerValue) === i;
  }

  countBall(computerAnswerArray, userAnswerArray) {
    return computerAnswerArray.filter(this.checkSameValueInDifferentPlace, {
      userAnswerArray,
    }).length;
  }

  checkSameValueInDifferentPlace(computerAnswerValue, i) {
    return (
      this.userAnswerArray.includes(computerAnswerValue) &&
      this.userAnswerArray.indexOf(computerAnswerValue) !== i
    );
  }

  printResultMessage() {
    this.message = new Message();
    this.message
      .isNothing(this.strike, this.ball)
      .isOnlyBall(this.strike, this.ball)
      .isOnlyStrike(this.strike, this.ball)
      .isBallAndStrike(this.strike, this.ball);

    return this.message.getMessage();
  }

  isRunningGame() {
    return this.strike !== 3;
  }

  checkChoice(answerString) {
    return answerString === RESTART || answerString === END;
  }

  isRestart(answerString) {
    return RESTART === answerString;
  }
}

module.exports = Counter;
