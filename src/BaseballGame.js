const { Random } = require('@woowacourse/mission-utils');
const { BASEBALL } = require('./constants/Constants');

class BaseballGame {
  #answerNumber = [];

  constructor() {
    this.getAnswer();
  }

  setAnswerNumber(answerNumber) {
    this.#answerNumber = answerNumber;
  }

  getAnswer() {
    const ANSWER = [];
    while (ANSWER.length < BASEBALL.NUMBER_LENGTH) {
      const NUMBER = this.getRandomNumber();
      if (!ANSWER.includes(NUMBER)) {
        ANSWER.push(NUMBER);
      }
    }
    this.setAnswerNumber(ANSWER);
  }

  getRandomNumber() {
    return Random.pickNumberInRange(BASEBALL.NUMBER_START, BASEBALL.NUMBER_END);
  }

  isThreeStrike(userNumberArray) {
    return userNumberArray.toString() === this.#answerNumber.toString();
  }

  getHint(userNumberArray) {
    const STRIKE = this.getStrikes(userNumberArray);
    const BALL = this.getBalls(userNumberArray);
    const HINT_MESSAGE = this.getHintMessage(BALL, STRIKE);
    return HINT_MESSAGE;
  }

  getHintMessage(ball, strike) {
    let hintMessage = '';
    if (ball > 0) hintMessage += `${ball}볼`;
    if (ball > 0 && strike > 0) hintMessage += ' ';
    if (strike > 0) hintMessage += `${strike}스트라이크`;
    if (ball === 0 && strike === 0) hintMessage += '낫싱';
    return hintMessage;
  }

  getStrikes(userNumberArray) {
    let strike = 0;
    userNumberArray.forEach((userNumber, idx) => {
      if (userNumber === this.#answerNumber[idx]) {
        strike += 1;
      }
    });
    return strike;
  }

  getBalls(userNumberArray) {
    let ball = 0;
    userNumberArray.forEach((userNumber, idx) => {
      const INCLUDES_INDEX = this.#answerNumber.indexOf(userNumber);
      if (INCLUDES_INDEX > 0 && INCLUDES_INDEX !== idx) {
        ball += 1;
      }
    });
    return ball;
  }
}

module.exports = BaseballGame;
