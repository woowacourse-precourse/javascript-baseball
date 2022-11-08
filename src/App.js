const MissionUtils = require("@woowacourse/mission-utils");

let user;
let computer;
let isEndGame = true;
let result = true;
const game_start = "숫자 야구 게임을 시작합니다.";

function ballCount(userInputNumbersArray, computerPickNumbersArray) {
  let ball = 0;
  for (let i = 0; i < userInputNumbersArray.length; i += 1) {
    if (userInputNumbersArray.includes(computerPickNumbersArray[i])) {
      ball += 1;
    }
  }
  return ball;
}

function strikeCount(userInputNumbersArray, computerPickNumbersArray) {
  let strike = 0;
  for (let i = 0; i < userInputNumbersArray.length; i += 1) {
    if (userInputNumbersArray[i] === computerPickNumbersArray[i]) {
      strike += 1;
    }
  }
  return strike;
}

function showResult() {
  const ball = ballCount(user, computer);
  const strike = strikeCount(user, computer);
  if (strike === 3) {
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    result = false;
    return;
  }
  if (ball === 0) {
    MissionUtils.Console.print("낫싱");
    result = true;
    return;
  }
  if (strike === 0) {
    MissionUtils.Console.print(`${ball}볼`);
    result = true;
    return;
  }
  if (ball === strike) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    result = true;
    return;
  }
  MissionUtils.Console.print(`${ball - strike}볼 ${strike}스트라이크`);
  result = true;
}

function computerPickNumbers() {
  computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}

function checkInputError() {
  const userInputArray = user.split("");
  if (userInputArray.length !== 3) {
    throw new Error("잘못 입력하셨습니다.");
  }
  for (let i = 0; i < userInputArray.length; i += 1) {
    if (Number.isNaN(userInputArray[i])) {
      throw new Error("잘못 입력하셨습니다.");
    }
  }
  if (
    userInputArray[0] === userInputArray[1] ||
    userInputArray[1] === userInputArray[2] ||
    userInputArray[0] === userInputArray[2]
  ) {
    throw new Error("잘못 입력하셨습니다.");
  }
  if (userInputArray.includes("0")) {
    throw new Error("잘못 입력하셨습니다.");
  }
  user = userInputArray.map((value) => Number(value));
}

function userInput() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    console.log(`${answer}`);
    user = answer;
  });
}

function restartShutdown() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (answer) => {
      console.log(`${answer}`);
      if (answer === 1) {
        isEndGame = true;
      }
      if (answer === 2) {
        MissionUtils.Console.close();
        isEndGame = false;
      }
      throw new Error("잘못 입력하셨습니다.");
    }
  );
}

class App {
  play() {
    MissionUtils.Console.print(game_start);
  }
}

module.exports = App;
