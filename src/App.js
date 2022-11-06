const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let computerNumber = setComputerNumber();
    let restart = "";

    while (true) {
      let userNumber = setUserNumber();
      let compareResult = compareNumbers(computerNumber, userNumber);
      restart = restartGame(compareResult);
      if (restart == "1") computerNumber = setComputerNumber();
      else if (restart == "2") break;
      else continue;
    }
  }
}

function setComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

function setUserNumber() {
  let userNumber = "";
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    userNumber = answer;
  });

  if (userNumber.length > 3) throw "입력된 숫자의 자릿수가 많습니다";
  else if (userNumber.length < 3) throw "입력된 숫자의 자릿수가 적습니다";
  else if (isNaN(userNumber)) throw "숫자가 아닙니다";
  else if (Number(userNumber) < 0) throw "음수를 입력했습니다";
  else return userNumber;
}

function compareNumbers(computerNumber, userNumber) {
  let ball = 0;
  let strike = 0;
  let result = "";
  for (let i = 0; i < computerNumber.length; i++) {
    let num = Number(userNumber[i]);
    if (computerNumber[i] == num) strike++;
    if (computerNumber[i] != num && computerNumber.includes(num)) ball++;
  }

  if (ball === 0 && strike === 0) result = "낫싱";
  if (ball === 0 && strike !== 0) result = `${strike}스트라이크`;
  if (ball !== 0 && strike === 0) result = `${ball}볼`;
  if (ball !== 0 && strike !== 0) result = `${ball}볼 ${strike}스트라이크`;

  printResult(result);

  return result;
}

function printResult(result) {
  MissionUtils.Console.print(result);

  if (result == "3스트라이크") {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }
}

function restartGame(compareResult) {
  if (compareResult == "3스트라이크") {
    MissionUtils.Console.print(
      "게임을 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    let restart = "";
    MissionUtils.Console.readLine("", (answer) => {
      restart = answer;
    });

    return restart;
  } else return;
}

module.exports = App;
