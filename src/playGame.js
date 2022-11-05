const Message = require("./message/message");
const createResult = require("././createResult");

function playGame(answer) {
  let repeat = true;
  while (repeat) {
    const userInput = getUserInput();
    const result = createResult(userInput, answer);
    console.log(result);
    if (result === Message.CORRECT) {
      console.log(Message.FINISH);
      repeat = false;
    }
  }
}

module.exports = playGame;
