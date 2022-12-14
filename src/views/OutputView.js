const { Console } = require("@woowacourse/mission-utils");
const { MSG, STEP } = require("../constants/constants");

const OutputView = {
  printStart() {
    Console.print(MSG.START);
  },

  printResult(cars, results) {
    Console.print(MSG.RESULT);
    results[0].forEach((result) => {
      result.forEach((val, idx) => {
        Console.print(cars[idx] + ": " + STEP.repeat(val));
      });
      Console.print("");
    });

    Console.print(MSG.WINNER + results[1].join(","));
    Console.close();
  },
};

module.exports = OutputView;
