const MissionUtils = require("@woowacourse/mission-utils");
class App {
  computerRandom() {
    const computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.close();
    return computer;
  }

  userPick() {
    const user = MissionUtils.Console.readLine(
      "숫자를 입력해주세요.",
      (input) => {
        console.log(`숫자: ${input}`);
      }
    );
    MissionUtils.Console.close();
    return user;
  }

  checkUserNum(num) {
    if (num.length !== 3) {
      MissionUtils.Console.print("3개의 숫자만 입력해주세요.");
      return false;
    } else if (num[0] === num[1] || num[0] === num[2] || num[1] === num[2]) {
      MissionUtils.Console.print("같은 숫자를 입력하면 안 됩니다.");
      return false;
    } else if (isNaN(num)) {
      MissionUtils.Console.print("3개의 숫자만 입력해주세요.");
      return false;
    }
    return true;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임 시작!");
  }
}

module.exports = App;
