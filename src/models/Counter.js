import OutputView from '../views/OutputView.js';
import Message from './Message.js';

const RESTART = '1';

class Counter {
  getStrikeAndBall() {
    return [this.strike, this.ball];
  }

  checkGameMode(inputView) {
    return inputView.question.currentMessage === inputView.question.answerMessage;
  }

  checkGameResult({ computerAnswerArray, userAnswerArray, inputView }) {
    this.resetStrikeAndBall()
      .countResult(computerAnswerArray, userAnswerArray)
      .printResultMessage()
      .checkEndGame(inputView);

    return this;
  }

  resetStrikeAndBall() {
    this.strike = 0;
    this.ball = 0;

    return this;
  }

  countResult(computerAnswerArray, userAnswerArray) {
    computerAnswerArray.forEach((computerValue, i) => {
      if (computerValue === userAnswerArray[i]) {
        this.strike += 1;
      } else if (userAnswerArray.includes(computerValue)) {
        this.ball += 1;
      }
    });

    return this;
  }

  printResultMessage() {
    this.message = new Message();
    this.message
      .isNothing(this.strike, this.ball)
      .isOnlyBall(this.strike, this.ball)
      .isOnlyStrike(this.strike, this.ball)
      .isBallAndStrike(this.strike, this.ball);

    OutputView.printScoreMessage(this.message.getMessage());

    return this;
  }

  checkEndGame(inputView) {
    if (this.strike === 3) {
      OutputView.printThreeStrikeMessage();
      inputView.setCurrentQuestionMessage(inputView.question.choiceMessage);
    }

    return this;
  }

  isRestart(answerString) {
    return RESTART === answerString;
  }
}

export default Counter;
