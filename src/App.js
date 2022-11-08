const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const compNumArr = [];
    const userNumArr = [];

    getCompNumArray(compNumArr);
    printBeginGame();
    getUserGuess(userNumArr, compNumArr); // get user's guess and check against computer's number
  }
}
module.exports = App;

function getCompNumArray(compNumArr) {
  while (compNumArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!compNumArr.includes(number)) {
      compNumArr.push(number);
    }
  }
}

function printBeginGame() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}

function checkDuplicates(array) {
  return new Set(array).size !== array.length;
}

function getUserGuess(userNumArr, compNumArr) {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
    for (let i = 0; i < userInput.length; i += 1) {
      if (
        userInput.length !== 3 ||
        checkDuplicates(userInput) ||
        userInput.includes("0")
      ) {
        throw new Error("입력값은 중복이 없는 1-9 사이 3개의 숫자여야 합니다.");
      } else {
        userNumArr.push(parseInt(userInput[i], 10));
      }
    }
    compareUserGuessToCompNum(userNumArr, compNumArr);
  });
}

function compareUserGuessToCompNum(userNumArr, compNumArr) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < userNumArr.length; i += 1) {
    if (userNumArr[i] === compNumArr[i]) {
      strike += 1;
    } else if (compNumArr.includes(userNumArr[i])) {
      ball += 1;
    }
  }
  if (strike === 3) {
    MissionUtils.Console.print(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    getUserReplayOrFinish(); // "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
  } else if (ball === 0 && strike === 0) {
    MissionUtils.Console.print("낫싱");
  } else {
    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
  getUserGuess([], compNumArr); // "숫자를 입력해주세요 : "
}

function getUserReplayOrFinish() {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (userInput) => {
      if (userInput === "1") {
        const app = new App();
        app.play(); // replay game
      } else if (userInput === "2") {
        MissionUtils.Console.close(); // end game
      } else {
        throw new Error("재시작은 1, 종료는 2를 입력해주세요."); // error
      }
    }
  );
}
