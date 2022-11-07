const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // 게임 시작
    gameStart();
    // 컴퓨터 랜덤 값 생성
    const computerNumber = RandomChoice();
    // 사용자 값 입력
    const userNumber = userInput();
    // 게임 결과
    gameResult(computerNumber, userNumber);
  }
}

function gameStart() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

function RandomChoice() {
  let randomNumber = [];
  while (randomNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }
  return randomNumber;
}

// 유저 입력을 배열화
function userInput() {
  let userNumber;
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    checkValidNumber(answer);
    userNumber = answer.split("").map((number) => number);
  });
  return userNumber;
}
// 유저 입력 예외처리
function checkValidNumber(answer) {
  const checkDeplicated = [...new Set(answer)];
  if (!answer.match(/[1-9]/)) {
    throw new Error("1에서 9짜리의 숫자만 입력해주세요.");
  }
  if (answer.size !== 3) {
    throw new Error("3자리 숫자만 입력해주세요.");
  }
  if (checkDeplicated.length !== 3) {
    throw new Error("중복되지 않는 값을 입력해주세요.");
  }
}

function gameResult(computerNumber, userNumber) {
  const strike = countStrike(computerNumber, userNumber);
  const ball = countBall(computerNumber, userNumber);
  if (strike === 3) {
    //
  }
  if ((strike === 0) & (ball === 0)) {
    MissionUtils.Console.print("낫싱");
  }
  if ((strike !== 0) & (ball === 0)) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  }
  if ((strike === 0) & (ball !== 0)) {
    MissionUtils.Console.print(`${ball}볼`);
  }
  if ((strike !== 0) & (ball !== 0)) {
    MissionUtils.Console.print(`${strike}스트라이크 ${ball}볼`);
  }
}

function countStrike(computerNumber, userNumber) {
  return [...computerNumber].filter(
    (element, index) => userNumber[index] === element
  ).length;
}

function countBall(computerNumber, userNumber) {
  return [...computerNumber].filter((element) => userNumber.includes(element))
    .length;
}

module.exports = App;
