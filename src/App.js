import MissionUtils from '@woowacourse/mission-utils';
import User from './User.js';
import Game from './Game.js';
import Computer from './Computer.js';
import Checker from './Checker.js';

class App {
  message = {
    start: '숫자 야구 게임을 시작합니다.',
    end: '숫자 야구 게임을 종료합니다.',
    error: '잘못된 입력 값입니다.',
  };

  constructor() {
    this.dataInit();
  }

  dataInit() {
    this.user = new User();
    this.game = new Game();
    this.computer = new Computer();
    this.checker = new Checker();
    this.computer.setAnswer();
    this.setGameState(true);
  }

  setGameState(state) {
    this.isGameRun = state;
  }

  async play() {
    this.printAppMessage(this.message.start);

    await this.runGame();

    this.printAppMessage(this.message.end);
  }

  printAppMessage(msg) {
    MissionUtils.Console.print(msg);
  }

  async runGame() {
    while (this.isGameRun) {
      await this.getUserAnswer();
      this.getGameResult();

      if (!this.isGameRun) {
        await this.decideRestartOrEndGame();
      }
    }
  }

  async getUserAnswer() {
    await this.user.enterAnswer();
    this.user.convertNumToArray();
    this.checkUserAnswer();
  }

  checkUserAnswer() {
    this.checker.setter(this.user.getter());

    if (!this.checker.checkUserInput()) {
      throw new Error(this.message.error);
    }
  }

  getGameResult() {
    const comAnswer = this.computer.getter();
    const userAnswer = this.user.getter()[1];

    this.game.setAnswer(comAnswer, userAnswer);
    this.game.countBall();
    this.game.countStrike();
    this.game.printResultMessage();
    this.setGameState(this.game.checkGameRun());
  }

  async decideRestartOrEndGame() {
    await this.game.getRestartOrEndNum();
    this.setGameState(this.game.checkRestartOrEndNum());

    if (this.isGameRun) {
      this.computer.setAnswer();
    }
  }
}

const app = new App();
app.play();

export default App;
