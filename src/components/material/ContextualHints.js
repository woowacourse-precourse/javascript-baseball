const { Console } = require('@woowacourse/mission-utils');

class ContextualHints {
  constructor(computerNum, playerNum) {
    this.computerNum = computerNum;
    this.playerNum = playerNum;
    this.NumOfSamePosition = playerNum
      ?.split('')
      .filter((num, index) => +num === +computerNum[index]).length;
    this.NO_STRIKE = 0;
    this.ONE_STRIKE = 1;
    this.TWO_STRIKE = 2;
    this.THREE_STRIKE = 3;
    this.NO_BALL = 0;
    this.ONE_BALL = 1;
    this.TWO_BAll = 2;
    this.THREE_BALL = 3;
  }

  HowManyEqualNum() {
    const isSame = this.playerNum
      .split('')
      .map((num) => this.computerNum.includes(+num));
    return isSame.filter((value) => Boolean(value)).length;
  }

  getContextualHints() {
    if (this.NumOfSamePosition === this.NO_STRIKE) {
      switch (this.HowManyEqualNum()) {
        case this.NO_BALL:
          Console.print('낫싱');
          break;
        case this.ONE_BALL:
          Console.print('1볼');
          break;
        case this.TWO_BAll:
          Console.print('2볼');
          break;
        case this.THREE_BALL:
          Console.print('3볼');
          break;
      }
    }
    if (this.NumOfSamePosition === this.ONE_STRIKE) {
      switch (this.HowManyEqualNum() - this.ONE_STRIKE) {
        case this.NO_BALL:
          Console.print('1스트라이크');
          break;
        case this.ONE_BALL:
          Console.print('1볼 1스트라이크');
          break;
        case this.TWO_BAll:
          Console.print('2볼 1스트라이크');
          break;
      }
    }
    if (this.NumOfSamePosition === this.TWO_STRIKE) {
      Console.print('2스트라이크');
    }
    if (this.NumOfSamePosition === this.THREE_STRIKE) {
      Console.print('3스트라이크');
      return this.THREE_STRIKE;
    }
  }
}

module.exports = ContextualHints;
