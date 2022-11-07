const { RESTART, MSG } = require('./utils/Constant');
const { Console } = require('@woowacourse/mission-utils');
const asyncLine = require('./utils/ReadLine');
const User = require('./User');
const Computer = require('./Computer');
const ScoreManager = require('./ScoreManager');

// 게임을 진행하는 클래스
class App {
  constructor() {
    this.User = new User();
    this.Computer = new Computer();
    this.ScoreManager = new ScoreManager();
  }

  play() {
    Console.print(MSG.START);
    this.gameStart();
  }

  async gameStart() {
    while (this.ScoreManager.isEndRound()) {
      let targetNum = this.Computer.getComNums();
      let userInput = this.User.getInputNums();

      await this.User.setInputNums(MSG.INPUT, asyncLine);
      this.ScoreManager.calScore(targetNum, userInput);
      this.ScoreManager.getUserScoreStr();
    }
    this.gameResult();
  }

  async gameResult() {
    Console.print(MSG.END);
    let userSelect = await asyncLine(MSG.SELECT);
    userSelect === RESTART ? this.gameRestart() : this.gameExit();
  }

  gameRestart() {
    this.gameDataReset();
    this.gameStart();
  }

  gameDataReset() {
    this.User.resetUser();
    this.Computer.resetComputer();
    this.ScoreManager.resetScoreManager();
  }

  gameExit() {
    Console.close();
  }
}

module.exports = App;
