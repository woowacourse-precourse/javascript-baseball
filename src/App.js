const MissionUtils = require("@woowacourse/mission-utils");
const computer = [];
while (computer.length < 3) {
  const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
  if (!computer.includes(randomNum)) {
    computer.push(randomNum);
  }
}
const Question = (answer) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요: ");
};

class App {
  play() {
    console.log("숫자 야구게임을 시작합니다.");
    console.log(Question);
  }
}

module.exports = App;
