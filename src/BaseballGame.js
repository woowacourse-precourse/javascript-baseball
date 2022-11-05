const MissionUtils = require("@woowacourse/mission-utils");
const GameUtils = require("./GameUtils");
const Validate = require("./Validate");
const BaseballModel = require("./BaseballModel");

const readLine = MissionUtils.Console.readLine;

const ALL_STRIKE = "3스트라이크";
const END_OF_GAME = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";

class BaseballGame {
  baseballModel;

  static gameStart() {
    console.log("숫자 야구 게임을 시작합니다.");
    BaseballGame.gameStartStepTwo();
  }
  static gameStartStepTwo() {
    this.baseballModel = new BaseballModel(BaseballGame.createRandom());
    userGuessNumber();
  }

  static createRandom() {
    return generateRandomNumber(1, 9);
  }

  static getRandom() {
    return this.baseballModel.getRandom();
  }

  static compareComputerAndUser(userGuessNumber) {
    const userNumber = GameUtils.userInputToNumberArr(userGuessNumber);
    const random = BaseballGame.getRandom();
    const score = GameUtils.evaluScore(userNumber, random);
    willGameContinue(GameUtils.printFormat(score));
  }
}

const willPlayMoreGame = () => {
  readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer) => {
    //유저 대답 벨리데이션
    if (answer === "1") BaseballGame.gameStartStepTwo();
    if (answer === "2") MissionUtils.Console.close();
  });
};

const willGameContinue = (result) => {
  if (result === ALL_STRIKE) {
    GameUtils.printLine(result);
    GameUtils.printLine(END_OF_GAME);
    willPlayMoreGame();
  }
  if (result !== ALL_STRIKE) {
    GameUtils.printLine(result);
    userGuessNumber();
  }
};

const generateRandomNumber = (startNum, endNum) => {
  const randomArr = [];
  while (randomArr.length < 3) {
    const randomPick = MissionUtils.Random.pickNumberInRange(startNum, endNum);
    if (!randomArr.includes(randomPick)) randomArr.push(randomPick);
  }
  return randomArr;
};

const userGuessNumber = () => {
  readLine("3자리 숫자를 입력해 주세요 : ", (answer) => {
    Validate.userGuessNumbers(answer);
    BaseballGame.compareComputerAndUser(answer);
  });
};

module.exports = BaseballGame;
