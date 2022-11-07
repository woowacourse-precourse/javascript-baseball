const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const Player = require('./Player');

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
}

module.exports = Referee;
