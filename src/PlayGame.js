const MissionUtils = require("@woowacourse/mission-utils");
const checkException = require("./checkException");
const createResult = require("././createResult");

const MissionUtils = require("@woowacourse/mission-utils");

function playGame(answer) {
  MissionUtils.Console.readLine(
    "서로 다른 숫자 3자리를 입력해주세요 : ",
    (input) => {
      console.log(input);
      console.log(checkException(input));
    }
  );
  return createResult(input, answer);
}

playGame();

module.exports = playGame;