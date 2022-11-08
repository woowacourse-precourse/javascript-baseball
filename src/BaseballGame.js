const MissionUtils = require("@woowacourse/mission-utils");
const GameUtils = require("./utils/GameUtils");
const scoreUtil = require("./utils/scoreUtil");
const generateRandom = require("./utils/generateRandom");
const printFormat = require("./utils/printingFormat");
const Validate = require("./Validate");

//상수 선언
const ALL_STRIKE = "3스트라이크";
const END_OF_GAME = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const USER_CHOICE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
const CONTINUE_YES = "1";
const CONTINUE_NO = "2";

class BaseballGame {
  static randomNumber = [];

  static gameStart() {
    console.log("숫자 야구 게임을 시작합니다.");
    BaseballGame.gameStartStepTwo();
  }
  static gameStartStepTwo() {
    this.randomNumber = generateRandom();
    userGuessNumber();
  }

  static compareComputerAndUser(userGuessNumberm, random) {
    //볼, 스트라이크, 낫싱 계산
    const score = scoreUtil.calculateScore(userGuessNumberm, random);

    //계산 결과를 출력을 위한 string으로 변환.
    const result = printFormat.printFormat(score);
    showResult(result);
  }
}

const willPlayMoreGame = () => {
  MissionUtils.Console.readLine(USER_CHOICE, (answer) => {
    Validate.userChoice(answer);

    if (answer === CONTINUE_YES) {
      BaseballGame.gameStartStepTwo();
    }
    if (answer === CONTINUE_NO) {
      MissionUtils.Console.close();
    }
  });
};

const showResult = (result) => {
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

const userGuessNumber = () => {
  MissionUtils.Console.readLine("숫자를 입력해 주세요 : ", (answer) => {
    Validate.userGuessNumbers(answer);
    const numberArr = GameUtils.userInputToNumberArr(answer);
    BaseballGame.compareComputerAndUser(numberArr, BaseballGame.randomNumber);
  });
};

module.exports = BaseballGame;
