const MissionUtils = require("@woowacourse/mission-utils");
const GameUtils = require("./GameUtils");
const Validate = require("./Validate");
const BaseballModel = require("./BaseballModel");
const print = MissionUtils.Console.print;
const readLine = MissionUtils.Console.readLine;

class BaseballGame {
  baseballModel;

  static gameStart() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.baseballModel = new BaseballModel(BaseballGame.getRandomNumbers());
    userGuessNumber();
  }

  static getRandomNumbers() {
    return generateRandomNumber(1, 9);
  }

  static compareComputerAndUser(userGuessNumber) {
    const userNumber = GameUtils.userInputToNumberArr(userGuessNumber);
    const random = this.baseballModel.getRandom();
    GameUtils.evaluScore(userNumber, random);

    // const result = scoreCheck(random, userNumber);
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

const userGuessNumber = () => {
  const arr = readLine(" 3자리 숫자를 입력해 주세요 : ", (answer) => {
    Validate.userGuessNumbers(answer);
    BaseballGame.compareComputerAndUser(answer);
    MissionUtils.Console.close();
  });
};

module.exports = BaseballGame;
