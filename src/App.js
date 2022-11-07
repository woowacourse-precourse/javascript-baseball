const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumber = computerNumbers();
    playerInputNumbers(computerNumber);
  }
}

// 플레이어 숫자 입력
function playerInputNumbers(computerNumber) {
  MissionUtils.Console.readLine("숫자를 입력해주세요: ", (answer) => {
    const playerNumber = isValid(answer);
    const gameState = compare(playerNumber, computerNumber);
    MissionUtils.Console.print(gameState);
    gameProgress(gameState, computerNumber);
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

// 입력받은 숫자 비교
function compare(playerNumber, computerNumber) {
  const strike = strikeCheck(playerNumber, computerNumber);
  const ball = ballCheck(playerNumber, computerNumber) - strike;

  if (strike + ball === 0) return "낫싱";
  if (strike === 3) return "3스트라이크";
  if (strike === 0) return `${ball}볼`;
  if (ball === 0) return `${strike}스트라이크`;
  if (true) return `${ball}볼 ${strike}스트라이크`;
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

// 게임 다시시작
function gameRestart() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    (answer) => {
      selectGameRestart(answer);
    }
  );
}

// 게임 다시시작 선택
function selectGameRestart(answer) {
  if (answer === "1") {
    const computerNumber = computerNumbers();
    playerInputNumbers(computerNumber);
  } else if (answer === "2") {
    MissionUtils.Console.close();
  } else {
    throw new Error("1이나 2가 아닌 다른 숫자가 입력되었습니다.");
  }
}

// 게임 진행
function gameProgress(gameState, computerNumber) {
  if (gameState === "3스트라이크") {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    gameRestart();
  } else playerInputNumbers(computerNumber);
}

const app = new App();
app.play();

module.exports = App;
