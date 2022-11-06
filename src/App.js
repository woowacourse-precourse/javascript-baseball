const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    PrintGameStartPhrase();
    StartGame();
  }
}

// 기능 2 ~ 8 
function StartGame() {
  const computerNumber = makeComputerNumber();
  getUserNumber(computerNumber);
}

// 기능 1
function PrintGameStartPhrase() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

// 기능 2
function makeComputerNumber() {
  const computerNumberList = [];

  while (computerNumberList.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!(computerNumberList.includes(randomNumber))) {
      computerNumberList.push(randomNumber);
    }
  }

  return computerNumberList.join("");
}

// 기능 3
function getUserNumber(computerNumber) {

  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => {
    checkValidityUserNumber(userNumber);

    const checkResult = countBallAndStrike(computerNumber, userNumber);

    const result = printResult(checkResult);

    if (result === "end") {
      reStartOrEnd();
    }

    getUserNumber(computerNumber);

  });
}

// 기능 4
function checkValidityUserNumber(userNumber) {

  const userNumberList = Array.from(userNumber);
  const firstNumber = Number(userNumberList[0]);
  const secondNumber = Number(userNumberList[1]);
  const thirdNumber = Number(userNumberList[2]);

  if (!(userNumberList.length === 3)) {
    throw new Error("3자리의 숫자를 입력하지 않아 에러가 발생하였습니다.");
  }

  if ((isNaN(firstNumber) == true) || (isNaN(secondNumber) == true) || (isNaN(thirdNumber) == true)) {
    throw new Error("숫자를 입력하지 않아 에러가 발생하였습니다.");
  }

  if (!((firstNumber !== secondNumber) && (secondNumber !== thirdNumber) && (thirdNumber !== firstNumber))) {
    throw new Error("중복되는 숫자가 있어 에러가 발생하였습니다.");
  }

  if (firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) {
    throw new Error("1부터 9사이의 숫자가 아닌 0이 포함되어 있어 에러가 발생하였습니다.");
  }
}

// 기능 5
function countBallAndStrike(computerNumber, userNumber) {
  const computerNumberList = Array.from(computerNumber);
  const userNumberList = Array.from(userNumber);

  let ballOrStrike = 0;
  let ball = 0;
  let strike = 0;

  for (let userNumber of userNumberList) {
    if (computerNumberList.includes(userNumber)) {
      ballOrStrike += 1;
    }
  }

  if (ballOrStrike === 0) {
    return "nothing";
  }

  for (let i = 0; i < 3; i++) {
    if (computerNumberList[i] === userNumberList[i]) {
      strike += 1;
    }
  }
  ball = ballOrStrike - strike;

  return [ball, strike];
}

// 기능 6
function printResult(checkResult) {
  const ball = checkResult[0];
  const strike = checkResult[1];

  if (checkResult === "nothing") {
    MissionUtils.Console.print('낫싱');
    return;
  }

  if (strike === 3) {
    MissionUtils.Console.print("3스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    return "end";
  }

  if (ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
    return;
  }

  if (strike === 0) {
    MissionUtils.Console.print(`${ball}볼`);
    return;
  }

  MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  return;
}

// 기능 7
function reStartOrEnd() {
  MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (userChoiceNumber) => {
    checkUserChoiceNumber(userChoiceNumber);
  });

}

// 기능 8
function checkUserChoiceNumber(userChoiceNumber) {

  if (userChoiceNumber === '1') {
    StartGame();
    return;
  }
  
  if (userChoiceNumber === '2') {
    MissionUtils.Console.print("숫자 야구 게임을 종료합니다.");
    MissionUtils.Console.close();
    return;
  }

  throw new Error("잘못된 값을 입력하여 에러가 발생하였습니다.");
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;