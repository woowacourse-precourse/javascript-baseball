const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // 게임 시작
    gameStart();
    // 컴퓨터 랜덤 값 생성
    const computerNumber = RandomChoice();
  }
}

const gameStart = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

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
