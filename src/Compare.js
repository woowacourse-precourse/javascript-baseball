const Mission = require('./Mission');

class Compare extends Mission {
  constructor(computerNumbers, userNumbers) {
    super();
    this.computerNumbers = String(computerNumbers).split(',');
    this.userNumbers = String(userNumbers).split(',');
  }

  getStrikeCount() {
    return this.computerNumbers.reduce((acc, value, index) => {
      if (value === this.userNumbers[index]) return acc + 1;
      return acc;
    }, 0);
  }

  getBallCount() {
    return this.computerNumbers.reduce((acc, value, index) => {
      if (this.userNumbers.includes(value) && value !== this.userNumbers[index])
        return acc + 1;
      return acc;
    }, 0);
  }

  returnConsole(strike, ball) {
    if (strike === 3) {
      this.mission.Console.print(
        '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료'
      );
      return 'clear';
    }
    if (!strike && !ball) {
      this.mission.Console.print('낫싱');
      return 'nothing';
    }
    if (strike && !ball) {
      this.mission.Console.print(`${strike}스트라이크`);
      return 'onlyStrike';
    }

    if (!strike && ball) {
      this.mission.Console.print(`${ball}볼`);
      return 'onlyBall';
    }
    this.mission.Console.print(`${ball}볼 ${strike}스트라이크`);
    return 'strikeBall';
  }

  getResult() {
    return this.returnConsole(this.getStrikeCount(), this.getBallCount());
  }
}

module.exports = Compare;
