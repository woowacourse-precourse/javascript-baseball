const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./message/message");
const checkException = require("./checkException");

function getUserInput() {
  let uesrInput = "";
  MissionUtils.Console.readLine(Message.INPUT, (input) => {
    console.log(input);
    if (!checkException(input)) {
      console.log(Message.ERROR);
      throw Message.ERROR;
      MissionUtils.Console.close();
    }
    uesrInput = input;
  });
  return uesrInput;
}

module.exports = getUserInput;
