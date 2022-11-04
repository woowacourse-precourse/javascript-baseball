const MissionUtils = require("@woowacourse/mission-utils");

function playGame() {
  MissionUtils.Console.readLine(
    "숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ",
    (input) => {
      console.log(input);
    }
  );
}

playGame();

module.exports = playGame;
