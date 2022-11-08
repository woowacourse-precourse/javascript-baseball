const MissionUtils = require("@woowacourse/mission-utils");

class ContextualHints {
  constructor(computerNum, playerNum, GivePlayerHint) {
    this.computerNum = computerNum;
    this.playerNum = playerNum;
    this.NumOfSamePosition = playerNum
      ?.split("")
      .filter((num, index) => +num === +computerNum[index]).length;
    this.NO_STRIKE = 0;
    this.ONE_STRIKE = 1;
    this.TWO_STRIKE = 2;
    this.THREE_STRIKE = 3;
    this.RESTART = "1";
    this.GAVE_OVER = "2";
    this.GivePlayerHint = GivePlayerHint;
  }

  HowManyEqualNum() {
    const isSame = this.playerNum
      .split("")
      .map((num) => this.computerNum.includes(+num));
    return isSame.filter((value) => Boolean(value)).length;
  }

  gameEnd() {
    MissionUtils.Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다. 게임 종료 \n" +
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        console.log(answer);
        if (answer === this.RESTART) {
          const givePlayerHint = new this.GivePlayerHint();
          givePlayerHint.runGame();
        }
        if (answer === this.GAVE_OVER) {
          MissionUtils.Console.print("게임 종료");
          MissionUtils.Console.close();
        }
        if (answer !== this.RESTART && answer !== this.GAVE_OVER) {
          MissionUtils.Console.print(
            "올바르지 않은 값을 입력하여 게임이 종료됩니다."
          );
          MissionUtils.Console.close();
        }
      }
    );
  }

  getContextualHints() {
    if (this.NumOfSamePosition === this.NO_STRIKE) {
      switch (this.HowManyEqualNum()) {
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
      switch (this.HowManyEqualNum() - this.ONE_STRIKE) {
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
      this.gameEnd();
    }
  }
}

module.exports = ContextualHints;
