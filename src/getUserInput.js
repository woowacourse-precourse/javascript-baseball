const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./message/message");
const $utils = MissionUtils.Console;
const checkException = require("./checkException");

const getUserInput = () => {
  const playingInput = 0;
  let userInput = "";
  $utils.readLine(Message.INPUT, (input) => {
    $utils.print(input);
    if (!checkException(input, playingInput)) {
      $utils.print(Message.ERROR);
      throw Message.ERROR;
    }
    userInput = input;
    $utils.close();
  });

  return userInput;
};

module.exports = getUserInput;
