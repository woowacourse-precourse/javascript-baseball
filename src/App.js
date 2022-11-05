const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // 컴퓨터 랜덤 숫자 생성
    const computerNumber = RandomChoice();
    MissionUtils.Console.print(computerNumber);
    MissionUtils.Console.close();
  }
}

const RandomChoice = () => {
  const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return randomNumber;
};

module.exports = App;
