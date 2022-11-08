const { END } = require("./Constant");

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

module.exports = { selectNextQuery };
