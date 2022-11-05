const MissionUtils = require("@woowacourse/mission-utils");
const checkException = require("./checkException");
const Message = require("./message/message");
const createResult = require("././createResult");

function playGame(answer) {
  MissionUtils.Console.readLine(
    `${Message.START}\n${Message.INPUT}`,
    (input) => {
      console.log(input);
      if (checkException(input)) {
        throw Message.ERROR;
        MissionUtils.Console.close();
      }
    }
  );
  return createResult(input, answer);
}

module.exports = playGame;
