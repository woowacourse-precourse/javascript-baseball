const { Console } = require("@woowacourse/mission-utils");

const { MESSAGE, GAME } = require("./constant");
const getHint = require("./getHint");
const validateAnswer = require("./validateAnswer");

function playSubroutine(computerAnswer, hint = "") {
  console.log(computerAnswer);
  if (hint === GAME.endCondition) askRestartOrStop();

  Console.readLine(MESSAGE.requireAnswer, (answer) => {
    const isValid = validateAnswer(answer);
    if (!isValid) throw new Error();

    const hint = getHint(computerAnswer, answer);
    Console.print(hint);

    playSubroutine(computerAnswer, hint);
  });
}

module.exports = playSubroutine;
const askRestartOrStop = require("./askRestartOrStop");
