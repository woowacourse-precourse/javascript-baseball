import OutputView from '../views/OutputView.js';
import Computer from '../models/Computer.js';
import Console from '../utils/Console.js';
import Convertor from '../utils/convertor.js';
import Validate from '../models/Validator.js';
import Message from '../models/Message.js';
import InputView from '../views/inputView.js';

const RESTART = '1';

class Game {
  constructor() {
    OutputView.printStartingMessage();
  }

  start() {
    this.computer = new Computer();
    this.computer.setAnswer();
    this.createQuiz();
    this.setGameState(true);
    this.setCurrentQuestionMessage(InputView.question.answerMessage).playGame();
  }

  createQuiz() {
    this.computerAnswerArray = this.computer.getAnswer();

    return this;
  }

  setCurrentQuestionMessage(message) {
    InputView.question.currentMessage = message;
    return this;
  }

  playGame() {
    Console.readline(InputView.question.currentMessage, answer => {
      if (this.isChoiceQuestion()) {
        if (this.isRestart(answer)) {
          this.computer.setAnswer();
          this.createQuiz()
            .setCurrentQuestionMessage(InputView.question.answerMessage)
            .setGameState(true)
            .playGame();

          return this;
        }
        this.endGame();
      } else {
        this.createNumberAndNumberArrayData(answer);

        if (!Validate.checkUserAnswer(this.userAnswer, this.userAnswerArray)) {
          throw new Error('잘못된 입력입니다.');
        }

        this.checkGameResult();
        if (this.isRunningGame) {
          this.playGame();
        } else {
          this.setCurrentQuestionMessage(InputView.question.choiceMessage).playGame();
        }
      }
      return this;
    });
  }

  isChoiceQuestion() {
    return InputView.question.choiceMessage === InputView.question.currentMessage;
  }

  isRestart(answer) {
    return RESTART === answer;
  }

  createNumberAndNumberArrayData(answer) {
    this.userAnswer = Convertor.stringToNumber(answer);
    this.userAnswerArray = Convertor.stringToNumberArray(answer);
  }

  checkGameResult() {
    console.log(this.computerAnswerArray, this.userAnswerArray);
    this.resetStrikeAndBall()
      .countResult()
      .printResultMessage()
      .checkThreeStrike()
      .resetStrikeAndBall();

    return this;
  }

  resetStrikeAndBall() {
    this.strike = 0;
    this.ball = 0;

    return this;
  }

  countResult() {
    this.computerAnswerArray.forEach((computerValue, i) => {
      if (computerValue === this.userAnswerArray[i]) {
        this.strike += 1;
      } else if (this.userAnswerArray.includes(computerValue)) {
        this.ball += 1;
      }
    });

    return this;
  }

  printResultMessage() {
    this.messageModel = new Message();
    this.messageModel
      .isNothing(this.ball, this.strike)
      .isOnlyBall(this.ball, this.strike)
      .isOnlyStrike(this.ball, this.strike)
      .isBallAndStrike(this.ball, this.strike);

    OutputView.printScoreMessage(this.messageModel.getMessage());

    return this;
  }

  checkThreeStrike() {
    if (this.strike === 3) {
      this.setGameState(false);
      OutputView.printThreeStrikeMessage();
    }

    return this;
  }

  setGameState(state) {
    this.isRunningGame = state;

    return this;
  }

  endGame() {
    Console.close();
    OutputView.printEndingMessage();
  }
}

export default Game;
