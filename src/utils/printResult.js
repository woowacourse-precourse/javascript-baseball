const { RESULT } = require("../constant/constants");
const { Console } = require("@woowacourse/mission-utils");

const printResult = (strikeNumber, ballNumber) => {
  if (strikeNumber === 0 && ballNumber === 0) Console.print(RESULT.NOTHING);
  else if (strikeNumber > 0 && ballNumber === 0)
    Console.print(`${strikeNumber}${RESULT.STRIKE}`);
  else if (strikeNumber === 0 && ballNumber > 0)
    Console.print(`${ballNumber}${RESULT.BALL}`);
  else if (strikeNumber > 0 && ballNumber > 0)
    Console.print(
      `${ballNumber}${RESULT.BALL} ${strikeNumber}${RESULT.STRIKE}`
    );
};

module.exports = {
  printResult,
};
