const MissionUtils = require("@woowacourse/mission-utils");
const CheckConstraints = require("../src/CheckConstraints");

class Player {
  constructor(computer) {
    this.COMPUTER = computer;
  }

  getPlayerInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const checkConstraints = new CheckConstraints();
      checkConstraints.checkConstraints(userInput);

      this.comparePlayerInputWithRadomNumber(userInput);
    });
  }

  comparePlayerInputWithRadomNumber(userInput) {
    this.ball = 0;
    this.strike = 0;

    const USER_INPUT = userInput.split("").map((item) => Number(item));

    this.checkBallOrStrike(USER_INPUT);

    this.showPlayerResult();
  }

  checkBallOrStrike(userInputArray) {
    for (let index = 0; index < this.COMPUTER.length; index++) {
      if (this.COMPUTER[index] === userInputArray[index]) {
        this.strike++;
        continue;
      }

      if (userInputArray.includes(this.COMPUTER[index])) {
        this.ball++;
      }
    }
  }

  showPlayerResult() {
    if (this.strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.close();

      return;
    }

    if (this.ball === 0 && this.strike === 0) {
      MissionUtils.Console.print("낫싱");

      this.getPlayerInput();

      return;
    }

    if (this.ball !== 0 && this.strike !== 0) {
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);

      this.getPlayerInput();

      return;
    }

    if (this.ball !== 0 && this.strike === 0) {
      MissionUtils.Console.print(`${this.ball}볼`);

      this.getPlayerInput();

      return;
    }

    if (this.ball === 0 && this.strike !== 0 && this.strike !== 3) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);

      this.getPlayerInput();
    }
  }
}

module.exports = Player;
