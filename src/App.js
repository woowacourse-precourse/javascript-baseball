const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // 컴퓨터 랜덤 값 생성
    const computerNumber = RandomChoice();
    MissionUtils.Console.print(computerNumber);
    MissionUtils.Console.close();
  }
}

const RandomChoice = () => {
  const randomNumber = [];
  while (randomNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }
  return randomNumber;
};

module.exports = App;
