const MissionUtils = require("@woowacourse/mission-utils");

class App {
  printGameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  createComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(number)) {
        computerNumber.push(number);
      }
    }

    return computerNumber.join("");
  }

  checkBallStrike(nums, answer) {
    let ballStrikeCount = [0, 0];

    if (!(answer.length === 3 && answer.length === new Set(answer).size))
      throw new Error("잘못된 입력입니다.");

    for (let i = 0; i < 3; i++) {
      let checkNums = Number(nums[i]);

      if (!(1 <= checkNums && checkNums <= 9)) {
        throw new Error("잘못된 입력입니다.");
      } else if (nums[i] === checkNums) {
        ballStrikeCount[1]++;
      } else if (nums.indexOf(checkNums) !== -1) {
        ballStrikeCount[0]++;
      }
    }

    return ballStrikeCount;
  }

  printBallStrike(ballStrikeCount) {
    if ((ballStrikeCount[0] === 0) & (ballStrikeCount[1] === 0)) {
      return "낫싱";
    } else if (ballStrikeCount[0] === 0) {
      return `${ballStrikeCount[1]}스트라이크`;
    } else if (ballStrikeCount[1] === 0) {
      return `${ballStrikeCount[0]}볼`;
    } else {
      return `${ballStrikeCount[0]}볼 ${ballStrikeCount[1]}스트라이크`;
    }
  }
}

module.exports = App;
