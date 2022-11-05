const MissionUtils = require("@woowacourse/mission-utils");
const checkException = require("./checkException");
const Message = require("./message/message");

function playGame() {
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
}

playGame();

module.exports = playGame;
