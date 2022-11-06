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

  compareNumber(computer, player) {}

  isValidNumber(number) {}

  start(randomNumber) {
    let playerNumber;

    MissionUtils.Console.readLine(
      "숫자 야구 게임을 시작합니다.",
      (inputNumber) => {
        console.log(`숫자를 입력해주세요 : ${inputNumber}`);
        playerNumber = Array.from(inputNumber);
      }
    );
    MissionUtils.Console.close();

    this.compareNumber(randomNumber, playerNumber);
  }

  over() {}
}

module.exports = Game;
