const MissionUtils = require("@woowacourse/mission-utils");

class Game {
  constructor() {
    this.computer = [];
  }

  setRandomNumber() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }

    return this.computer;
  }

  compareNumber(computer, player) {
    if (this.isValidNumber(player)) {
    } else {
      throw new Error("잘못된 입력으로 게임 종료");
    }
  }

  isValidNumber(number) {
    const isNum = !isNaN(number);
    const checkLength = Array.from(number + "").length === 3;

    return isNum && checkLength;
  }

  start(randomNumber) {
    let playerNumber;

    MissionUtils.Console.readLine(
      "숫자 야구 게임을 시작합니다.",
      (inputNumber) => {
        console.log(`숫자를 입력해주세요 : ${inputNumber}`);
        playerNumber = inputNumber;
      }
    );
    MissionUtils.Console.close();

    this.compareNumber(randomNumber, playerNumber);
  }

  over() {}
}

module.exports = Game;
