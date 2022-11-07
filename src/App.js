const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    const random_num = MissionUtils.Random.pickUniqueNumbersInRange([1, 9, 3]);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let user_num;
    MissionUtils.Cosole.readLine("숫자를 입력해주세요 :", (number) => {
      user_num = number;
      console.log(user_num);
    });
  }
}

module.exports = App;
