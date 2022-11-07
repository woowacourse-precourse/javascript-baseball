const setRandomNum = require("./randomNumber").setRandomNum;
const inputAnswer = require("./answer").inputAnswer;
const isRightAnswer = require("./answer").isRightAnswer;
const calculateResult = require("./result").calculateResult;
const printResult = require("./result").printResult;
const checkStop = require("./result").checkStop;

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    var randomNum;
    var player;
    var stop = false;
    var result = [];
    var state;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    randomNum = setRandomNum();

    while (!stop) {
      player = inputAnswer();
      isRightAnswer(player);

      result = calculateResult(randomNum, player);
      printResult(result);

      if (result[0] == 3) state = checkStop();

      if (state == 1) randomNum = setRandomNum();
      else if (state == 2) stop = true;

      state = 0;
    }
  }
}

module.exports = App;
