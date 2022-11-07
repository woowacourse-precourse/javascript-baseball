const MissionUtils = require("@woowacourse/mission-utils");
class App {
  computerRandom() {
    const computer = MissionUtils.Random.pickNumberInRange(1, 9, 3);
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

  play() {
    MissionUtils.Console.print("숫자 야구 게임 시작!");
  }
}

module.exports = App;
