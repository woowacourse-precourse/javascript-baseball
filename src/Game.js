const { RESTART, MSG } = require('./utils/Constant');
const { Console } = require('@woowacourse/mission-utils');
const Validate = require('./utils/Validate');
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

  // 게임 스타트
  play() {
    this.gameStart();
  }

  // readLine을 통해 Input을 받고 게임을 진행하는 함수
  gameStart() {
    Console.readLine(MSG.INPUT, (input) => {
      this.User.setInputNums(input);
      console.log(this.Computer.getComNums());
      this.ScoreManager.calScore(
        this.Computer.getComNums(),
        this.User.getInputNums()
      );
      this.ScoreManager.getUserScoreStr();
      this.ScoreManager.isEndRound() ? this.gameStart() : this.gameResult();
    });
  }

  // 게임 라운드가 종료되면 계속할것인지 물어보는 함수
  gameResult() {
    Console.print(MSG.END);
    Console.readLine(MSG.SELECT, (input) => {
      Validate.isSelectValidate(input);
      input === RESTART ? this.gameRestart() : this.gameExit(input);
    });
  }

  // 게임을 재실행하는 함수
  gameRestart() {
    this.gameDataReset();
    this.gameStart();
  }

  // 게임을 재실행할때 클래스의 데이터를 리셋하는 함수
  gameDataReset() {
    this.User.resetUser();
    this.Computer.resetComputer();
    this.ScoreManager.resetScoreManager();
  }

  // 게임을 재실행할때 클래스의 데이터를 리셋하는 함수
  gameExit() {
    Console.close();
  }
}

module.exports = Game;
