import User from '../models/User.js';
import Computer from '../models/Computer.js';
import InputView from '../views/InputView.js';
import Counter from '../models/Counter.js';
import OutputView from '../views/OutputView.js';

class Game {
  constructor() {
    OutputView.printStartingMessage();
    this.createInstance().dataInit();
  }

  createInstance() {
    this.user = new User();
    this.computer = new Computer();
    this.inputView = new InputView();
    this.counter = new Counter();

    return this;
  }

  dataInit() {
    this.computer.setAnswer();
    this.computerAnswerArray = this.computer.getAnswer();
    this.inputView.setCurrentQuestionMessage(this.inputView.question.answerMessage);
    this.counter.resetStrikeAndBall();

    return this;
  }

  playGame() {
    this.inputView.startQuiz(answer => {
      this.user.setAnswerString(answer);

      if (this.counter.checkGameMode(this.inputView)) {
        this.gameMode();
      } else {
        this.choiceMode();
      }
    });
  }

  gameMode() {
    this.user.checkAnswer();
    this.counter.checkGameResult({
      computerAnswerArray: this.computerAnswerArray,
      userAnswerArray: this.user.getAnswerArray(),
      inputView: this.inputView,
    });
    this.playGame();
  }

  choiceMode() {
    if (this.counter.isRestart(this.user.getAnswerString())) {
      this.dataInit().playGame();
    } else {
      this.endGame();
    }
  }

  endGame() {
    this.inputView.closeConsole();
    OutputView.printEndingMessage();
  }
}

export default Game;
