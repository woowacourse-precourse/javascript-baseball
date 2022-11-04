const MissionUtils = require("@woowacourse/mission-utils");
const checkException = require("./checkException");
const Message = require("./message/message");

function playGame() {
  MissionUtils.Console.readLine(
    `${Message.START}\n${Message.INPUT}`,
    (input) => {
      console.log(input);
      checkException(input);
    }
  );
}

playGame();

module.exports = playGame;
