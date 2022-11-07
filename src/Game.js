const MissionUtils = require("@woowacourse/mission-utils");

class Game {
  constructor() {
    this.computer = [];
  }

  start(randomNumber) {
    let playerNumber;
    let insertingNumber = true;
    let isContinue = true;

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

    isContinue = this.over();

    return isContinue;
  }

  over() {
    let restart;

    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (inputNumber) => {
        restart = inputNumber;
        console.log(`${inputNumber}`);
      }
    );
    MissionUtils.Console.close();

    if (restart === 1) {
      return true;
    } else if (restart === 2) {
      throw new Error("게임 종료");
    }
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

  checkingResult(computer, player) {
    let result = [0, 0];

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

    this.displayResult(result);

    return result[0] === 3 ? false : true;
  }

  displayResult(result) {
    if (result[1] > 0 && result[0] > 0) {
      MissionUtils.Console.print(result[1] + "볼 " + result[0] + "스트라이크");
    } else if (result[0] > 0) {
      MissionUtils.Console.print(result[0] + "스트라이크");
    } else if (result[1] > 0) {
      MissionUtils.Console.print(result[1] + "볼 ");
    } else {
      MissionUtils.Console.print("낫싱");
    }
  }

  compareNumber(computer, player, result) {
    let score = result;

    if (computer[0] === player[0]) {
      if (computer[1] === player[1]) {
        score[0] = score[0] + 1;
      } else {
        score[1] = score[1] + 1;
      }
    }

    return result;
  }

  isValidNumber(number) {
    const isNum = !isNaN(number);
    const checkLength = Array.from(number + "").length === 3;

    return isNum && checkLength;
  }
}

module.exports = Game;
