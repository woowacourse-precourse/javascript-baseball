const MissionUtils = require("@woowacourse/mission-utils");
const mRandom = MissionUtils.Random;
const mConsole = MissionUtils.Console;
const {
  GAME_LENGTH,
  STRIKE,
  BALL,
  NOTHING,
  GAME_MESSAGES,
} = require("./constants/constants");

class Referee {
  getComputerNumber() {
    const computerNumber = new Set();
    while (computerNumber.size < GAME_LENGTH) {
      const newNumber = mRandom.pickNumberInRange(1, 9);
      if (!computerNumber.has(newNumber)) {
        computerNumber.add(newNumber);
      }
    }
    return [...computerNumber];
  }

  countInput(computerInput, userInput) {
    let BALLS = 0;
    let STRIKES = 0;
    for (let idx = 0; idx < GAME_LENGTH; idx++) {
      if (computerInput[idx] === userInput[idx]) STRIKES++;
      else if (computerInput.includes(userInput[idx])) BALLS++;
    }

    let countArr = [BALLS, STRIKES];
    return countArr;
  }

  printResult(count) {
    if (count[1] === GAME_LENGTH) {
      mConsole.print(GAME_MESSAGES.END);
    } else {
      if (count[0] === 0 && count[1] === 0) mConsole.print(NOTHING);
      else
        mConsole.print(
          `${count[0] > 0 ? count[0] + BALL : ""}${
            count[1] > 0 ? count[1] + STRIKE : ""
          }`.trim()
        );
    }
  }
}

module.exports = Referee;
