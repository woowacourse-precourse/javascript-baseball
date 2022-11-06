const MissionUtils = require("@woowacourse/mission-utils");

class Game {
  constructor() {
    this.computer = [];
  }

  start(randomNumber) {
    let playerNumber;
    let insertingNumber = true;

    while (insertingNumber) {
      MissionUtils.Console.readLine("", (inputNumber) => {
        console.log(`숫자를 입력해주세요 : ${inputNumber}`);
        playerNumber = inputNumber;
      });
      MissionUtils.Console.close();

      if (this.isValidNumber(playerNumber)) {
        var splittedNumber = Array.from(playerNumber + "");

        insertingNumber = this.checkingResult(randomNumber, splittedNumber);
      } else {
        throw new Error("잘못된 입력으로 게임 종료");
      }
    }

    return;
  }

  over() {}

  setRandomNumber() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }

    return this.computer;
  }

  checkingResult(computer, player) {
    let result = [];

    for (
      let computerIndex = 0;
      computerIndex < computer.length;
      computerIndex++
    ) {
      for (let playerIndex = 0; playerIndex < player.length; playerIndex++) {
        result = this.compareNumber(
          [computer[computerIndex], computerIndex],
          [player[playerIndex], playerIndex],
          result
        );
      }
    }

    displayResult(result);

    return result[0] === 3 ? false : true;
  }

  displayResult(result) {}

  compareNumber(computer, player, result) {}

  isValidNumber(number) {
    const isNum = !isNaN(number);
    const checkLength = Array.from(number + "").length === 3;

    return isNum && checkLength;
  }
}

module.exports = Game;
