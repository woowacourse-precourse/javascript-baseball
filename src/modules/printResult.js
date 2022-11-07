const MissionUtils = require("@woowacourse/mission-utils");
const mConsole = MissionUtils.Console;

const GAME_NUMBER_LENGTH = 3;

const printResult = (count) => {
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
};

module.exports = printResult;
