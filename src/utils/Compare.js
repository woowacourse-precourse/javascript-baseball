const Mission = require('./Mission');
const constants = require('../constants/constants');

class Compare extends Mission {
  constructor(computerNumbers, userNumbers) {
    super();
    this.computerNumbers = String(computerNumbers).split(',');
    this.userNumbers = String(userNumbers).split(',');
  }

  getStrikeCount() {
    return this.computerNumbers.reduce((acc, value, index) => {
      if (value === this.userNumbers[index]) {
        return acc + 1;
      }

      return acc;
    }, 0);
  }

  getBallCount() {
    return this.computerNumbers.reduce((acc, value, index) => {
      if (
        this.userNumbers.includes(value) &&
        value !== this.userNumbers[index]
      ) {
        return acc + 1;
      }

      return acc;
    }, 0);
  }

  consoleCompareResult(strike, ball) {
    if (strike === constants.MAX_STRIKE) {
      this.mission.Console.print(
        `${constants.MAX_STRIKE}스트라이크\n${constants.INPUT_SIZE}개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    }

    if (!strike && !ball) {
      this.mission.Console.print('낫싱');
    }

    if (strike && !ball) {
      this.mission.Console.print(`${strike}스트라이크`);
    }

    if (!strike && ball) {
      this.mission.Console.print(`${ball}볼`);
    }

    if (strike && ball) {
      this.mission.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  returnResult(strike) {
    if (strike === constants.MAX_STRIKE) {
      return true;
    }

    return false;
  }

  getResult() {
    const strikeCount = this.getStrikeCount();
    const ballCount = this.getBallCount();
    this.consoleCompareResult(strikeCount, ballCount);
    return this.returnResult(strikeCount);
  }
}

module.exports = Compare;
