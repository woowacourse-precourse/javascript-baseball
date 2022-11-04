import MissionUtils from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import User from './User.js';
import Game from './Game.js';

class App {
  constructor() {
    this.isGameRun = true;
  }

  startMessagePrint() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  async play() {
    this.startMessagePrint();
    this.computer = new Computer();
    this.user = new User();

    await this.runGame();
  }

  async runGame() {
    while (this.isGameRun) {
      await this.user.enterAnswer();
      this.user.convertStringToNum();
      this.user.convertNumToArray();
      if (!this.user.checkUserInput()) {
        throw new Error('잘못된 입력 값입니다.');
      }
      this.game = new Game();
      this.game.countBall(this.computer.getter(), this.user.getter());
      this.game.countStrike(this.computer.getter(), this.user.getter());
      this.game.printResultMessage();
      this.isGameRun = this.game.checkGameRun();
      if (!this.isGameRun) {
        this.isGameRun = this.game.checkRestart();
      }
    }
  }
}

const app = new App();
app.play();

export default App;
