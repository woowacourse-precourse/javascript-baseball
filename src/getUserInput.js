const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./message/message");
const checkException = require("./checkException");

function getUserInput() {
  const playingInput = 0;
  let userInput = "";
  MissionUtils.Console.readLine(Message.INPUT, (input) => {
    MissionUtils.Console.print(input);
    if (!checkException(input, playingInput)) {
      MissionUtils.Console.print(Message.ERROR);
      throw Message.ERROR;
    }
    userInput = input;
    MissionUtils.Console.close();
  });

  return userInput;
}

module.exports = getUserInput;
