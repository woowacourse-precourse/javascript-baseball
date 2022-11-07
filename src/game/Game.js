const Mission = require('../utils/Mission');
const Computer = require('../input/Computer');
const User = require('../input/User');

class Game extends Mission {
  constructor() {
    super();
  }

  initPrint() {
    this.mission.Console.print('숫자 야구 게임을 시작합니다.');
  }

  start() {
    this.initPrint();
    const computer = new Computer();
    const computerNumbers = computer.getComputerNumbers();
    const user = new User(computerNumbers);
    user.userInputStart();
  }
}

module.exports = Game;
