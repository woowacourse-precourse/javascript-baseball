const MissionUtils = require("@woowacourse/mission-utils");

let user;
let computer;
let isEndGame = true;
let result = true;
const game_start = "숫자 야구 게임을 시작합니다.";

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

class App {
  play() {
    MissionUtils.Console.print(game_start);
  }
}

module.exports = App;
