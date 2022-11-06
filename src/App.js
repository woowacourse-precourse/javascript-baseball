const MissionUtils = require("@woowacourse/mission-utils");

const NUMBER_LENGTH = 3;

class App {
  constructor() {}

  printGameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  setComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getNumberFromPlayer() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
        resolve(String(number));
      });
    });
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

  printHint(numberOfBall, numberOfStrike) {
    let hint = "";

    if (numberOfBall) {
      hint += `${numberOfBall}볼`;
    }

    if (numberOfStrike) {
      if (hint) {
        hint += " ";
      }
      hint += `${numberOfStrike}스트라이크`;
    }

    return hint ? hint : "낫싱";
  }

  printPlayerWinGame() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  askRestartOrTerminate() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        (number) => {
          resolve(number);
        }
      );
    });
  }

  play() {}
}

const app = new App();
app.play();

module.exports = App;
