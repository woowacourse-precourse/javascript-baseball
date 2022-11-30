const MissionUtils = require("@woowacourse/mission-utils");
const {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  PRINT_MESSAGE,
} = require("./component/component");

const COMPUTER_NUMBER = [];
let strikeBallCount = [0, 0];
let result = "";

class App {
  play() {
    MissionUtils.Console.print(PRINT_MESSAGE.START_MESSAGE);
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
    MissionUtils.Console.readLine(INPUT_MESSAGE.AMOUNT, (userNumberInput) => {
      this.occurredError(userNumberInput);
      this.checkNumbers(COMPUTER_NUMBER, userNumberInput);
    });
  }

  occurredError(userNumberInput) {
    if (userNumberInput.length != 3) {
      throw new Error(ERROR_MESSAGE.SAME_DIGIT);
    }
    if (new Set(userNumberInput).size != 3) {
      throw new Error(ERROR_MESSAGE.DIFFERENT_NUMBER);
    }
    if (/[^1-9]/g.test(userNumberInput)) {
      throw new Error(ERROR_MESSAGE.RANGE_NUMBER);
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
      result = strikeBallCount[0] + PRINT_MESSAGE.STRIKE;
    } else if (strikeBallCount[1] > 0 && strikeBallCount[0] == 0) {
      result = strikeBallCount[1] + PRINT_MESSAGE.BALL;
    } else if (strikeBallCount[0] > 0 && strikeBallCount[1] > 0) {
      result =
        strikeBallCount[1] +
        PRINT_MESSAGE.BALL +
        strikeBallCount[0] +
        PRINT_MESSAGE.STRIKE;
    } else if (strikeBallCount[0] == 0 && strikeBallCount[1] == 0) {
      result = PRINT_MESSAGE.NOTHING;
    }
    strikeBallCount[0] = 0;
    strikeBallCount[1] = 0;
    MissionUtils.Console.print(result);
    this.checkResult(result);
  }

  checkResult(result) {
    if (result == PRINT_MESSAGE.CORRECT_STRIKE) {
      MissionUtils.Console.print(PRINT_MESSAGE.END_MESSAGE);
      this.restartEnd();
    } else {
      this.userInputNumber(COMPUTER_NUMBER);
    }
  }

  restartEnd() {
    MissionUtils.Console.readLine(
      INPUT_MESSAGE.RESTART_END,
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
      MissionUtils.Console.close();
    } else {
      throw new Error(INPUT_MESSAGE.RESTART_END);
    }
  }
}

module.exports = App;
