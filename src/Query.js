const { Console } = require("@woowacourse/mission-utils");
const { END, RESTART_OR_END_QUERY, NUMBER_INPUT_QUERY } = require("./Constant");
const { checkThreeDifferentNumbers, checkOneOrTwo } = require("./Error");
const { makeBallStrikeCount, makeHint, makeRandomNumber } = require("./Make");

function selectNextQuery(
  strike,
  randomNumbers,
  selectNumQueryFn,
  restartQueryFn
) {
  if (strike === 3) {
    Console.print(END);
    restartQueryFn(selectNumQueryFn);
  } else {
    selectNumQueryFn(randomNumbers, selectNextQuery);
  }
}

function restartQuery(selectNumQueryfn) {
  Console.readLine(RESTART_OR_END_QUERY, (answer) => {
    checkOneOrTwo(answer);
    if (answer === "1") {
      selectNumQueryfn(makeRandomNumber(), selectNextQuery);
    } else {
      Console.close();
    }
  });
}

function selectNumQuery(randomNumbers, selectNextQueryFn) {
  Console.readLine(NUMBER_INPUT_QUERY, (answer) => {
    checkThreeDifferentNumbers(answer);
    const { strike, ball } = makeBallStrikeCount(answer, randomNumbers);
    Console.print(makeHint(strike, ball));
    selectNextQueryFn(strike, randomNumbers, selectNumQuery, restartQuery);
  });
}

module.exports = { selectNumQuery, restartQuery, selectNextQuery };
