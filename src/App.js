const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    playerInputNumber();
  }
}

// 플레이어 숫자 입력
function playerInputNumbers() {
  MissionUtils.Console.readLine("숫자를 입력해주세요: ", (answer) => {
    const playerNumber = answer;
    MissionUtils.Console.print(`${playerNumber}를 입력했다`);
  });
}

// 컴퓨터 숫자 생산
function computerNumbers() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}
computerNumbers();

const app = new App();
app.play();

module.exports = App;
