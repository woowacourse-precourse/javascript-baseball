const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    baseBallGame();
  }
}

function baseBallGame() {
  let playGame = "1";

  while (playGame === "1") {
    let computer = getRandomNumber();

    guessNumber(computer);
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    MissionUtils.Console.readLine("", (answer) => {
      playGame = answer;
      MissionUtils.Console.print(answer);
    });
  }
}

function guessNumber(computer) {
  let number;
  do {
    MissionUtils.Console.readLine("", (answer) => {
      number = answer;
      console.log("숫자를 입력해주세요 : " + number);
    });
    checkException(number);
  } while (!checkResult(computer, number));
}

function checkResult(computer, number) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < 3; i++) {
    let index = computer.indexOf(number.charAt(i));
    if (index === -1) {
      continue;
    } else if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }

  printMessage(strike, ball);

  if (strike === 3) {
    return true;
  }
  return false;
}

function printMessage(strike, ball) {
  if (ball === 0 && strike === 0) {
    MissionUtils.Console.print("낫싱");
  } else if (ball === 0) {
    MissionUtils.Console.print(`${strike}스트라이크`);
  } else if (strike === 0) {
    MissionUtils.Console.print(`${ball}볼`);
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

function checkException(number) {
  if (number === undefined) {
    throw new Error("undefined");
  } else if (number === "") {
    throw new Error("입력해야 합니다.");
  } else if (isNaN(number)) {
    throw new Error("숫자를 입력해야 합니다.");
  } else if (number.length !== 3) {
    throw new Error("세자리 숫자를 입력해야 합니다.");
  } else if (checkSameNumber(number)) {
    throw new Error("서로 다른 숫자를 입력해야 합니다.");
  }
}

function checkSameNumber(number) {
  for (let i = 1; i < number.length; i++) {
    if (number.indexOf(number.charAt(i)) != i) {
      return true;
    }
  }
  return false;
}

function getRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join("");
}

module.exports = App;
