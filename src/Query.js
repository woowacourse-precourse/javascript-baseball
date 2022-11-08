const { END } = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");
const { checkOneOrTwo } = require("./Error");
const { makeRandomNumber } = require("./Make");
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

module.exports = { selectNextQuery, restartQuery };
