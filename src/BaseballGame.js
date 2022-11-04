const MissionUtils = require("@woowacourse/mission-utils");
const print = MissionUtils.Console.print;
const readLine = MissionUtils.Console.readLine;

class BaseballGame {
  constructor() {}

  strick = "스트라이크";
  ball = "볼";
  nothing = "낫싱";

  static gameStart() {
    console.log("숫자 야구 게임을 시작합니다.");
    BaseballGame.getUserGuessNumber();
  }

  static getRandomNumbers() {
    return generateRandomNumber(1, 9);
  }

  static getUserGuessNumber() {
    return userInputNumber();
  }
}

const generateRandomNumber = (startNum, endNum) => {
  const randomArr = [];
  while (randomArr.length < 3) {
    const randomPick = MissionUtils.Random.pickNumberInRange(startNum, endNum);
    if (!randomArr.includes(randomPick)) randomArr.push(randomPick);
  }
  return randomArr;
};

const userInputNumber = () => {
  const userGuessNumber = readLine("3자리 숫자를 입력해 주세요", (answer) => {
    print(`숫자를 입력해 주세요 :  ${answer}`);
  });
  // validateUserInput(userGuessNumber);
};

module.exports = BaseballGame;
