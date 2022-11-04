const MissionUtils = require("@woowacourse/mission-utils");
const GameUtils = require("./GameUtils");
const Validate = require("./Validate");
const BaseballModel = require("./BaseballModel");
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

  static getUserGuessNumber() {
    return userGuessNumber();
  }

  static getRandomNumbers() {
    return generateRandomNumber(1, 9);
  }

  static async evalueScore() {
    const random = BaseballGame.getRandomNumbers();
    const userNumber = await BaseballGame.getUserGuessNumber();
    const result = scoreCheck(random, userNumber);
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

const userGuessNumber = async () => {
  const arr = await readLine(" 3자리 숫자를 입력해 주세요 ", (answer) => {
    print(`숫자를 입력해 주세요 : ${answer}`);
    Validate.userGuessNumbers(answer);

    //값 저장이 아니라 바로 넘겨주어야 함.

    const userGuess = GameUtils.userInputToNumberArr(answer);
    MissionUtils.Console.close();
  });
  return arr;
};

module.exports = BaseballGame;
