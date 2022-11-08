import MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let isGamePlaying = true;
    while (isGamePlaying) {
      startGame();
      isGamePlaying = false;
    }
  }
}
async function startGame() {
  const answer = MissionUtils.Random.pickNumberInRange(111, 999).toString();
  try {
    const userNumber = await getInput();
    const result = getResult(userNumber, answer);
    if (result === "3스크라이크") {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
  } catch (error) {
    MissionUtils.Console.print(`잘못된 입력입니다. 게임을 종료합니다.`);
    restartOrExit(2);
  }
}
function getInput() {
  return new Promise((resolve, reject) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (isNaN(Number(input))) throw new Error("잘못된 입력입니다.");
      resolve(input);
    });
  });
}
function getRestartOrExit() {
  return new Promise((resolve, reject) => {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
      (input) => {
        resolve(input);
      }
    );
  });
}
function restartOrExit(input) {
  if (input === 1) {
    return true;
  }
  return false;
}
function getResult(inputNumber, answer) {
  const strike = countStrike(inputNumber, answer);
  const ball = countBall();
  const nothing = 3 - strike - ball;
  if (nothing === 3) return "낫싱";
  if (ball === 0) return `${strike}스크라이크`;
  if (strike === 0) return `${ball}볼`;
  return `${ball}볼 ${strike}스크라이크`;
}
function countStrike(inputNumber, answer) {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (answer[i] === inputNumber[i]) count++;
  }
  return count;
}
function countBall(inputNumber, answer) {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (answer.includes(inputNumber[i]) && answer[i] !== inputNumber[i])
      count++;
  }
  return count;
}

const app = new App();
app.play();

export default App;
