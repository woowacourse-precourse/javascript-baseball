import MissionUtils from '@woowacourse/mission-utils';
import User from './User.js';
import Checker from './Checker.js';
import Computer from './Computer.js';
import Game from './Game.js';

class App {
  constructor() {
    this.isGameRun = true;
  }

  async play() {
    this.appStartMessagePrint();
    this.user = new User();
    this.computer = new Computer();
    this.computer.setter();

    await this.runGame();

    this.appEndMessagePrint();
  }

  appStartMessagePrint() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  async runGame() {
    while (this.isGameRun) {
      await this.user.enterAnswer();
      this.user.convertNumToArray();
      this.checker = new Checker();
      this.checker.setter(this.user.getter());
      if (!this.checker.checkUserInput()) {
        throw new Error('잘못된 입력 값입니다.');
      }
      this.game = new Game();
      this.game.countBall(this.computer.getter(), this.user.getter()[1]);
      this.game.countStrike(this.computer.getter(), this.user.getter()[1]);
      this.game.printResultMessage();
      this.isGameRun = this.game.checkGameRun();
      if (!this.isGameRun) {
        await this.game.checkRestart();
        this.isGameRun = this.game.checkRestartNum();
        if (this.isGameRun) {
          this.computer.setter();
        }
      }
    }
  }

  appEndMessagePrint() {
    MissionUtils.Console.print('숫자 야구 게임을 종료합니다.');
  }
}

const app = new App();
app.play();

export default App;
