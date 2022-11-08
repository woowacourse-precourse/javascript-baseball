const { Console } = require("@woowacourse/mission-utils");

const { MESSAGE, GAME } = require("./constant");
const generateComputerAnswer = require("./generateComputerAnswer");

function askRestartOrStop() {
  Console.print(MESSAGE.win);
  Console.readLine(MESSAGE.replayOrStop, (answer) => {
    if (answer === GAME.restart) restartGame();
    if (answer === GAME.stop) stopGame();
    if (answer !== GAME.restart && answer !== GAME.stop) throw new Error();
  });
}

function restartGame() {
  const computerAnswer = generateComputerAnswer();
  playSubroutine(computerAnswer);
}

function stopGame() {
  Console.close();
}

module.exports = askRestartOrStop;
const playSubroutine = require("./playSubroutine");
