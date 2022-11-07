const RESULT_SUCCESS = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RESULT_NOTHING = "낫싱";
const RESULT_BALL = "볼";
const RESULT_STRIKE = "스트라이크";
const STOP_CHECKING = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";

const MissionUtils = require("@woowacourse/mission-utils");

exports.calculateResult = function calculateResult(random, player) {
  var playerArr = [...player].map((item) => Number(item));
  var strike = 0;
  var ball = 0;

  for (let i = 0; i < random.length; i++) {
    if (playerArr[i] == random[i]) strike++;
    else if (playerArr[i] != random[i] && random.includes(playerArr[i])) ball++;
  }

  return [strike, ball];
};

function getResultString(result) {
  var strike = result[0];
  var ball = result[1];

  if (strike == 0 && ball == 0) return RESULT_NOTHING;
  else if (strike != 0 && ball == 0) return strike + RESULT_STRIKE;
  else if (strike == 0 && ball != 0) return ball + RESULT_BALL;
  else return ball + RESULT_BALL + " " + strike + RESULT_STRIKE;
}

exports.printResult = function printResult(result) {
  var string = getResultString(result);

  MissionUtils.Console.print(string);
  if (result[0] == 3) {
    MissionUtils.Console.print(RESULT_SUCCESS);
  }
};
