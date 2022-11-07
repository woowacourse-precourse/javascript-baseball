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
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      if (!isCorrectInput(answer)) {
        throw new Error("잘못된 입력: 서로 다른 3자리의 수를 입력하세요.");
      }
      const isThreeStrikes = printHint(computerNumber.join(""), answer);
      isThreeStrikes ? this.finishGame() : this.playing(computerNumber);
    });
  }
  finishGame() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        if (answer === "2") {
          MissionUtils.Console.close();
          return;
        }
        if (answer === "1") {
          this.startGame();
          return;
        }
        throw new Error("잘못된 입력: 1또는 2를 입력하세요.");
      }
    );
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
  const regex = /^[1-9]{3}$/;
  if (!regex.test(input)) return false;
  if (input[0] === input[1]) return false;
  if (input[1] === input[2]) return false;
  if (input[2] === input[0]) return false;
  return true;
}
function printHint(computerNumber, userNumber) {
  let strikeCount = 0;
  let ballCount = 0;
  for (let index = 0; index < 3; index++) {
    let posSameNumber = userNumber.indexOf(computerNumber[index]);
    if (posSameNumber === index) strikeCount++;
    else if (posSameNumber != -1) ballCount++;
  }
  let hintMessage = "";
  if (ballCount === 0) {
    if (strikeCount === 0) hintMessage = "낫싱";
    else hintMessage += strikeCount + "스트라이크";
  } else {
    hintMessage += ballCount + "볼";
    if (strikeCount !== 0) hintMessage += " " + strikeCount + "스트라이크";
  }
  MissionUtils.Console.print(hintMessage);
  if (strikeCount === 3) return true;
  return false;
}

module.exports = App;
