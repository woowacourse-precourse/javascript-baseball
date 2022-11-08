const MissionUtils = require("@woowacourse/mission-utils");

class ContextualHints {
  constructor(computerNum, playerNum) {
    this.computerNum = computerNum;
    this.playerNum = playerNum;
    this.NumOfSamePosition = playerNum
      ?.split("")
      .filter((num, index) => +num === +computerNum[index]).length;
    this.NO_STRIKE = 0;
    this.ONE_STRIKE = 1;
    this.TWO_STRIKE = 2;
    this.THREE_STRIKE = 3;
  }

  HowManyEqualNum() {
    const isSame = this.playerNum
      .split("")
      .map((num) => this.computerNum.includes(+num));
    return isSame.filter((value) => Boolean(value)).length;
  }

  getContextualHints() {
    if (this.NumOfSamePosition === this.NO_STRIKE) {
      switch (this.HowManyEqualNum(this.NumOfSamePosition, this.computerNum)) {
        case 0:
          MissionUtils.Console.print("낫싱");
          break;
        case 1:
          MissionUtils.Console.print("1볼");
          break;
        case 2:
          MissionUtils.Console.print("2볼");
          break;
        case 3:
          MissionUtils.Console.print("3볼");
          break;
      }
    }
    if (this.NumOfSamePosition === this.ONE_STRIKE) {
      switch (
        this.HowManyEqualNum(this.NumOfSamePosition, this.computerNum) -
        this.ONE_STRIKE
      ) {
        case 0:
          MissionUtils.Console.print("1스트라이크");
          break;
        case 1:
          MissionUtils.Console.print("1볼 1스트라이크");
          break;
        case 2:
          MissionUtils.Console.print("2볼 1스트라이크");
          break;
      }
    }
    if (this.NumOfSamePosition === this.TWO_STRIKE) {
      MissionUtils.Console.print("2스트라이크");
    }
    if (this.NumOfSamePosition === this.THREE_STRIKE) {
      MissionUtils.Console.print("3스트라이크");
      console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  }
}

module.exports = ContextualHints;
