const baseballGame = require('./BaseballGame');
const printMessage = require('./PrintMessage');

const printResult = (resultMessage, result) => {
  if (resultMessage === 'nothing') {
    printMessage.printNothing();
  }
  if (resultMessage === 'ballAndStrike') {
    printMessage.printBallStrike(result);
  }
  if (resultMessage === 'strike') {
    printMessage.printStrike(result);
  }
  if (resultMessage === 'ball') {
    printMessage.printBall(result);
  }
};

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

const printAnswer = (answer, result) => {
  compareResult(result);
  baseballGame.orderInput(answer);
};

module.exports = printAnswer;
