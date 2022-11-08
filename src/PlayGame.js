const MissionUtils = require("@woowacourse/mission-utils");

function playGame() {
  MissionUtils.Console.readLine(
    "서로다른 숫자 3자리를 입력해주세요 : ",
    (input) => {
      console.log(input);
    }
  );
}

playGame();

module.exports = playGame;