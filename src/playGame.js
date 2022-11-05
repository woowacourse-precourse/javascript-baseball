const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./message/message");
const createResult = require("././createResult");
const getUserInput = require("././getUserInput");
const checkException = require("././checkException");

const restartGame = () => {
  const restartInput = 1;
  const RESTART = true;
  const EXIT = false;
  let result = "";

  MissionUtils.Console.readLine("", (input) => {
    MissionUtils.Console.print(input);
    if (!checkException(input, restartInput)) {
      MissionUtils.Console.print(Message.ERROR);
      throw Message.ERROR;
    }
    MissionUtils.Console.close();
    result = input;
  });
  if (result === "1") {
    return RESTART;
  } else if (result === "2") {
    return EXIT;
  }
};

const playGame = (answer) => {
  let repeat = true;
  let restart = false;
  while (repeat) {
    const userInput = getUserInput();
    const result = createResult(userInput, answer);
    MissionUtils.Console.print(result);
    if (result === Message.CORRECT) {
      MissionUtils.Console.print(Message.FINISH);
      restart = restartGame();
      repeat = false;
    }
  }
  return restart;
};

module.exports = playGame;
