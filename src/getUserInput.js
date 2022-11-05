const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./message/message");
const checkException = require("./checkException");

function getUserInput() {
  const playingInput = 0;
  let userInput = "";
  MissionUtils.Console.readLine(Message.INPUT, (input) => {
    console.log(input);
    if (!checkException(input, playingInput)) {
      console.log(Message.ERROR);
      throw Message.ERROR;
      MissionUtils.Console.close();
    }
    userInput = input;
  });
  return userInput;
}

module.exports = getUserInput;
