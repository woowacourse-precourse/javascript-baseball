const baseballGame = require('./BaseballGame');

const compareResult = result => {
  let resultMessage = '';
  if (!result.strike && !result.ball) {
    resultMessage = 'nothing';
  }
  if (result.strike && result.ball) {
    resultMessage = 'ballAndStrike';
  }
  if (result.strike && !result.ball) {
    resultMessage = 'strike';
  }
  if (!result.strike && result.ball) {
    resultMessage = 'ball';
  }
  printResult(resultMessage, result);
};

const getResult = (answer, result) => {
  compareResult(result);
  baseballGame.orderInput(answer);
};

module.exports = getResult;
