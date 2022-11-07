const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }
  startGame() {
    const computerNumber = createComputerNumber();
    this.playing(computerNumber);
  }
  playing(computerNumber) {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {});
  }
}
function createComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

module.exports = App;
