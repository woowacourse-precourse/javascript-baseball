const MissionUtils = require("@woowacourse/mission-utils");
const COMPUTER_NUMBER = [];
let strikeBallCount = [0, 0];
let result = "";

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomComputerNumber();
    this.userInputNumber(COMPUTER_NUMBER);
  }

  randomComputerNumber() {
    while (COMPUTER_NUMBER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUMBER.includes(NUMBER)) {
        COMPUTER_NUMBER.push(NUMBER);
      }
    }
  }

  userInputNumber(COMPUTER_NUMBER) {
    MissionUtils.Console.readLine(
      "숫자를 입력해주세요 : ",
      (userNumberInput) => {
        this.occurredError(userNumberInput);
        this.checkNumbers(COMPUTER_NUMBER, userNumberInput);
      }
    );
  }

  occurredError(userNumberInput) {
    if (userNumberInput.length != 3) {
      throw new Error("숫자는 3자리로 입력해야합니다.");
    }
    if (new Set(userNumberInput).size != 3) {
      throw new Error("서로 다른 숫자여야 합니다");
    }
    if (/[^1-9]/g.test(userNumberInput)) {
      throw new Error("1~9 숫자만 입력해주세요");
    }
  }

  checkNumbers(COMPUTER_NUMBER, userNumberInput) {
    for (
      let userNumberCipher = 0;
      userNumberCipher < userNumberInput.length;
      userNumberCipher++
    ) {
      this.countStrikeBall(COMPUTER_NUMBER, userNumberInput, userNumberCipher);
    }
    this.strikeBallResult(strikeBallCount);
  }

  countStrikeBall(COMPUTER_NUMBER, userNumberInput, userNumberCipher) {
    const COMPARE = userNumberInput.indexOf(COMPUTER_NUMBER[userNumberCipher]);
    if (COMPARE > -1 && COMPARE === userNumberCipher) {
      strikeBallCount[0] += 1;
    } else if (COMPARE > -1 && COMPARE != userNumberCipher) {
      strikeBallCount[1] += 1;
    }
  }

  strikeBallResult(strikeBallCount) {
    if (strikeBallCount[0] > 0 && strikeBallCount[1] == 0) {
      result = strikeBallCount[0] + "스트라이크";
    } else if (strikeBallCount[1] > 0 && strikeBallCount[0] == 0) {
      result = strikeBallCount[1] + "볼";
    } else if (strikeBallCount[0] > 0 && strikeBallCount[1] > 0) {
      result = strikeBallCount[1] + "볼 " + strikeBallCount[0] + "스트라이크";
    } else if (strikeBallCount[0] == 0 && strikeBallCount[1] == 0) {
      result = "낫싱";
    }
    strikeBallCount[0] = 0;
    strikeBallCount[1] = 0;
    MissionUtils.Console.print(result);
    this.checkResult(result);
  }

  checkResult(result) {
    if (result == "3스트라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.restartEnd();
    } else {
      this.userInputNumber(COMPUTER_NUMBER);
    }
  }

  restartEnd() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (restartEndNumber) => {
        this.chooseRestartEnd(restartEndNumber);
      }
    );
  }

  chooseRestartEnd(restartEndNumber) {
    if (restartEndNumber == 1) {
      COMPUTER_NUMBER.length = 0;
      this.randomComputerNumber();
      this.userInputNumber(COMPUTER_NUMBER);
    } else if (restartEndNumber == 2) {
      result = "게임 종료";
      MissionUtils.Console.print(result);
    } else {
      throw new Error(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력해야합니다"
      );
    }
  }
}

module.exports = App;
