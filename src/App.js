const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumber = computerNumbers();
    playerInputNumbers(computerNumber);
  }
}

// 플레이어 숫자 입력
function playerInputNumbers() {
  MissionUtils.Console.readLine("숫자를 입력해주세요: ", (answer) => {
    const playerNumber = isValid(answer);
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
  return computer.join("");
}

// 유효성 검사
function isValid(numbers) {
  if (!String(numbers).match(/[1-9]/g)) {
    throw new Error("숫자만 입력해주세요.");
  }
  if (numbers.length !== 3) {
    throw new Error("3자리 숫자를 입력해주세요.");
  }
  if (new Set(numbers).size !== 3) {
    throw new Error("중복된 숫자가 있습니다.");
  }
  return numbers;
}

// 스트라이크 카운트
function strikeCheck(playerNumber, computerNumber) {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (playerNumber[i] === computerNumber[i]) {
      count++;
    }
  }
  return count;
}

// 볼 카운트
function ballCheck(playerNumber, computerNumber) {
  let count = 0;
  computerNumber.split("").forEach((num) => {
    if (playerNumber.includes(num)) {
      count++;
    }
  });
  return count;
}

const app = new App();
app.play();

module.exports = App;
