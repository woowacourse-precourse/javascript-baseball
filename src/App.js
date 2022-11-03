const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let computerNumber = createComputerNumber();
    readInputNumber(computerNumber);
  }
}

const countBall = (myNumber, computerNumber) => {
  let ball = 0;
  computerNumber.split("").forEach((number) => {
    if (myNumber.includes(number)) ball += 1;
  });

  return ball;
}

const countStrike = (myNumber, computerNumber) => {
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    if (myNumber[i] === computerNumber[i]) strike += 1;
  }

  return strike;
}

function compare(myNumber, computerNumber) {
  const strike = countStrike(myNumber, computerNumber);
  const ball = countBall(myNumber, computerNumber) - strike;

  if ((strike + ball) === 0) return '낫싱';
  if (strike === 3) return '3스트라이크';
  if (strike === 0) return `${ball}볼`;
  if (ball === 0) return `${strike}스트라이크`;
  if (true) return `${ball}볼 ${strike}스트라이크`;
}

function createComputerNumber() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
}

function readInputNumber(computerNumber) {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (myNumber) => {
    const gameState = compare(myNumber, computerNumber);
    MissionUtils.Console.print(gameState);
    gameInProgress(gameState, computerNumber);
  });
}

function gameInProgress(gameState, computerNumber) {
  if (gameState === "3스트라이크") {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    gameRestartOption();
  } else {
    readInputNumber(computerNumber);
  }
}

function gameRestartOption() {
  MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (input) => {
    selectGameRestart(input);
  });
}

function selectGameRestart(input) {
  if (input === "1") {
    let computerNumber = createComputerNumber();
    readInputNumber(computerNumber);
  }
  if (input === "2") {
    MissionUtils.Console.close();
  }
}

let app = new App();
app.play();

module.exports = App;
