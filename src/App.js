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
