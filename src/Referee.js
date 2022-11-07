const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const Player = require('./Player');

const RESTART = '1';
const GAME_OVER = '2';

class Referee {
  constructor() {
    this.computer = new Computer(this);
    this.player = new Player(this);

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  gameStart() {
    this.computer.setRandomValue();
    this.player.setValue();
  }

  gameFinish() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        if (answer === RESTART) return this.gameStart();
        if (answer === GAME_OVER) return MissionUtils.Console.print('숫자 야구 게임을 종료합니다.');
        return this.gameFinish();
      }
    );
  }
}

module.exports = Referee;
