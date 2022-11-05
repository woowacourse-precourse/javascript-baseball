const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    PrintGameStartPhrase();

    const computerNumber = makeComputerNumber();
    console.log(computerNumber);

    let isGameEnd = false;
    while (isGameEnd === false) {
      const userNumber = await getUserNumber();
      checkValidityUserNumber(userNumber);

      const checkResult = countBallAndStrike(computerNumber, userNumber);
      console.log(checkResult);


    }

  }
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
function getUserNumber() {
  let userNumber;

  let promise = new Promise((resolve) => {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      resolve(input);
    });
  });

  userNumber = promise;

  return userNumber;
}

// 기능 4
function checkValidityUserNumber(userNumber) {

  const userNumberList = Array.from(userNumber);
  const firstNumber = Number(userNumberList[0]);
  const secondNumber = Number(userNumberList[1]);
  const thirdNumber = Number(userNumberList[2]);

  console.log(firstNumber, secondNumber, thirdNumber);

  if (!(userNumberList.length === 3)) {
    throw Error ("3자리의 숫자를 입력하지 않아 에러가 발생하였습니다.");
  }

  if ((isNaN(firstNumber) == true) || (isNaN(secondNumber) == true) || (isNaN(thirdNumber) == true)) {
    throw Error ("숫자를 입력하지 않아 에러가 발생하였습니다.");
  }

  if (!((firstNumber !== secondNumber) && (secondNumber !== thirdNumber) && (thirdNumber !== firstNumber))) {
    throw Error ("중복되는 숫자가 있어 에러가 발생하였습니다.");
  }

  if (firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) {
    throw Error ("1부터 9사이의 숫자가 아닌 0이 포함되어 있어 에러가 발생하였습니다.");
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





const baseballGame = new App();
baseballGame.play();

module.exports = App;