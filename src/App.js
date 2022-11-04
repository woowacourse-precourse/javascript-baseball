const MissionUtils = require("@woowacourse/mission-utils");

const NUMBER_LENGTH = 3;

class App {
  #computer = [];

  constructor() {
    while (this.#computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#computer.includes(number)) {
        this.#computer.push(number);
      }
    }
  }

  getNumberFromPlayer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) =>
      String(number)
    );
  }

  isValid(number) {
    if (!Number(number)) {
      return false;
    }

    if (number.length !== NUMBER_LENGTH) {
      return false;
    }

    if (number.includes("0")) {
      return false;
    }

    const hasDuplicate = [...number].some((item) => {
      const regex = new RegExp(`[${item}]`, "g");
      return number.match(regex)?.length > 1;
    });

    if (hasDuplicate) {
      return false;
    }

    return true;
  }

  countBall(computerNumber, playerNumber) {
    return playerNumber.reduce((acc, cur) => {
      if (computerNumber.includes(cur)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  countStrike(computerNumber, playerNumber) {
    return playerNumber.reduce((acc, cur, idx) => {
      if (cur === computerNumber[idx]) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  play() {}
}

const app = new App();
app.play();

module.exports = App;
