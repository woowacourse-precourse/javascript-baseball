const Mission = require('./Mission');

class GameInitMessage extends Mission {
  constructor() {
    super();
  }

  initPrint() {
    this.mission.Console.print('숫자 야구 게임을 시작합니다.');
  }
}

module.exports = GameInitMessage;
