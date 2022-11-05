const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./message/message");
const createResult = require("././createResult");

function restartGame() {
  const restartInput = 1;
  const RESTART = true;
  const EXIT = false;
  let result = "";

  MissionUtils.Console.readLine("", (input) => {
    console.log(input);
    if (!checkException(input, restartInput)) {
      console.log(Message.ERROR);
      throw Message.ERROR;
      MissionUtils.Console.close();
    }
    result = input;
  });
  if (result === 1) {
    return RESTART;
  } else if (result === 2) {
    return EXIT;
  }
}

function playGame(answer) {
  let repeat = true;
  let restart = false;
  while (repeat) {
    const userInput = getUserInput();
    const result = createResult(userInput, answer);
    console.log(result);
    if (result === Message.CORRECT) {
      console.log(Message.FINISH);
      restart = restartGame();
      repeat = false;
    }
  }
  return restart;
}

module.exports = playGame;
