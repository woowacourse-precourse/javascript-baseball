const MissionUtils = require("@woowacourse/mission-utils");
const mRandom = MissionUtils.Random;
const mConsole = MissionUtils.Console;
const GAME_NUMBER_LENGTH = 3;

class Referee {
  getComputerNumber() {
    const computerNumber = new Set();
    while (computerNumber.size < GAME_NUMBER_LENGTH) {
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
    for (let idx = 0; idx < GAME_NUMBER_LENGTH; idx++) {
      if (computerInput[idx] === userInput[idx]) STRIKES++;
      else if (computerInput.includes(userInput[idx])) BALLS++;
    }

    let countArr = [BALLS, STRIKES];
    return countArr;
  }

  printResult(count) {
    if (count[1] === GAME_NUMBER_LENGTH) {
      mConsole.print(
        `${GAME_NUMBER_LENGTH}스트라이크\n${GAME_NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    } else {
      if (count[0] === 0 && count[1] === 0) mConsole.print("낫싱");
      else
        mConsole.print(
          `${count[0] > 0 ? count[0] + "볼 " : ""}${
            count[1] > 0 ? count[1] + "스트라이크" : ""
          }`.trim()
        );
    }
  }
}

module.exports = Referee;
