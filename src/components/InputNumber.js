const MissionUtils = require("@woowacourse/mission-utils");
const CheckError = require("./error/CheckError");
const CheckBallCount = require("./CheckBallCount");
const PrintBallCount = require("./PrintBallCount");
const App = require("../App");

const InputNumber = (targetNumber) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    console.log(targetNumber); // 필히 삭제
    CheckError(answer);
    guessNumber(answer, targetNumber);
  });
};

const guessNumber = (answer, targetNumber) => {
  let userGuessedNumber;
  userGuessedNumber = answer.split("").map((v) => +v);

  let [ball, strike] = CheckBallCount(targetNumber, userGuessedNumber);

  PrintBallCount(ball, strike);
  strike > 2
    ? (function () {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        App.manageGame();
      })()
    : InputNumber(targetNumber);
};

module.exports = InputNumber;
