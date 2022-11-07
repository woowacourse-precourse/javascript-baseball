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
function isCorrectInput(input) {
  const changeInputToNumber = Number(input);
  if (changeInputToNumber === NaN) return false;
  if (changeInputToNumber < 123) return false;
  if (changeInputToNumber > 987) return false;
  if (input.length != 3) return false;
  if (input[0] === input[1]) return false;
  if (input[1] === input[2]) return false;
  if (input[0] === input[2]) return false;
  if (input[1] === "0") return false;
  if (input[2] === "0") return false;
  return true;
}

module.exports = App;
