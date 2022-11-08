const { RESTART, MSG } = require('./utils/Constant');
const { Console } = require('@woowacourse/mission-utils');
const User = require('./User');
const Computer = require('./Computer');
const ScoreManager = require('./ScoreManager');

// 게임을 진행하는 클래스
class Game {
  constructor() {
    Console.print(MSG.START);
    this.User = new User();
    this.Computer = new Computer();
    this.ScoreManager = new ScoreManager();
  }

  play() {
    this.gameStart();
  }

  gameStart() {
    Console.readLine(MSG.INPUT, (input) => {
      this.User.setInputNums(input);
      this.ScoreManager.calScore(
        this.Computer.getComNums(),
        this.User.getInputNums()
      );
      this.ScoreManager.getUserScoreStr();
      this.ScoreManager.isEndRound() ? this.gameStart() : this.gameResult();
    });
  }

  gameResult() {
    Console.print(MSG.END);
    Console.readLine(MSG.SELECT, (input) => {
      input === RESTART ? this.gameRestart() : this.gameExit();
    });
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

module.exports = Game;
